using DBServer;
using DBServer.Helpers;
using DBServer.Interfaces;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.AspNetCore.SpaServices.StaticFiles;
using System.Text.Json.Serialization;
using ToDoList.Server.Helpers;

namespace ToDoList.Server
{
  public class Startup(IWebHostEnvironment env)
  {
    private readonly IConfigurationRoot Configuration = new ConfigurationBuilder()
            .SetBasePath(env.ContentRootPath)
            .AddJsonFile("appSettings.json", optional: false)
            .AddEnvironmentVariables()
            .Build();

    public void ConfigureServices(IServiceCollection services)
    {
      string? connectionstring = Configuration["ConnectionStrings:DefaultConnection"];
      if (string.IsNullOrEmpty(connectionstring))
      {
        throw new InvalidOperationException("Connection string 'DefaultConnection' is not configured.");
      }

      var builder = WebApplication.CreateBuilder();

      var cnfLog = Configuration.GetSection("Logging");
      builder.Logging.AddConfiguration(cnfLog);
      builder.Logging.AddConsole();
      builder.Logging.AddFilter("Microsoft.EntityFrameworkCore.Database.Command", LogLevel.Warning);
      builder.Logging.AddFilter("Microsoft.EntityFrameworkCore.Infrastructure", LogLevel.Warning);
      builder.Logging.AddFilter("Microsoft.AspNetCore", LogLevel.Warning);

      services.AddControllersWithViews()
            .AddJsonOptions(opts =>
            {
              opts.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
            })
            .AddNewtonsoftJson();

      services.AddSingleton<IConfiguration>(Configuration);
      services.AddSqlite<DataContext>("DataSource=webApi.db");
      services.AddScoped<IToDoListRepository, ToDoListRepository>();

      services.AddSingleton<IConfiguration>(Configuration);
      services.AddAutoMapper(cfg =>
      {
        cfg.LicenseKey = builder.Configuration["AutoMapper:Key"];
      });
      services.AddAutoMapper(cfg => { }, typeof(MappingProfile));

      /*
       * TODO: This is for Bundler & Minifier support.
      services.AddBundles(options =>
        {
          options.AppendVersion = true;
        });
      */

      services.AddOpenApi();

      //This adds support for WebApi and Controllers with Views.
      services.AddRazorPages();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (!env.IsDevelopment())
      {
        app.UseHsts();
        app.UseExceptionHandler("/Home/Error");
      }
      else
      {
        app.UseDeveloperExceptionPage();

        // migrate any database changes on startup (includes initial db creation)
        using var scope = app.ApplicationServices.CreateScope();
        var dataContext = scope.ServiceProvider.GetRequiredService<DataContext>();
        dataContext.Database.EnsureCreated();

        try
        {
          // dataContext.Database.Migrate();
          SeedData.EnsurePopulated(dataContext);
        }
        catch (Exception ex)
        {
          var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
          logger.LogError(ex, "An error occurred while migrating the database.");
        }
      }

      app.UseRouting();
      app.UseDefaultFiles();

      //Must be declared between UseRouting and UseEndpoints.
      app.UseAuthorization();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapStaticAssets();
        endpoints.MapFallbackToFile("/index.html");
        endpoints.MapControllerRoute(
                 name: "default",
                 pattern: "{controller=Home}/{action=Index}/{id?}");
        endpoints.MapRazorPages();

        if (env.IsDevelopment())
        {
          endpoints.MapOpenApi();
        }
      });

      app.UseSpa(spa =>
      {
        string strategy = Configuration.GetValue<string>("DevTools:ConnectionStrategy") ?? "proxy";

        spa.Options.SourcePath = "../ClientApp";

        if (env.IsDevelopment())
        {
          if (strategy == "proxy")
          {
            spa.UseProxyToSpaDevelopmentServer("http://localhost:4200/");
          }
          else if (strategy == "managed")
          {
            spa.UseAngularCliServer(npmScript: "start");
          }
        }
      });

    }
  }
}

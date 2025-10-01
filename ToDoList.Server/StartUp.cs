using DBServer;
using DBServer.Helpers;
using DBServer.Interfaces;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.AspNetCore.SpaServices.StaticFiles;
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

        // builder.WebHost.UseUrls("http://localhost:3000");

        var cnfLog = Configuration.GetSection("Logging");
        builder.Logging.AddConfiguration(cnfLog);
        builder.Logging.AddConsole();
        builder.Logging.AddFilter("Microsoft.EntityFrameworkCore.Database.Command", LogLevel.Warning);
        builder.Logging.AddFilter("Microsoft.EntityFrameworkCore.Infrastructure", LogLevel.Warning);
        builder.Logging.AddFilter("Microsoft.AspNetCore", LogLevel.Warning);

        services.AddControllersWithViews()
              .AddJsonOptions(opts => {
                opts.JsonSerializerOptions.DefaultIgnoreCondition = System.Text.Json.Serialization.JsonIgnoreCondition.WhenWritingNull;
              })
              .AddNewtonsoftJson();

        services.AddSingleton<IConfiguration>(Configuration);
        services.AddSqlite<DataContext>("DataSource=webApi.db");
        services.AddScoped<IToDoListRepository, ToDoListRepository>();

        services.Configure<SpaStaticFilesOptions>(options =>
        {
          //Sadly, this appears to be the only SPA option that can be overridden in code.
          //Set this if we want the SPA files to be included in the main project, instead of run as a separate project with a proxy etc.
          // options.RootPath = "ClientApp/dist";
        });

        services.AddSingleton<IConfiguration>(Configuration);
        services.AddAutoMapper(cfg => {
          cfg.LicenseKey = builder.Configuration["AutoMapper:Key"];
        });
        services.AddAutoMapper(cfg => { }, typeof(MappingProfile));
        services.AddOpenApi();
        
        //this adds support for WebApi and controllers with views.
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
          endpoints.MapControllers();
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

          spa.Options.SourcePath = "ClientApp";

          if (env.IsDevelopment())
          {
            if (strategy == "proxy")
            {
              spa.UseProxyToSpaDevelopmentServer("http://127.0.0.1:58170");
            }
            else if (strategy == "managed")
            {
              spa.UseAngularCliServer(npmScript: "start");
            }
          }
        });

        app.UseForwardedHeaders(new ForwardedHeadersOptions
        {
          //Forward client IP and originating scheme (HTTP/HTTPS). This is to support HTTPS redirects.
          // ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
        });
      }
    }
  }


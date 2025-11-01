using DBServer;
using DBServer.Helpers;
using DBServer.Interfaces;
using Microsoft.AspNetCore.Mvc.NewtonsoftJson;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using System.Reflection;
using System.Text.Json.Serialization;
using ToDoList.Server.Helpers;

namespace ToDoList.Server
{
  public class Startup(IWebHostEnvironment env)
  {
    private readonly IConfigurationRoot Configuration = new ConfigurationBuilder()
            .SetBasePath(env.ContentRootPath)
            .AddJsonFile("appSettings.json", false, true)
            .AddJsonFile($"appsettings.{env.EnvironmentName}.json", true, true)
            .AddUserSecrets(Assembly.GetExecutingAssembly(), true)
            .AddEnvironmentVariables()
            .Build();

    public void ConfigureServices(IServiceCollection services)
    {
      var builder = WebApplication.CreateBuilder();

      var cnfLog = Configuration.GetSection("Logging");
      builder.Logging.AddConfiguration(cnfLog);
      builder.Logging.AddConsole();

      services.AddControllersWithViews(options =>
            {
              options.InputFormatters.Insert(0, MyJPIF.GetJsonPatchInputFormatter()); //Support for PATCH method.
              options.ModelMetadataDetailsProviders.Add(new NewtonsoftJsonValidationMetadataProvider()); //Use JSON property names in validation errors
              // options.MaxModelValidationErrors = 25;
            }
       )
       .AddNewtonsoftJson(options =>
       {
         options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
         options.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore;

       }); // Needed for PATCH method support.

      services.AddSingleton<IConfiguration>(Configuration);

      services.AddSqlite<DataContext>("DataSource=webApi.db", 
        x => x.MigrationsAssembly("DBServer"));
      services.AddScoped<IToDoListRepository, ToDoListRepository>();

      services.AddAutoMapper(cfg =>
      {
        cfg.LicenseKey = builder.Configuration["AutoMapper:Key"];

      }, typeof(MappingProfile));

      /*
       * TODO: This is for Bundler & Minifier support.
      services.AddBundles(options =>
        {
          options.AppendVersion = true;
        });
      */

      //Needed for MapRazorPages() method call.
      services.AddRazorPages();

      if (env.IsDevelopment())
      {
        services.AddOpenApi();
      }
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

        //This adds support for WebApi and Controllers with Views.
        endpoints.MapRazorPages();

        if (env.IsDevelopment())
        {
          endpoints.MapOpenApi( );
        }
      });

      if (env.IsDevelopment())
      {
        app.UseSwaggerUI(options =>
        {
          options.SwaggerEndpoint("/openapi/v1.json", "v1");
        });

        app.UseSpa(spa =>
        {
          string strategy = Configuration.GetValue<string>("DevTools:ConnectionStrategy") ?? "managed";

          if (strategy == "proxy")
          {
            spa.UseProxyToSpaDevelopmentServer("http://localhost:4200/");
          }
          else if (strategy == "managed")
          {
            spa.Options.SourcePath = "../ClientApp";
            spa.UseAngularCliServer(npmScript: "start");
          }
        });
      }
    }
  }
}

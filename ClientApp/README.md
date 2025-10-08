## Quick Start.

- Run the EntityFramework migrations in order to create and upgrade the database.
- The Connection Strategy is set to "managed", which means that the Angular development server will launch automatically in the background to supply the runtime files to the MVC controller.
- Invoke the "ToDoList" profile either by selecting it from the VS toolbar and hitting F5, or typing dotnet run --profile "ToDoList" in the console. If the database has been correctly created, the app should run out-of-the-box with no problems. (There is a connection string defined, but it isn't used.)

## Aims

There were a few things I wanted to accomplish:

- Use a minimal development framework instead of the built-in dotnet Angular project template. I find this template very messy, with ports scattered over proxy files and project directives. I'm not crazy about MS's embrace of third-party technologies - they often break the standard. (For example, the Docker compose file that the VS template creates does not work like a normal compose file.)
  Instead, I opted to use a setup demonstrated by Adam Freeman in an Angular/MVC book from a few years ago. This approach has a number of advantages. Firstly, it allows you to embed the Angular runtime files in an MVC controller, giving all the benefits of dotnet tooling - libman.json, bundleConfig, conditional script inclusion, minification, etc. Of course, you can do this in the published version just by copying and pasting the runtime files into the page. But this approach allows you to do it in a dev environment at runtime. Secondly, it gives you more development options. You can either run the application in "managed" mode, which will fire up the Angular dev server automatically, or in "proxy" mode. In the latter case, you have to start the Angular dev server manually first, but it allows change monitoring and instant reloads.
- Reuse a framework I built a few years ago for a large-scale application. This makes use of a client-side repository which mirrors the server-side repository (an approach again based on Adam Freeman's code.) This was quite a large data entry app that I wrote for a medical data company that had many screens. I would have preferred it if the received repository idea was implemented as a service. As it stands, I doesn't have an interface and has to be wired up to events inside the client component. However, one reason for implementing a service is to facilitate swapping the provider. But you can actually do that in the REST backend, so maybe it isn't worth doing at the client side.
- DB Repository pattern. The requirement didn't ask for a real database. But repository code is trivially easy to write, and I had plenty on hand, so it didn't take any time to write it. It's a tried and tested solution, and if you want to do unit testing, you need an injectable repository.

## Project

- I didn't have a specific description for the project. I thought of several features I wanted to include.
- In-place editing for existing todo items. If an item is already in edit mode, this needs to be reset if a different item is selected for editing. I used a service to broadcast the edit event to all items in the list.
- If an item is marked completed, it immediately updates without the user needing to click a save button.
- The item's style immediately updates to show completed status.

## Issues

- The legacy framework was built around an older Angular version (probably 12), and the requirement was to use the most current version (20). For some reason, if you don't specify an Angular version when creating an application, you get version 16. This version turned out to be compatible with my framework, but when I realised it was not the current version, I tried replacing the client-side code. However, version 20 didn't work out-of-the-box. I took me almost a day to figure out why. I took the 16 code and ran the upgrade command to 17. That was OK. But when I got to 18, things went wrong. The actual problem is the offer to migrate the code-base to the "new build system". This system no longer creates the expected runtime libraries. Instead, there's only main.js, and on inspection, this seemed to be a server-side render of the application, not a runtime library at all, even though server-side rendering is not enabled. So I just went through all the upgrades, being careful not to select the migration option each time. I was able to get it up to 20 with full compatibility with my framework. However, this now causes a maintenance headache. The only way to avoid the new build system is to start from a version that doesn't have it, and progressively upgrade. There are other migrations as well, so you have to be careful what you choose. In the long-term, it's possible that the new system will become mandatory, so my dev framework won't work anymore.
- The legacy framework used extensive routing with targeting and resolvers, but these weren't required for a small application like this, so I removed the routing library. Since the app doesn't need to maintain state through reloads, resolvers are not necessary, but I left a couple in the code just to show how they are implemented.
- Even though MS favours a headless MVC startup file now, I still like to use the explicit StartUp class approach because it gives more options. And once it's there, it's there.
- Updating the item style dynamically after the item is marked completed turned out to be quite difficult, and I tried a number of approaches before I hit on the right one. I didn't know where or how to apply the style. But since I'm using html tags a selectors for the items, the solution was to dynamically apply a css class to the selector.

## Breaking changes

- The standalone build used to be for lightweight applications, but the Angular team have decided to make it the default. It sounds like the modular option is going to be deprecated eventually. Fortunately, there's a command to convert existing code. However, as expected, there were issues - the tool didn't pick up everything and I had to do some manual clean-ups.
- The dependency injection system has changed. You used to be able to just inject a service by supplying it as a parameter (similar to the MS MVC platform). Now, there's an explicit inject method. Fortunately, it wasn't a big deal. I consulted the documentation and had everything working in a few minutes.
- There are a number of new coding approaches in 16+, such as a new flow control syntax. I have tried to use these wherever possible. Signals are another big change. I have used these in inputs and outputs.
- I'm puzzled as to why the CLI seems to be arrested at version 16. I know there were a number of breaking changes with that version. I'm wondering if they see later versions as more like patches ...

## Sidetracks

A couple of issues caused me significant frustration and time loss.

- The VS minification library I am using a old and slightly out-of-date. The better alternative is to use a Grunt script. There is a VS extension that promises to convert your bundleConfig.json file to a Grunt script. However, while it installed Grunt 5.0, it wrote the script in Grunt 3 syntax. I tried re-writing the script, but when this proved too difficult, I tried downgrading the Grunt library. But this broke dependencies, so it was back to the old library. It still works ok. (Also, the extension seemed to keep working even after I uninstalled it.)
- AI. When you create an Angular app now, you are asked if you want to enable AI coding support. Apparently, AI is capable of wring an entire app for you in any language if you tell it what you want. That sounded like a real labour-saving idea. As an engine, I selected Cursor, with hilarious results. Attempting to invoke the Generate Project command continually crashed in VS Code. I tried installing their native editor - same problem. Then I went to my Macbook and installed the engine and extension. Same problem. I found a discussion on a Github forum describing the problem, but the discussion had been closed with no resolution. Oh, and the extension was in Mandarin initially. Somehow it came good at some point. (I found a discussion explaining that sometimes it connects to the wrong AI engine.) That was about half a day wasted at that point. I can't understand how they can allow such a broken app in the wild.

## TODO

- I haven't completed the in-line editing functionality. It's obvious how it will work, however.
- There is some issue with the Material stylesheet. Most of the styles seem to be loading, but the datepicker is not rendering correctly. I'll look into this.

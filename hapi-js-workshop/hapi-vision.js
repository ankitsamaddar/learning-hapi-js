const vision = require("@hapi/vision");
const hapi = require("@hapi/hapi");
const path = require("path");
const handlebars = require("handlebars");

//  responds to requests to /?name=Handling
// Use templates using {{query.name}}

const init = async () => {
  const server = hapi.server({
    port: Number(process.argv[2] || 8080),
    host: 'localhost'
  });

  await server.register(vision);

  server.views({
    engines: {
      html: handlebars
    },
    path: path.join(__dirname, "templates")
  });

  server.route({
    method: "GET",
    path: "/",
    handler: {
      view: "index.html"
    }
  });

  await server.start();
  console.log(`Server is running at: ${server.info.uri}`);
}

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init()

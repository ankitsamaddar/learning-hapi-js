const path = require("path");
const hapi = require("@hapi/hapi");
const vision = require("@hapi/vision");
const handlebars = require("handlebars");

const init = async () => {
  const server = hapi.server({
    port: Number(process.argv[2] || 8080),
    host: "localhost",
  });

  await server.register(vision);

  server.views({
    engines: {
      html: handlebars,
    },
    path: path.join(__dirname, "templates"),
    helpersPath: path.join(__dirname, "helpers"),
  });

  server.route({
    method: "GET",
    path: "/",
    handler: {
      view: "index.html",
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();

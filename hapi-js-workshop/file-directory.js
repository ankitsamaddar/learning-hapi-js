const path = require('path');
const hapi = require("@hapi/hapi");
const inert = require("@hapi/inert");

const init = async () => {
  const server = hapi.server({
    port: Number(process.argv[2] || 8080),
    host: "localhost",
  });
  await server.register(inert);

  server.route({
    method: "GET",
    path: "/foo/bar/baz/{filename}",
    handler: {
      directory: {
        path: path.join(__dirname, "public"),
      },
    }
  });

  await server.start();
  console.log(`Server is running at: ${server.info.uri}`);
}

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();

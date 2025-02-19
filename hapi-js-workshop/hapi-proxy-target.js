const hapi = require("@hapi/hapi");

const initTargetServer = async () => {
  const targetServer = hapi.server({
    port: 65535,
    host: "localhost",
  });

  targetServer.route({
    method: "GET",
    path: "/proxy",
    handler: (request, h) => {
      return "Hello from target server!";
    },
  });

  await targetServer.start();
  console.log("Target server running on %s", targetServer.info.uri);
};

initTargetServer();

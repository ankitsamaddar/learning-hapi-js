const hapi = require("@hapi/hapi")

const init = async() => {
  const server = hapi.server({
    port: Number(process.argv[2] || 8080),
    host: "localhost"
  })

  server.route({
    method: "GET",
    path: "/{name}",
    handler: (req) => {
      return `Hello ${req.params.name}`
    }
  })
  await server.start();
  console.log(`Server is running at: ${server.info.uri}`)
}

process.on("unhandledRejection", (err) => {
  console.log(err)
  process.exit(1)
})

init();

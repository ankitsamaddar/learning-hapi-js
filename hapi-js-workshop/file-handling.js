const inert = require("@hapi/inert")
const hapi = require("@hapi/hapi")

const init = async() => {
  const server = hapi.server({
    port: Number(process.argv[2] || 8080),
    host: "localhost",
    routes: {
      files: {
        relativeTo: __dirname
      }
    }
  })

  await server.register(inert)

  server.route({
    method: "GET",
    path: "/",
    handler: {
      file: "index.html"
    }
  })

  await server.start()
  console.log(`Server is running at: ${server.info.uri}`)
}

process.on("unhandledRejection", (err) => {
  console.log(err)
  process.exit(1)
})

init()

const hapi = require ('@hapi/hapi')
const rot13 = require ('rot13-transform')
const fs = require ('fs')
const path = require ('path')
const { PassThrough } = require('stream')
const pass = new PassThrough();
const init = async () => {
  const server = hapi.server({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
  });

  server.route({
    path: '/',
    method: 'GET',
    handler: (request, h) => {
      const thisFile = fs.createReadStream(path.join(__dirname, 'input-rot13.txt'))

      return h.response(thisFile.pipe(rot13()).pipe(pass));
    }
  })

  await server.start()
  console.log('Server running at:', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()

const hapi = require('@hapi/hapi')
const joi = require('joi')

const init = async () => {
  const server = hapi.server({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
  });

  server.route({
    path: '/chickens/{breed?}',
    method: 'GET',
    handler: (request, h) => {
      return `You asked for the chicken ${request.params.breed}`;
    },
    options: {
      validate: {
        params: joi.object({
          breed: joi.string().required()
        })
      }
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

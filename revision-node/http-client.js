const url = process.argv[2]

const http = require('http')

http.get(url, function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)

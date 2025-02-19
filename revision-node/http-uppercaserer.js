const port = Number(process.argv[2])

const http = require('http')
const map = require('through2-map')

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }

  req.pipe(map((data) => {
    return data.toString().toUpperCase()
  })).pipe(res)
})

server.listen(port)

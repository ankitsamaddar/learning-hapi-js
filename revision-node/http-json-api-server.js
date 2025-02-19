const port = Number(process.argv[2])

const http = require('http');

const parsetime = (time) => {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

const unixtime = (time) => {
  return { unixtime: time.getTime() }
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, 'http://example.com')
  const time = new Date(parsedUrl.searchParams.get('iso'))
  let result = undefined

  if (parsedUrl.pathname === '/api/parsetime') {
    result = parsetime(time)
  } else if (parsedUrl.pathname === '/api/unixtime') {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200,  {'content-type': 'application/json'})
    res.end(JSON.stringify(result))
  }
  else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(port)

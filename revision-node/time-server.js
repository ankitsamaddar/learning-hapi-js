const port = Number(process.argv[2])

const net = require('net')

const zeroFill = (i) => (i < 10 ? '0' : '') + i;

const now = () => {
  const d = new Date()
  return `${d.getFullYear()}-${zeroFill(d.getMonth() + 1)}-${zeroFill(d.getDate())} ${zeroFill(d.getHours())}:${zeroFill(d.getMinutes())}`
}

const server = net.createServer((socket) => {
  socket.end(`${now()}\n`)
})

server.listen(port)

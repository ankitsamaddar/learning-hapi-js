let dir = process.argv[2]
let ext = process.argv[3]

const mymodule = require('./mymodule.js')

mymodule(dir, ext, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
  })

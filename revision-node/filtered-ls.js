const dir = process.argv[2]

const ext = "." +process.argv[3];

const fs = require('fs');
const path = require('path');

fs.readdir(dir, (err, list) => {
  if (err) {
    console.error(err)
  }
  for (let file of list) {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  }
})

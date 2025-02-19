'use strict'
const url = process.argv[2];
const http = require('http');

const bl = require('bl');

http.get(url, (response) => {
  response.pipe(bl((err, data) => {
    if (err) {
      console.error(err);
    }
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }))
})

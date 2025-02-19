'use strict'

const fs = require('fs');

let buf = fs.readFileSync("./hello-world.js")

const str = buf.toString();

let arr = str.split('\n');

console.log(arr.length - 1);

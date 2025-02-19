"use strict";

const fs = require("fs");
const file = process.argv[2];

fs.readFile(file, "utf-8", function (err, contents) {
  if (err) {
    return console.log(err);
  }
  const arr = contents.toString().split("\n");
  console.log(arr.length - 1);
});

const urls = process.argv.slice(2);
const http = require('http');
const bl = require('bl');
const results = [];
let count = 0;


// function printResults() {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i]);
//   }
// }
const printResults = () => {
  results.forEach((result) =>{
    console.log(result);
  })
}

function httpGet(index) {
  http.get(urls[index], (response) => {
    response.pipe(bl((err, data) => {
      if (err) {
        console.error(err);
      }
      results[index] = data.toString();
      count++;
      if (count === 3) {
        printResults();
      }
    }))
  })
}

for (let i = 0; i < 3; i++){
  httpGet(i);
}

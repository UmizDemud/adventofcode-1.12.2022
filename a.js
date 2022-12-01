var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
  input: fs.createReadStream('input.txt')
});

let largest = 0;
let running = 0;

myInterface.on('line', function (line) {
  // console.log(line)
  if (line.length === 0) {
    if (running > largest) {
      largest = running;
    }
    running = 0;
  } else {
    running += Number.parseInt(line);
  }
}).on('close', () => {
  if (running > largest) {
    largest = running;
    running = 0;
  }

  console.log(largest)
});

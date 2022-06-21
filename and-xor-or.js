'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function() {
  inputString = inputString.split('\n');
	main();
});

function readLine() {
  return inputString[currentLine++];
}


function andXorOr(a) {
  const array = [];
  let result = 0;
  for (let i = 0; i < a.length; i++){
    while (array.length > 0) {
      const top = array[array.length - 1];
      const current = a[i] ^ top;
      result = Math.max(result, current);
      if (top > a[i]) {
        array.pop();
      } else {
        break;
      }   
    }
    array.push(a[i]);
  }
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
  const result = andXorOr(a);
  ws.write(result + '\n');
  ws.end();
}

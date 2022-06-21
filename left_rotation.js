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

function rotateLeft(d, arr) {
  let arr1 = [];
  for(let i = d; i < arr.length; i++){
    arr1.push(arr[i])
  }
  for(let i = 0; i < d; i++){
    arr1.push(arr[i])
  }
  return arr1
  }


function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
  const n = parseInt(firstMultipleInput[0], 10);
  const d = parseInt(firstMultipleInput[1], 10);
  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
  const result = rotateLeft(d, arr);
  ws.write(result.join(' ') + '\n');
  ws.end();
}

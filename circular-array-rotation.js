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

function circularArrayRotation(a, k, queries) {
  Array.from({length: k}).forEach(() => a.unshift(a.pop()));
  return queries.map(i => a[i]);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
  const n = parseInt(firstMultipleInput[0], 10);
  const k = parseInt(firstMultipleInput[1], 10);
  const q = parseInt(firstMultipleInput[2], 10);
  const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
  let queries = [];
  for (let i = 0; i < q; i++) {
    const queriesItem = parseInt(readLine().trim(), 10);
    queries.push(queriesItem);
  }
  const result = circularArrayRotation(a, k, queries);
  ws.write(result.join('\n') + '\n');
  ws.end();
}

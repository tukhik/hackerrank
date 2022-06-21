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

/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
  const arr = {};
  for (const [a, b, c] of queries) {
    arr[a] =  (arr[a] || 0) + c;
    arr[b+1] = (arr[b+1] || 0) - c;
  }   
  let last = 0
  let max = 0
  for (let i=0; i<n+1; i++) {
    const curr = arr[i] || 0;
    last = last + curr;
    if (last > max) {
      max = last;
    }
  }
  return max
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');
  const n = parseInt(firstMultipleInput[0], 10);
  const m = parseInt(firstMultipleInput[1], 10);
  let queries = Array(m);
  for (let i = 0; i < m; i++) {
    queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
  }
  const result = arrayManipulation(n, queries);
  ws.write(result + '\n');
  ws.end();
}

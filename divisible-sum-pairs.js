process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();    
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function main() {
  let n_temp = readLine().split(' ');
  let n = parseInt(n_temp[0]);
  let k = parseInt(n_temp[1]);
  a = readLine().split(' ');
  a = a.map(Number);
  
  count = 0;
  for(i = 0; i < n; i++){
    for(j = 0; j < n; j++){
      if((i < j) && (((a[i] + a[j]) % k) == 0)){
        count++;
      }
    }      
  }  
  console.log(count);
}

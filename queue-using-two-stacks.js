function processData(input) {
	let lines = input.split("\n");
	let count =+ lines[0];
	let que = [];
	for (let i = 1; i <= count; i++) {
	  let args = lines[i].split(' ');
	  let cmd = +args[0];
	  let arg;
	  switch (cmd) {
	    case 1:
	      arg = args[1];
	      que.push(arg);
	      break;
	    case 2:
	      que.shift();
	      break;
	    case 3:
	      console.log(que[0]);
	      break;
	  }
	}
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});

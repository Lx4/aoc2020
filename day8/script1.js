const fs = require("fs");

const instructions = [];
const data = fs.readFileSync("./dataset", "UTF-8");
const lines = data.split(/\r?\n/);

for (line of lines) {
  let match = line.match(/(.*) (.*)/);
  const instruction = {
    opcode: match[1],
    immediate: parseInt(match[2]),
  };
  instructions.push(instruction);
}

// instructions initialized

let ip = 0;
let acc = 0;
let visitedAddress = [];

while (!visitedAddress.includes(ip)) {
  visitedAddress.push(ip);
  const instruction = instructions[ip];
  switch (instruction.opcode) {
    case "nop":
      ip++;
      break;
    case "jmp":
      ip += instruction.immediate;
      break;
    case "acc":
      ip++;
      acc += instruction.immediate;
      break;
    default:
      break;
  }
}

console.log("Acc is " + acc);

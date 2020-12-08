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
console.log(runInterpreter(instructions));

for (let i = 0; i < instructions.length; i++) {
  let mutatedInstructions = JSON.parse(JSON.stringify(instructions));
  if (mutatedInstructions[i].opcode === "jmp")
    mutatedInstructions[i].opcode = "nop";
  else if (mutatedInstructions[i].opcode === "nop")
    mutatedInstructions[i].opcode = "jmp";
  const result = runInterpreter(mutatedInstructions);
  if (result.ip === instructions.length) console.log(result);
}

// runInterpreter

function runInterpreter(instructions) {
  let ip = 0;
  let acc = 0;
  const visitedAddress = [];

  while (!visitedAddress.includes(ip) && ip < instructions.length) {
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
  return { ip, acc };
}

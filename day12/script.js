const puzzle = require("./dataset");

const regex = /([A-Z])([0-9]*)/;
const instructions = puzzle.map((datum) => {
  let match = datum.match(regex);
  const instruction = {
    action: match[1],
    value: parseInt(match[2]),
  };
  return instruction;
});

console.log(instructions);

// y = north/south position
// x = east/west position
// E: 0, North: 90, W: 180, S: 270

function runInstructions(instructions) {
  let x = 0,
    y = 0;
  let direction = 0;
  for (instruction of instructions) {
    console.log("x = " + x);
    console.log("y = " + y);
    console.log("direction = " + direction);
    [x, y, direction] = move(x, y, direction, instruction);
    console.log("x2 = " + x);
    console.log("y2 = " + y);
    console.log("direction2 = " + direction);
  }
  return Math.abs(x) + Math.abs(y);
}

function move(x, y, direction, instruction) {
  switch (instruction.action) {
    case "N":
      console.log("North");
      y = y + instruction.value;
      break;
    case "S":
      console.log("South");
      y = y - instruction.value;
      break;
    case "E":
      x = x + instruction.value;
      break;
    case "W":
      x = x - instruction.value;
      break;
    case "L":
      direction = (direction + instruction.value) % 360;
      break;
    case "R":
      direction = (direction - instruction.value + 360) % 360;
      break;
    case "F":
      [x, y] = moveForward(x, y, direction, instruction.value);
      break;
    default:
      break;
  }
  console.log("Y IS" + y);
  console.log("X IS" + x);
  return [x, y, direction];
}

function moveForward(x, y, direction, instructionValue) {
  switch (direction) {
    case 0:
      x = x + instructionValue;
      break;
    case 90:
      y = y + instructionValue;
      break;
    case 180:
      x = x - instructionValue;
      break;
    case 270:
      y = y - instructionValue;
      break;
    default:
      return [x, y];
  }
  return [x, y];
}

console.log(runInstructions(instructions));

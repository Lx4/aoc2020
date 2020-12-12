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
  let ship = { x: 0, y: 0 };
  let waypoint = { x: 10, y: 1 };
  for (instruction of instructions) {
    move(ship, waypoint, instruction);
    console.log(`ship is ${ship.x}, ${ship.y}`);
  }
  return Math.abs(ship.x) + Math.abs(ship.y);
}

function move(ship, waypoint, instruction) {
  switch (instruction.action) {
    case "N":
      waypoint.y = waypoint.y + instruction.value;
      break;
    case "S":
      waypoint.y = waypoint.y - instruction.value;
      break;
    case "E":
      waypoint.x = waypoint.x + instruction.value;
      break;
    case "W":
      waypoint.x = waypoint.x - instruction.value;
      break;
    case "L":
    case "R":
      rotateWaypoint(waypoint, instruction);
      break;
    case "F":
      moveForward(ship, waypoint, instruction.value);
      break;
    default:
      break;
  }
}

function rotateWaypoint(waypoint, instruction) {
  let rotation = 0;
  if (instruction.action === "L") {
    rotation = (rotation + instruction.value) % 360;
  } else if (instruction.action === "R") {
    rotation = (rotation - instruction.value + 360) % 360;
  }
  switch (rotation) {
    case 0:
      break;
    case 90:
      [waypoint.x, waypoint.y] = [-waypoint.y, waypoint.x];
      break;
    case 180:
      [waypoint.x, waypoint.y] = [-waypoint.x, -waypoint.y];
      break;
    case 270:
      [waypoint.x, waypoint.y] = [waypoint.y, -waypoint.x];
      break;
  }
}

function moveForward(ship, waypoint, instructionValue) {
  ship.x += waypoint.x * instructionValue;
  ship.y += waypoint.y * instructionValue;
}

console.log(runInstructions(instructions));

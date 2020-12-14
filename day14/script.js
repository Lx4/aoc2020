const fs = require("fs");

// on construit des arrays avec index = puissance
let currentMask;
const mem = [];
// init dataset

const SYSTEM_SIZE = 36;

const data = fs.readFileSync("./data", "UTF-8");
const lines = data.split(/\r?\n/);

for (line of lines) {
  let matchMask = line.match(/^mask = (.*)$/);
  let matchMem = line.match(/^mem\[([0-9]+)\] = ([0-9]+)$/);
  if (matchMask) {
    currentMask = matchMask[1];
  } else if (matchMem) {
    mem[parseInt(matchMem[1])] = applyMask(
      num2binary(parseInt(matchMem[2])),
      currentMask
    );
  }
}

console.log(
  mem.reduce((acc, e) => {
    if (typeof e === "number") return acc + e;
  }, 0)
);


// HELPERS

function applyMask(binary, mask) {
  let result = [];
  for (let i = 0; i < SYSTEM_SIZE; i++) {
    result[i] = mask[i] === "X" ? binary[i] : mask[i];
  }
  return parseInt(result.join(""), 2);
}

function num2binary(num) {
  let binaryNum = num.toString(2).split("");
  while (binaryNum.length < 36) {
    binaryNum.unshift(0);
  }
  return binaryNum.join("");
}


// TEST website
// 359675247017 : answer is too low
   13395782692
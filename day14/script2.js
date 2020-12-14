const fs = require("fs");

let currentMask;
const mem = {};
// init dataset

const SYSTEM_SIZE = 36;

const data = fs.readFileSync("./data", "UTF-8");
const lines = data.split(/\r?\n/);

for (line of lines) {
  let matchMask = line.match(/^mask = (.*)$/);
  let matchMem = line.match(/^mem\[([0-9]+)\] = ([0-9]+)$/);
  if (matchMask) {
    currentMask = matchMask[1];
    // console.log(currentMask);
  } else if (matchMem) {
    const list = mask2combinations(
      applyMask(num2binary(parseInt(matchMem[1])), currentMask)
    );
    // console.log(list);
    for (elem of list) {
      mem[elem] = parseInt(matchMem[2]);
    }
  }
}

//  console.log(mem);
let sum = 0;
for (e of Object.values(mem)) {
  sum += e;
}
console.log(sum)


// HELPERS

function applyMask(address, mask) {
  let result = [];
  for (let i = 0; i < SYSTEM_SIZE; i++) {
    if (mask[i] === "X") result[i] = "X";
    if (mask[i] === "0") result[i] = address[i];
    if (mask[i] === "1") result[i] = 1;
  }
  return result.join("");
}

function num2binary(num) {
  let binaryNum = num.toString(2).split("");
  while (binaryNum.length < 36) {
    binaryNum.unshift(0);
  }
  return binaryNum.join("");
}

function mask2combinations(mask) {
  let list = [0];
  for (let i = 0, j = 35; i < SYSTEM_SIZE; i++, j--) {
    if (mask[i] === "1") {
      list = list.map((e) => e + Math.pow(2, j));
    } else if (mask[i] === "X")
      list = [...list, ...list.map((e) => e + Math.pow(2, j))];
  }
  return list;
}

// TEST website
// 13448305053 : answer is too low
// 13395782692 : answer is too low

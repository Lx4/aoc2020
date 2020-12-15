const dataset = require("./dataset");

const dict = new Map();
let to_speak;
const POSITION = 30000000;
const LENGTH_INIT = dataset.length;

// Init dict
for (let i = 1; i < dataset.length; i++) {
  dict.set(dataset[i - 1], i);
}

let last_spoken = dataset[LENGTH_INIT - 1];

// Solve
for (let i = LENGTH_INIT; i <= POSITION; i++) {
  if (!dict.has(last_spoken)) {
    to_speak = 0;
  } else {
    to_speak = i - dict.get(last_spoken);
  }
  dict.set(last_spoken, i);
  i === POSITION && console.log(last_spoken);
  last_spoken = to_speak;
}

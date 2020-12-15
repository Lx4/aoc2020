const dataset = require("./data1");

const dict = {};
let to_speak;
const POSITION = 30000000;
const LENGTH = dataset.length;
let last_spoken = dataset[LENGTH - 1];

// Init dict
for (let i = 1; i < dataset.length; i++) {
  dict[dataset[i - 1]] = i;
}

// Solve
for (let i = LENGTH; i <= POSITION; i++) {
  if (!dict[last_spoken]) {
    to_speak = 0;
  } else {
    to_speak = i - dict[last_spoken];
  }
  dict[last_spoken] = i;
  i === POSITION && console.log(last_spoken);
  last_spoken = to_speak;
}

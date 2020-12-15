const dataset = require("./dataset");

const SEARCHED = 300;
const LENGTH = dataset.length;

let last_spoken = dataset[LENGTH - 1];
for (let i = LENGTH; i < SEARCHED; i++) {
  const searchArray = dataset.slice(0, i - 1);
  const last_index = searchArray.lastIndexOf(last_spoken);
  if (last_index !== -1) last_spoken = i - last_index - 1;
  else {
    last_spoken = 0;
  }
  dataset.push(last_spoken);
}

console.log(dataset[SEARCHED - 1]);
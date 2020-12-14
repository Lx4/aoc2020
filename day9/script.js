const dataset = require("./dataset");

const PREAMBLE_LENGTH = 25;

function checkValid(startIndex) {
  for (let i = startIndex; i < PREAMBLE_LENGTH + startIndex; i++) {
    for (let j = startIndex + 1; j < PREAMBLE_LENGTH + startIndex; j++) {
      if (j === i) continue;
      if (dataset[i] + dataset[j] === dataset[startIndex + PREAMBLE_LENGTH])
        return true;
    }
  }
  return false;
}

function crackXMAS() {
  for (let i = 0; i < dataset.length; i++) {
    if (!checkValid(i)) return dataset[i + PREAMBLE_LENGTH];
  }
}

const PART_ONE_RESULT = crackXMAS();
// Part 1 : 217430975

function findCorrectList(startIndex) {
  const list = [];
  let i = startIndex;
  let sum = 0;
  while (i < dataset.length && sum <= PART_ONE_RESULT) {
    if (sum === PART_ONE_RESULT) {
      return list;
    }
    list.push(dataset[i]);
    sum += dataset[i];
    i++;
  }
  return null;
}

function crackXMAS2() {
  for (let i = 0; i < dataset.length; i++) {
    let list = findCorrectList(i);
    if (list) return Math.min(...list) + Math.max(...list);
  }
}

console.log(crackXMAS2());

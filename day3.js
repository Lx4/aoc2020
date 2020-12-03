const { dataset } = require("./dataset");

const ROWLENGTH = dataset[0].length;

function countTrees(right, down) {
  let cursor = 0;
  let numTrees = 0;

  for (let i = down; i < dataset.length; i += down) {
    cursor = (cursor + right) % ROWLENGTH;
    if (dataset[i][cursor] === "#") {
      numTrees++;
    }
  }
  return numTrees;
}


console.log(countTrees(1, 1) * countTrees(3, 1) * countTrees(5, 1) * countTrees(7, 1) * countTrees(1, 2));

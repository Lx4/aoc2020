const fs = require("fs");

const colors = {};

// init dataset

const data = fs.readFileSync("./dataset", "UTF-8");
const lines = data.split(/\r?\n/);

// regex

for (line of lines) {
  let match = line.match(/(.*) bags contain (.*)$/);
  if (match) {
    let children = match[2].matchAll(/([\d]+) (.*?) bag/g);
    if (!children) continue;
    else {
      colors[match[1]] = [];
      for (const child of children) {
        colors[match[1]] = [
          ...colors[match[1]],
          [child[2], parseInt(child[1])],
        ];
      }
    }
  }
}

// colors is initialized

// PART 1

function pathToShiny(values) {
  if (!values) return false;
  if (values.map((v) => v[0]).includes("shiny gold")) return true;
  else
    return values
      .map((v) => pathToShiny(colors[v[0]]))
      .reduce((acc, v) => v || acc, false);
}

let sum = 0;
for (color in colors) {
  if (pathToShiny(colors[color])) sum++;
}

console.log(sum);

// PART 2

function countBags(values) {
  if (!values) return 1;
  else
    return values
      .map((v) => {
        return v[1] * countBags(colors[v[0]])})
      .reduce((acc, v) => acc + v, 1);
}

console.log(countBags(colors['shiny gold']) - 1);
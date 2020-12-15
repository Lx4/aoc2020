const dataset = require("./data1");

const dict = {};

// Init dict
for (let i = 1; i <= dataset.length; i++) {
  dict[dataset[i - 1]] = { last_index: i, spoken_before: false };
}
console.log(dict);

let last_spoken = 6;
let to_speak;

for (let i = 4; i <= 10; i++) {
  // determiner le nombre à speak
  if (!dict[last_spoken].spoken_before) {
    to_speak = 0;
    dict[last_spoken].last_index = i - 1;
    dict[to_speak].last_index = i;
    dict[to_speak].spoken_before = true;
    console.log("not spoken before")
  } else {
    console.log("spoken before")
    to_speak = i - 1 - dict[last_spoken].last_index;
    dict[to_speak].last_index = i;
  }
  
  last_spoken = to_speak;
  console.log(to_speak);
}

//console.log(dict)
// speak
//

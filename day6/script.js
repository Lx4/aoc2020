const { dataset } = require("./dataset");

const group2set = (groupEntries) => {
  return new Set(groupEntries.join("").split(""));
};

const numYes = (dataset) => {
  return dataset
    .map((entry) => group2set(entry).size)
    .reduce((acc, value) => acc + value);
};

const group2join = (groupEntries) => {
  return groupEntries.reduce((acc, value) => {
    let arrAcc = acc.split("");
    let valueAcc = value.split("");
    let sum = [];
    for (val of valueAcc) {
      if (arrAcc.includes(val)) sum.push(val);
    }
    return sum.join("");
  });
};

const numYes2 = (dataset) => {
  return dataset
    .map((entry) => group2join(entry).length)
    .reduce((acc, value) => acc + value);
};

const group = ["sukewbthnjdyv", "sjubpeyvx", "ouehaytkgzbv", "qfueimylvcrb"];

//console.log(numYes(dataset));
console.log(numYes2(dataset));

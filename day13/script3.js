const { busIds } = require("./data");

// recherche du timestamp

console.log(busIds);

const busIdMax = Math.max(
  ...busIds.reduce(
    (acc, val) => (typeof val === "number" ? [...acc, val] : acc),
    []
  )
);
console.log(busIdMax);

const syncIds = busIds.reduce((acc, val, index) => {
  if (typeof val === "number") return [...acc, val + index];
  return acc;
}, []);

console.log(syncIds);
let timestamp = Math.max(...syncIds);

while (!syncIds.every((e) => timestamp % e === 0)) {
  // console.log(timestamp);
  timestamp += busIdMax;
}

console.log(timestamp);

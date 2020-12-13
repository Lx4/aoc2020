const { timestamp, busIds } = require("./data");

// remove the "x's"
const cleanIds = busIds.reduce((acc, id) => {
  if (typeof id === "number") return [...acc, id];
  else return acc;
}, []);

console.log(cleanIds);

// get next bus departs array of [busId, nextDepart]
const nextBuses = cleanIds.map((id) => [id, id - (timestamp % id)]);

console.log(nextBuses);
// sort the buses (next first)
nextBuses.sort((busA, busB) => (busA[1] < busB[1] ? -1 : 1));
console.log(nextBuses);
// get next depart
console.log(nextBuses[0][0] * nextBuses[0][1]);

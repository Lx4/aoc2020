const { busIds } = require("./data");

// recherche du timestamp

console.log(busIds);

let timestamp = 597;
while (
  !busIds.every((elem, index) => {
  if (typeof elem !== "number") return true;
  if ((timestamp + index) % elem  === 0) return true;
  return false;
}))
{
  timestamp+= 547;
}

console.log(timestamp);

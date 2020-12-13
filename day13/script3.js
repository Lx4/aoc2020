const { busIds } = require("./data");
const { lcm } = require("mathjs");

// recherche du timestamp

// const arr = busIds.reduce(
//   (acc, val) => (typeof val === "number" ? [...acc, val] : acc),
//   []
// );
// console.log(arr);
// const adder = lcm(...arr);

console.log(busIds);

let timestamp = 99999999999980
while (
  !busIds.every((elem, index) => {
    if (typeof elem !== "number") return true;
    if ((timestamp + index) % elem === 0) {
      return true;
    }
    return false;
  })
) {
  timestamp += 547;
}

console.log(timestamp);

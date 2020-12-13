const { busIds } = require("./data");
const { gcd, lcm } = require("mathjs");

// recherche du timestamp

const reqs = busIds.reduce(
  (acc, val, offset) =>
    typeof val === "number" ? [...acc, [offset, val]] : acc,
  []
);

console.log(reqs);

let t = 0;
let step = reqs[0][1];
let goodness = 1;

while (goodness < reqs.length) {
  let req = reqs[goodness];
  let offset = req[0];
  let cycle = req[1];
  if ((t + offset) % cycle === 0) {
    step = lcm(step, cycle);
    goodness++;
  } else {
    t += step;
  }
}

console.log(t)


// while (
//   !busIds.every((elem, index) => {
//     if (typeof elem !== "number") return true;
//     if ((timestamp + BigInt(index)) % BigInt(elem) == 0) return true;
//     return false;
//   })
// ) {

// }

// console.log(timestamp);

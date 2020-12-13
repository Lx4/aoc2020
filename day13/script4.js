const { busIds } = require("./datas1");
const { gcd, lcm } = require("mathjs");

// recherche du timestamp

const arr = busIds.reduce(
  (acc, val) => (typeof val === "number" ? [...acc, val] : acc),
  []
);
console.log(arr);
const adder = lcm(...arr);
console.log(adder);

let timestamp = 16n;
while (
  !busIds.every((elem, index) => {
    if (typeof elem !== "number") return true;
    if ((timestamp + BigInt(index)) % BigInt(elem) == 0) return true;
    return false;
  })
) {
  timestamp += 19n;
  console.log(timestamp);
}

console.log(timestamp);

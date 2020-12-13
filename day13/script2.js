const { busIds } = require("./data");
let timestamp = 100000000000000;

// recherche du timestamp

console.log(busIds);

while (
  !busIds.every((currentValue, index) => {
    if (typeof currentValue !== "number") {
      return true;
    } else if ((timestamp + index) % currentValue === 0) return true;
    return false;
  })
) {
  timestamp+= ;
}

console.log(timestamp);

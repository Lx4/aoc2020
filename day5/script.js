const { dataset } = require('./dataset');

console.log(dataset);

// transform string to binary string
const str2binary = (str) => {
  return str.replace(/[BR]/g, '1').replace(/[FL]/g, '0');
};

// convert
const seatId = (binaryStr) => {
  return (
    parseInt(str2binary(binaryStr.substring(0, 7)), 2) * 8 +
    parseInt(str2binary(binaryStr.substring(7, 10)), 2)
  );
};

//
const toSeatIds = (dataset) => {
  return dataset.map((str) => seatId(str2binary(str)));
};

// get Max from an array of int
const max = (arr) => {
  return arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
};

const arr = toSeatIds(dataset);

for (let i = 0; i <= 842; i++) {
    if (!arr.includes(i)) {
        console.log(i)
    }
}

//console.log(toSeatIds(dataset).sort());


// dataset manip
// \n([a-z]) => ' $1'
// \n => },\n{
// :([\S\}]*) => :"$1",

const { dataset } = require("./dataset2");

const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]; // cid is optional

const countValid = (dataset) => {
  let numValid = 0;
  for (passport of dataset) {
    console.log(passport);
    if (isValid(passport)) {
      numValid++;
    }
  }
  return numValid;
};

const isValid = (passportData) => {
  let valid = true;
  for (field of requiredFields) {
    if (!Object.keys(passportData).includes(field)) {
      valid = false;
      break;
    }
    else {
    }
  }
  return valid;
};




console.log(countValid(dataset));

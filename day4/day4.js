// dataset manip
// \n([a-z]) => ' $1'
// \n => },\n{
// :([\S\}]*) => :"$1",

const { dataset } = require("./dataset3");

const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]; // cid is optional

const countValid = (dataset) => {
  let numValid = 0;
  for (passport of dataset) {
    if (isValid(passport) && isValidFields(passport)) {
      console.log(passport);
      numValid++;
      break;
    }
  }
  return numValid;
};

// check if all requiredFields are present
const isValid = (passportData) => {
  for (field of requiredFields) {
    if (!Object.keys(passportData).includes(field)) {
      return false;
    }
  }
  return true;
};

// check if all fields are valid
const isValidFields = (passportData) => {
  for (field of Object.keys(passportData)) {
    if (!validateField(field, passportData[field])) {
      return false;
    }
  }
  return true;
};

const validateField = (key, value) => {
  switch (key) {
    case "byr":
      return value >= 1920 && value <= 2002;
    case "iyr":
      return value >= 2010 && value <= 2020;
    case "eyr":
      return value >= 2020 && value <= 2030;
    case "hgt":
      const regex = /([0-9]+)(cm|in)/;
      const match = value.match(regex);
      if (!match) return false;
      if (match[2] === "cm") return match[1] >= 150 && match[1] <= 193;
      if (match[2] === "in") return match[1] >= 59 && match[1] <= 76;
      return false;
    case "hcl":
      return value.match(/#[0-9a-f]{6}/);
    case "ecl":
      return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value);
    case "pid":
      return value.match(/[0-9]{9}/);
    case "cid":
      return true;
    default:
      return false;
  }
};

console.log(countValid(dataset));

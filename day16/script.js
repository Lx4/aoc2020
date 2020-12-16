const fs = require("fs");

// Read input
const data = fs.readFileSync("./input_test", "UTF-8");

// Init data
const fields = initFields(data);
const ticket = initMyTicket(data);
const nearby_tickets = require("./test");

console.log(nearby_tickets);

function initFields(data) {
  const fields = {};
  const regex = /([a-z]*): ([0-9]+)-([0-9]+) or ([0-9]+)-([0-9]+)/g;
  const matches = data.matchAll(regex);
  for (const match of matches) {
    fields[match[1]] = [
      [parseInt(match[2]), parseInt(match[3])],
      [parseInt(match[4]), parseInt(match[5])],
    ];
  }
  console.log(fields);
  return fields;
}

function initMyTicket(data) {
  const regex = /your ticket:\r\n(.*)/;
  const match = data.match(regex);
  const ticket = match[1].split(",").map((e) => parseInt(e));
  console.log(ticket);
  return ticket;
}

// part 1
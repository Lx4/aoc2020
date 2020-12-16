const fs = require("fs");

// Read input
const data = fs.readFileSync("./input_test2", "UTF-8");

// Init data
const fields = initFields(data);
const ticket = initMyTicket(data);
const nearby_tickets = require("./test2");

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

function scanningErrorRate(nearby_tickets, fields) {
  const invalid_values = [];
  for (let ticket of nearby_tickets) {
    for (let value of ticket) {
      if (!check_validity(value, fields)) {
        invalid_values.push(value);
      }
    }
  }
  return invalid_values.reduce((acc, val) => acc + val, 0);
}

function check_validity(value, fields) {
  for (let field of Object.values(fields)) {
    for (let range of field) {
      if (value >= range[0] && value <= range[1]) return true;
    }
  }
  return false;
}
console.log(
  "Part1 | Scanning error rate is : " +
    scanningErrorRate(nearby_tickets, fields)
);

// part 2

function cleanTickets(nearby_tickets, fields) {
  const valid_tickets = [];
  for (let ticket of nearby_tickets) {
    for (let value of ticket) {
      if (check_validity(value, fields)) {
        valid_tickets.push(ticket);
      }
    }
  }
  console.log(valid_tickets);
}

cleanTickets(nearby_tickets, fields);

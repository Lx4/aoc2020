const fs = require("fs");

// Read input
const data = fs.readFileSync("./input", "UTF-8");

// Init data
const fields = initFields(data);
const ticket = initMyTicket(data);

const nearby_tickets = require("./data");

function initFields(data) {
  const fields = {};
  const regex = /([a-z ]*): ([0-9]+)-([0-9]+) or ([0-9]+)-([0-9]+)/g;
  const matches = data.matchAll(regex);
  for (const match of matches) {
    fields[match[1]] = [
      [parseInt(match[2]), parseInt(match[3])],
      [parseInt(match[4]), parseInt(match[5])],
    ];
  }
  return fields;
}

function initMyTicket(data) {
  const regex = /your ticket:\r\n(.*)/;
  const match = data.match(regex);
  const ticket = match[1].split(",").map((e) => parseInt(e));
  return ticket;
}
// part 2

function cleanTickets(nearby_tickets, fields) {
  const valid_tickets = [];
  for (let ticket of nearby_tickets) {
    let is_valid = true;
    for (let value of ticket) {
      if (!check_validity(value, fields)) {
        is_valid = false;
      }
    }
    if (is_valid) valid_tickets.push(ticket);
  }

  return valid_tickets;
}

const cleaned_tickets = cleanTickets(nearby_tickets, fields); // list of valid tickets

const fields_key = [];
let remaining_fields = { ...fields };

// TEST on website : 1122815591719    (too low)

const indexes = [];
const field_indexes = [];

while (Object.keys(remaining_fields).length > 0) {
  for (let i = 0; i < ticket.length; i++) {
    if (indexes.includes(i)) continue;
    let filteredFields = remaining_fields;
    for (let ticket of cleaned_tickets) {
      filteredFields = filterFields(ticket[i], filteredFields);
      if (Object.keys(filteredFields).length === 1) {
        indexes.push(i);
        console.log(Object.keys(filteredFields)[0] + " is at index " + i);
        field_indexes[i] = Object.keys(filteredFields)[0];
        delete remaining_fields[Object.keys(filteredFields)[0]];
        break;
      }
    }
  }
}

console.log(field_indexes);
const replaced = field_indexes.map((val, index) => {
  if (val.match("departure")) {
    return ticket[index];
  }
});

console.log(replaced.reduce((acc, val) => (val ? acc * val : acc), 1));

function filterFields(value, fields) {
  const possible_fields = {};
  for (const fieldName in fields) {
    const values = fields[fieldName];
    if (
      (value >= values[0][0] && value <= values[0][1]) ||
      (value >= values[1][0] && value <= values[1][1])
    ) {
      possible_fields[fieldName] = values;
    }
  }
  return possible_fields;
}

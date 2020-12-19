const data = require('fs').readFileSync("./data", { encoding: "utf-8" })
.trim();

// init rules
const lines = data.split("\n");
const regex = /([0-9]+): (.*)/
const rules = []

// data to check
const messages = require('./dataentry.js')

for (line of lines){
    const match = line.match(regex);
    rules[+match[1]] = match[2]
}

console.log(rules)

// evaluate rules recursively starting at rules[0] to create a regex string
// this regex string will be later use to check if entries are valid


function createRegex(str, depth=0){
    // end case
    if (['a', 'b'].includes(str)) return str
    const matchOr = str.match(/(.*)\|(.*)/)
    if (depth > 40) return ''
    if (matchOr){
        return '(' + createRegex(matchOr[1], depth + 1) + '|' + createRegex(matchOr[2], depth + 1) + ')'
    }
    rulesMatched = str.trim().split(' ')
    let strFound = ''
    for (rule of rulesMatched) {
        strFound += createRegex(rules[+rule], depth + 1)
    }
    return strFound
}

console.log(messages)
const reg = '^'+createRegex(rules[0])+'$'
console.log(reg)

// for (message of messages) {
//     console.log(message + ' : ' + !!message.match(reg))
// }

const numMatches  = messages.map((message) => message.match(reg) ? 1 : 0).reduce((a,b) => a + b)
console.log(numMatches)

// 314 too low 377 too high
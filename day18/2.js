const entries = require("./input");

console.log(
  entries
    .map((entry) => evaluateRPN(generateRPN(entry)))
    .reduce((acc, val) => acc + val)
);

// all left associative, precedence +
// Reverse Polish Notation
function generateRPN(entry) {
  const output = [];
  const stack = [];
  for (let i = 0; i < entry.length; i++) {
    if (entry[i] === " ") continue;
    // if the token is a number, then: push it to the output queue.
    else if (entry[i].match(/[0-9]/)) output.push(entry[i]);
    else if (entry[i].match(/\+|\*/)) {
      //  while ((there is an operator at the top of the operator stack) and (the operator at the top of the operator stack is not a left parenthesis)):
      while (stack.length > 0 && (stack[stack.length - 1] === '+' || entry[i] === stack[stack.length - 1]) && stack[stack.length - 1] !== "(") {
        output.push(stack[stack.length - 1]);
        stack.pop();
      }
      stack.push(entry[i]);
    } else if (entry[i] === "(") {
      stack.push("(");
    } else if (entry[i] === ")") {
      while (stack[stack.length - 1] !== "(") {
        output.push(stack[stack.length - 1]);
        stack.pop();
      }
      if (stack[stack.length - 1] === "(") stack.pop();
    }
  }
  while (stack.length !== 0) {
    output.push(stack[stack.length - 1]);
    stack.pop();
  }
  return output;
}



function evaluateRPN(rpn) {
  const stack = [];
  for (let i = 0; i < rpn.length; i++) {
    if (rpn[i].match(/[0-9]/)) {
      stack.push(rpn[i]);
    } else {
      const op2 = stack.pop();
      const op1 = stack.pop();
      let result;
      if (rpn[i] === "+") {
        result = +op1 + +op2;
      } else if (rpn[i] === "*") {
        result = +op1 * +op2;
      }
      stack.push(result);
    }
  }
  return stack.pop();
}


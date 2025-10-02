// get 2 numbers from user and also an operator (+, -, *, /, %)
// perform the operation based on the operator and print the result
const readline = require("readline");
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num1 = 0;
let num2 = 0;
let operator = "";

input.question("Enter the first number: ", (first) => {
  num1 = parseFloat(first);

  input.question("Enter the second number: ", (second) => {
    num2 = parseFloat(second);

    input.question("Enter the operator (+, -, *, /, %): ", (op) => {
      operator = op;
      performOperations(num1, num2, operator);
      input.close();
    });
  });
});

function performOperations(num1, num2, operator) {
  switch (operator) {
    case "+":
      console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}.`);
      break;
    case "-":
      console.log(
        `The difference when ${num2} is subtracted from ${num1} is ${
          num1 - num2
        }.`
      );
      break;
    case "*":
      console.log(`The product of ${num1} and ${num2} is ${num1 * num2}.`);
      break;
    case "/":
      console.log(
        `The quotient when ${num1} is divided by ${num2} is ${num1 / num2}.`
      );
      break;
    case "%":
      console.log(
        `The remainder when ${num1} is divided by ${num2} is ${num1 % num2}.`
      );
      break;
    default:
      console.log("Invalid operator. Please use one of +, -, *, /, or %.");
      break;
  }
}

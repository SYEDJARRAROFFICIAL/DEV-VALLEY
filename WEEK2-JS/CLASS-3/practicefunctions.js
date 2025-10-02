// Write a simple arrow function greet() that prints “Hello World”.
const greet = () => {
  console.log("Hello World");
};

greet(); // Call the function to see the output

// Write a function add(a, b) that takes two numbers and returns their sum.
function add(a, b) {
  return a + b;
}
console.log(add(5, 15));
// Also write the same function using an arrow function.
const addnumbers = (a, b) => {
  return a + b;
};
console.log(add(5, 3));

// Write a function square(n) that returns the square of a number.
function square(n) {
  return n * n;
}
let sq = 5;
console.log(`Square of ${sq} is ${square(sq)}`);
// Convert it into an arrow function.
const square1 = (n) => {
  return n * n;
};
num = 4;
console.log(`Square of ${num} is ${square1(num)}`);

// Write a function isEven(n) that checks if a number is even or odd and returns a message.
function isEven(n) {
  if (n % 2 === 0) {
    return `${n} is even.`;
  } else {
    return `${n} is odd.`;
  }
}
console.log(isEven(10));
console.log(isEven(7));

// Convert it into an arrow function.
const isEven1 = (n) => {
  return n % 2 === 0 ? `${n} is even.` : `${n} is odd.`;
};
console.log(isEven1(10));
console.log(isEven1(7));

// Write a function findMax(a, b, c) that returns the largest of three numbers.
function findMax(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
}
console.log(findMax(10, 20, 30));
console.log(findMax(5, 3, 8));

// Convert it into an arrow function.
const findMax1 = (a, b, c) => {
  return a > b && a > c
    ? `Number ${a} is Greater`
    : b > c
    ? `Number ${b} is Greater`
    : `Number ${c} is Greater`;
};
console.log(findMax1(10, 20, 30));
console.log(findMax1(5, 3, 8));

// Write a function calculateArea(radius) that returns the area of a circle without using math.pi.
function calculateArea(radius) {
  return 3.14 * radius * radius;
}
const radius = 5;
console.log(`Area of circle with radius ${radius} is ${calculateArea(radius)}`);

// Write a function reverseString(str) that returns the reverse of a string.
function reverseString(str) {
  return str.split("").reverse().join("");
}
string = "hello";
console.log(`Reverse of ${string} is ${reverseString(string)}`);

// Write a function sumArray(arr) that takes an array of numbers and returns their sum using for loop.
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
// Convert it into an arrow function.
const sumArray1 = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumArray1([1, 2, 3, 4, 5]));

// const light = "red";

// if (light === "red") {
//   console.log("Stop");
// } else if (light === "yellow") {
//   console.log("Caution");
// } else if (light === "green") {
//   console.log("Go");
// } else {
//   console.log("Invalid light color");
// }

// const num1 = 3;

// const num2 = 3;

// const num3 = 3;

// if (num1 > num2 && num1 > num3) {
//   console.log("num1 is the largest");
// } else if (num2 > num1 && num2 > num3) {
//   console.log("num2 is the largest");
// } else if (num3 > num1 && num3 > num2) {
//   console.log("num3 is the largest");
// } else {
//   console.log("All numbers are equal");
// }

// const num = "7";
// if (num % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// ===================
// ternery operator
// ===================

// const num = "7";

// num % 2 === 0 ? console.log("Even") : console.log("Odd");

// const age = 10;
// // Using ternary operator
// const status = age >= 18 ? "Adult" : "Minor";
// console.log(status);

// console.log(`You are a ${age >= 18 ? "grown-up" : "kid"}.`);

// const day = 3;
// const result = day === 3 ? "Wednesday" : day === 4 ? "Thursday" : "Another day";
// console.log(result);

// ====================
// Arrays
// ====================

const fruits = ["Apple", "Banana", "Orange", "Mango"];

// Accessing elements
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Orange
console.log(fruits[4]); // undefined

const count = fruits.push("Grapes"); // Add to the end
console.log("count is " + count); // 5
console.log(fruits);

fruits.pop(); // Remove from the end
console.log(fruits);

fruits.unshift("Strawberry"); // Add to the beginning
console.log(fruits);

const index = fruits.indexOf("Apple");
console.log(index); // 2

if (index > -1) {
  fruits.splice(index, 1); // Remove Apple
}
console.log(fruits);

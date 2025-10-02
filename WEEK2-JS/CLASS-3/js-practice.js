// // task1

// console.log("Hello World");

// // task2

// let a = 10;
// let b = 25;
// let sum = a + b ;

// console.log(`The sum of ${a} and ${b} is ${sum}.`);
// let difference = a - b;
// console.log(
//   `The difference when ${b} is subtracted from ${a} is ${difference}.`
// );
// let product = a * b;
// console.log(`The product of ${a} and ${b} is ${product}.`);
// let quotient = a / b;
// console.log(`The quotient when ${a} is divided by ${b} is ${quotient}.`);
// let remainder = a % b;
// console.log(`The remainder when ${a} is divided by ${b} is ${remainder}.`);

// // task3

let num1 = 7;
let num2 = 3;
let operator = "*";

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

// // ================a
// let a = 235;
// let b = 678;
// let result = a + b;
// console.log(`The sum of ${a} and ${b} is ${result}.`);
// a = 954;
// b = 627;
// result = a - b;
// console.log(`The difference when ${b} is subtracted from ${a} is ${result}.`);
// a = 47;
// b = 26;
// result = a * b;
// console.log(`The product of ${a} and ${b} is ${result}.`);
// a = 845;
// b = 23;
// result = a / b;
// console.log(`The quotient when ${a} is divided by ${b} is ${result}.`);
// a = 45;
// b = 6;
// result = a % b;
// console.log(`The remainder when ${a} is divided by ${b} is ${result}.`);

// // Solve using BODMAS rule:
// // 25 + 15 × 2 − 30 ÷ 5

// a = 25;
// b = 15;
// let c = 2;
// let d = 30;
// let e = 5;

// let results = a + b * c - d / e;
// console.log(`The result of the expression is ${results}.`);

// // ====================
// // A shopkeeper sells 48 pens each costing 35 rupees.
// // Find the total cost.

// const pens = 48;
// const costPerPen = 35;
// const totalCost = pens * costPerPen;
// console.log(`The total cost of ${pens} pens is ${totalCost} rupees.`);

// // Divide equally: If 972 apples are divided among 18 students,
// // how many apples will each student get?

// const totalApples = 972;
// const totalStudents = 18;
// const applesPerStudent = totalApples / totalStudents;
// console.log(`Each student will get ${applesPerStudent} apples.`);

// // Multiply and then add:
// // (12 × 15) + (24 × 8)

// const firstMultiplication = 12 * 15;
// const secondMultiplication = 24 * 8;
// const finalResult = firstMultiplication + secondMultiplication;
// console.log(
//   `The result of the expression (12 × 15) + (24 × 8) is ${finalResult}.`
// );

// // Subtract and then divide:
// // (600 − 240) ÷ 12
// const subtractionResult = 600 - 240;
// const divisionResult = subtractionResult / 12;
// console.log(
//   `The result of the expression (600 − 240) ÷ 12 is ${divisionResult}.`
// );

// // A person earns 1250 rupees per day.
// // How much will he earn in 30 days?

// const dailyEarnings = 1250;
// const days = 30;
// const totalEarnings = dailyEarnings * days;
// console.log(`The total earnings in ${days} days is ${totalEarnings} rupees.`);

// // task 3
// a = 5;
// b = "10";

// if (a === b) {
//   console.log(`${a} and ${b} are equal in value.`);
// } else {
//   console.log(`${a} and ${b} are not equal in value.`);
// }

// // task 4
// // Write a program to check if a number is positive, negative, or zero using ternary operators.
// let number = -10;
// number > 0
//   ? console.log(`${number} is a positive number.`)
//   : number < 0
//   ? console.log(`${number} is a negative number.`)
//   : console.log(`${number} is zero.`);
// console.log(`${number} is zero.`);

// // A student scores marks.
// // If marks ≥ 90 → Grade A
// // If marks ≥ 75 → Grade B
// // If marks ≥ 60 → Grade C
// // ternary operator

// let marks = 70;
// marks >= 90
//   ? console.log(`Grade A`)
//   : marks >= 75
//   ? console.log(`Grade B`)
//   : marks >= 60
//   ? console.log(`Grade C`)
//   : console.log(`Fail`);

// // Write a program to check whether a person is:
// // Child (age < 13)
// // Teenager (13–19)
// // Adult (20–59)
// // Senior Citizen (60 and above)

// let age = 45;
// age < 13
//   ? console.log("Child")
//   : age >= 13 && age <= 19
//   ? console.log("Teenager")
//   : age >= 20 && age <= 59
//   ? console.log("Adult")
//   : console.log("Senior Citizen");

// // Write a program that asks for temperature:
// // If temp ≥ 40 → "Too Hot"
// // If temp between 25–39 → "Normal Weather"
// // If temp < 25 → "Cold Weather"

// let temp = 30;
// temp >= 40
//   ? console.log("Too Hot")
//   : temp >= 25 && temp <= 39
//   ? console.log("Normal Weather")
//   : console.log("Cold Weather");

// // A shop gives a discount:
// // Bill ≥ 5000 → 20% discount
// // Bill ≥ 3000 → 10% discount
// // Bill < 3000 → No discount
// // Write a program to calculate the final bill.
// let bill = 4500;
// let finalBill = 0;
// bill >= 5000
//   ? (finalBill = bill * 0.8)
//   : bill >= 3000
//   ? (finalBill = bill * 0.9)
//   : (finalBill = bill);
// console.log(`The final bill is ${finalBill} rupees.`);

// let bill1 = 4500;
// let finalBill1 = 0;
// bill1 >= 5000
//   ? (finalBill1 = bill1 + (bill1 * 20) / 100)
//   : bill1 >= 3000
//   ? (finalBill1 = bill1 + (bill1 * 10) / 100)
//   : (finalBill1 = bill1);
// console.log(`The final bill is ${finalBill1} rupees.`);

// // A company pays tax as follows:
// // Salary ≥ 100000 → 20% tax 20/1000*100000
// // Salary ≥ 50000 → 10% tax
// // Salary < 50000 → No tax
// // Write the program to calculate tax.
// let salary = 75000;
// let tax = 0;
// salary >= 100000
//   ? (tax = (20 / 100) * salary)
//   : salary >= 50000
//   ? (tax = (10 / 100) * salary)
//   : (tax = 0);
// console.log(`The tax for a salary of ${salary} is ${tax} rupees.`);

// // Write a program to check if a number is:
// // Divisible by both 3 and 5 → Print "FizzBuzz"
// // Divisible by only 3 → Print "Fizz"
// // Divisible by only 5 → Print "Buzz"
// // Otherwise → Print the number

// let num = 15;
// num % 3 === 0 && num % 5 === 0
//   ? console.log("FizzBuzz")
//   : num % 3 === 0
//   ? console.log("Fizz")
//   : num % 5 === 0
//   ? console.log("Buzz")
//   : console.log(num);

// ========================
// task 5
// Loops Practice Questions
// ========================
// Write a program using a for loop to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
  console.log(`Number: ${i}  `);
}
// Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}
// Write a program to find the sum of the first 20 natural numbers (1 + 2 + … + 20).
let sum = 0;
for (let i = 1; i <= 20; i++) {
  sum += i;
}
console.log(`The sum of the first 20 natural numbers is ${sum}.`);

// Write a program to print all even numbers between 1 and 50.
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(`Even Number: ${i}`);
  }
}

// Write a program to print all odd numbers between 1 and 50.
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(`Odd Number: ${i}`);
  }
}
// Write a program that prints the factorial of a number (e.g., factorial of 5 = 5 × 4 × 3 × 2 × 1).
let number = 5;
let factorial = 1;
for (let i = number; i >= 1; i--) {
  factorial = factorial * i;
}
console.log(`The factorial of ${number} is ${factorial}.`);

// Write a program to print the square of numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log(`The square of ${i} is ${i * i}.`);
}
// Write a program to print the numbers in reverse order from 100 to 1.
for (let i = 100; i >= 1; i--) {
  console.log(`Number: ${i}`);
}
// Write a program to calculate the sum of even numbers from 1 to 100.
let evenSum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  }
}
console.log(`The sum of even numbers from 1 to 100 is ${evenSum}.`);
// Write a program to calculate the sum of odd numbers from 1 to 100.
let oddSum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    oddSum += i;
  }
}
console.log(`The sum of odd numbers from 1 to 100 is ${oddSum}.`);
let even = 0;
let odd = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    even += i;
  } else {
    odd += i;
  }
}
console.log(`The sum of even numbers from 1 to 100 is ${even}.`);
console.log(`The sum of odd numbers from 1 to 100 is ${odd}.`);

// Create an array of 10 numbers and use a for loop to print all the elements.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
  console.log(`Element at index ${i} is ${numbers[i]}.`);
}
// Create an array of numbers and use a for loop to find the sum of all elements.
let numArray = [12, 45, 23, 67, 34, 89, 90, 11, 10, 5];
let total = 0;
for (let i = 0; i < numArray.length; i++) {
  total += numArray[i];
}
console.log(`The sum of all elements is ${total}.`);

// Write a program to find the largest number in an array using a for loop.
let arr = [34, 67, 23, 89, 90, 12, 45];
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(`The largest number in the array is ${largest}.`);

// Write a program to find the smallest number in an array using a for loop.
let smallest = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}
console.log(`The smallest number in the array is ${smallest}.`);

// Given an array of numbers, use a for loop to count how many are even and how many are odd.
let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}
console.log(`Even numbers: ${evenCount}, Odd numbers: ${oddCount}`);

// Write a program to reverse an array using a for loop (without using reverse() method).
let originalArray = [1, 2, 3, 4, 5];
let reversedArray = [];
for (let i = originalArray.length - 1; i >= 0; i--) {
  reversedArray.push(originalArray[i]);
}
console.log(`Reversed Array: ${reversedArray}`);

// Write a program to create an array of names and print each name with a greeting like:
// "Hello, Ali"
let names = ["Jarrar", "Hammad", "Abdullah", "Sharjeeel"];
for (let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}`);
}

// Given an array of numbers, use a for loop to find the average of the numbers.
let Arraynum = [12, 45, 23, 67, 34, 89, 90, 11, 10, 5];
let sumTotal = 0;
for (let i = 0; i < Arraynum.length; i++) {
  sumTotal += Arraynum[i];
}
let average = sumTotal / Arraynum.length;
console.log(`The average is ${average}.`);

// Create an array of 5 fruits and use a for loop to print them as:
// Fruit 1: Apple
// Fruit 2: Mango … and so on.
let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

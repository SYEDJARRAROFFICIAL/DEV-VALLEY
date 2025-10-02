// const colors = ["red", "green", "blue"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(`The color at index ${i} is ${colors[i]}.`);
// }

// // Example of a for loop breaking early
// const numbers = [10, 20, 30, 40, 50];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === 30) {
//     console.log("Found 30! Stopping the loop.");
//     break;
//   }
//   console.log(numbers[i]);
// }

// const fruits = ["apple", "banana", "orange"];

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// // To get the index with a for...of loop, use the .entries() method
// for (const [index, fruit] of fruits.entries()) {
//   console.log(`The fruit at index ${index} is ${fruit}.`);
// }

// const employees = [
//   { name: "Jam Josh", age: 44, salary: 4000 },
//   { name: "Justina Kap", age: 34, salary: 3000 },
//   { name: "Chris Colt", age: 37, salary: 3700 },
// ];

// employees.forEach((employee) => {
//   console.log(`${employee.name} is ${employee.age} years old.`);
// });

// const numbers = [1, 2, 3, 4, 5];

// // Create a new array with every number doubled
// const doubledNumbers = numbers.map(num => num * 2);

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// console.log(numbers);       // Original array is unchanged: [1, 2, 3, 4, 5]

// const scores = [12, 55, 70, 47];

// // Get all scores greater than 50
// const highScores = scores.filter(score => score > 50);

// console.log(highScores); // Output: [55, 70]

// const numbersToSum = [1, 2, 3, 4];

// // Calculate the sum of all numbers
// const sum = numbersToSum.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0 // The initial value for the accumulator
// );

// console.log(sum); // Output: 10

// // Reduce can also be used with objects
// const purchases = [
//   { item: "Widget", price: 10 },
//   { item: "Gadget", price: 25 },
//   { item: "Doodad", price: 15 }
// ];

// const totalPrice = purchases.reduce((total, purchase) => total + purchase.price, 0);
// console.log(`The total price is ${totalPrice}.`); // Output: The total price is 50.

// let animals = ['dog', 'cat'];

// // Add to the end
// animals.push('bear');
// console.log(animals); // Output: ['dog', 'cat', 'bear']

// // Remove from the end
// const lastAnimal = animals.pop();
// console.log(lastAnimal); // Output: 'bear'
// console.log(animals);    // Output: ['dog', 'cat']

// // Add to the beginning
// animals.unshift('elephant');
// console.log(animals); // Output: ['elephant', 'dog', 'cat']

// // Remove from the beginning
// const firstAnimal = animals.shift();
// console.log(firstAnimal); // Output: 'elephant'
// console.log(animals);     // Output: ['dog', 'cat']

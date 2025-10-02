// ============================================================================
// JavaScript Fundamentals: A Commented Guide
// This file demonstrates core concepts of the JavaScript language.
// ============================================================================

// --- 1. VARIABLES ---
// Variables are containers for storing data values. In modern JavaScript,
// we primarily use `let` and `const`.

// `const` is used for values that will not be reassigned.
const author = "Gemini";
const yearCreated = 2024;

// `let` is used for values that you expect to change.
let currentTopic = "Variables";
console.log(`Current topic: ${currentTopic}`); // Output: Current topic: Variables

// Attempting to reassign a const will cause an error.
// yearCreated = 2025; // This would throw a TypeError.

// --- 2. DATA TYPES ---
// JavaScript has several built-in data types.

const aString = "Hello, World!"; // String: Textual data, enclosed in quotes.
const aNumber = 42; // Number: Can be an integer or a floating-point number.
const aBoolean = true; // Boolean: Represents true or false.
const isNull = null; // Null: Represents the intentional absence of any object value.
let isUndefined; // Undefined: A variable that has been declared but not assigned a value.

console.log(`Type of aString: ${typeof aString}`); // Output: Type of aString: string
console.log(`Value of isUndefined: ${isUndefined}`); // Output: Value of isUndefined: undefined

// --- 3. OBJECTS ---
// Objects are complex data types used to store collections of key-value pairs.
// They are great for grouping related data and functionality.

currentTopic = "Objects";
const user = {
  // Properties (data)
  firstName: "Alex",
  lastName: "Doe",
  age: 30,
  isVerified: true,

  // Method (a function that belongs to the object)
  getFullName: function () {
    // `this` refers to the object the method is called on (in this case, `user`).
    return this.firstName + " " + this.lastName;
  },
};

// Accessing object properties using Dot Notation (most common)
console.log(`User's name: ${user.firstName}`); // Output: User's name: Alex

// Accessing object properties using Bracket Notation (useful for dynamic keys)
console.log(`User's age: ${user["age"]}`); // Output: User's age: 30

// Calling an object's method
console.log(`User's full name: ${user.getFullName()}`); // Output: User's full name: Alex Doe

// --- 4. ARRAYS ---
// Arrays are a special type of object for storing ordered lists of values.

currentTopic = "Arrays";
const fruits = ["Apple", "Banana", "Cherry"];

// Accessing an element by its index (arrays are zero-indexed)
console.log(`The first fruit is: ${fruits[0]}`); // Output: The first fruit is: Apple

// Adding an item to the end of the array
fruits.push("Date");
console.log("Fruits after push:", fruits); // Output: Fruits after push: [ 'Apple', 'Banana', 'Cherry', 'Date' ]

// Iterating over an array with a forEach loop
console.log("Iterating through fruits:");
fruits.forEach(function (fruit, index) {
  console.log(`  Index ${index}: ${fruit}`);
});

// --- 5. FUNCTIONS ---
// Functions are blocks of reusable code that perform a specific task.

currentTopic = "Functions";

// a) Function Declaration
// These are "hoisted," meaning they can be called before they are defined in the code.
function greet(name) {
  return `Hello, ${name}! This is a function declaration.`;
}
console.log(greet("Alice"));

// b) Function Expression
// This assigns an anonymous function to a variable. It is not hoisted.
const calculateSum = function (a, b) {
  return a + b;
};
console.log(`Sum of 5 and 10: ${calculateSum(5, 10)}`);

// c) Arrow Function (ES6+)
// A more concise syntax for function expressions.
const multiply = (a, b) => a * b;
console.log(`Product of 4 and 7: ${multiply(4, 7)}`);

// --- 6. CONDITIONAL STATEMENTS ---
// Used to execute different code based on different conditions.

currentTopic = "Conditionals";
const currentHour = 14; // 2 PM

if (currentHour < 12) {
  console.log("Good morning!");
} else if (currentHour < 18) {
  console.log("Good afternoon!"); // This will be the output
} else {
  console.log("Good evening!");
}

// --- 7. LOOPS ---
// Used to execute a block of code repeatedly.

currentTopic = "Loops";
console.log("Counting to 5 with a for loop:");

for (let i = 1; i <= 5; i++) {
  console.log(`  Count: ${i}`);
}

console.log("\n--- End of Demonstration ---");

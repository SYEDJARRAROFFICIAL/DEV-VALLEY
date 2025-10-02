// function add(a, b, c) {
//   return a + b + c;
// }

// const a = 5;
// const b = 10;
// const c = 15;
// const result = add(a, b, c);
// console.log(`The sum of ${a}, ${b}, and ${c} is ${result}.`);

// const array1 = [1, 2, 3];
// const filteredArray = array1.filter((num) => num !== 1);
// console.log(filteredArray); // Output: [2, 3]
// // type of return from filter is always an array but will be shown as object
// console.log(typeof filteredArray);

// const fruits = ["Orange", "Mango", "Apple", "Banana"];
// const nobanana = fruits.filter((fruit) => fruit !== "Banana");
// console.log(nobanana); // Output: [ 'Apple', 'Orange', 'Mango' ]

// const sortedfruits = fruits.sort().reverse();
// console.log(sortedfruits);

const fruits = ["Orange", "Mango", "Apple", "Banana"];
const lengthyfruits = [];

for (let fruit of fruits) {
  if (fruit.length > 5) {
    lengthyfruits.push(fruit);
  }
}
console.log(`Lengthy fruits: ${lengthyfruits}`);

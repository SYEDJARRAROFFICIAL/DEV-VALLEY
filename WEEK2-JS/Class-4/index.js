// Object.prototype.hello = function () {
//   console.log("Hello from Array");
// };

// const obj1 = {
//   fName: "John",
//   lName: "Doe",
//   age: 30,
// };

// const arr = [1, 2, 3, 4, 5];

// arr.hello();
// const obj2 = {};

// obj2.hello();

// const str = "Hello World";
// console.log(typeof str);

// str.hello();

// create custom myPush method without using push method and elements parameter
// const array = [1, 2, 3];

// remove console logs after testing of polyfill functions

// const array = [1, 2, 3, 4, 5];

// if (!Array.prototype.myPush) {
//   Array.prototype.myPush = function (element) {
//     console.log(`Array before push: ${this}`);
//     this[this.length] = element;
//     console.log(`Array after push: ${this}`);
//     return this.length;
//   };
// }

// array.myPush(6);
// console.log(array);

// ============================================================
// create a custom myFilter method without using filter method
// ============================================================
// if (!Array.prototype.myFilter) {
//   Array.prototype.myFilter = function (callback) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//       console.log(`Array before filter: ${this}`);
//       if (callback(this[i], i, this)) {
//         result.myPush(this[i]);
//       }
//     }
//     return result;
//   };
// }

// const filteredArray = array.myFilter((num) => num % 2 === 0);
// console.log(filteredArray);

// const result = array.filter((num) => num % 2 === 0);
// console.log(result);

// console.log(this);

// ============================================================
// create a custom myMap method without using map method
// ============================================================

let arr = [1, 2, 3, 4, 5];
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      const value = callback(this[i], i, this);
      result.push(value);
    }
    return result;
  };
}

const results = arr.myMap((num) => num * 2);
console.log(`Results using myMap: ${results}`);

const results2 = arr.map((num) => num * 2);
console.log(`Results using built in map: ${results2}`);

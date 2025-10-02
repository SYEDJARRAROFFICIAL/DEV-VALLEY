// // =====================

// const originalObject = {
//   name: "Alice",
//   details: { age: 30, city: "New York" },
//   hobbies: ["reading", "hiking"],
// };

// const deepCopy = structuredClone(originalObject);

// deepCopy.details.age = 31;
// deepCopy.hobbies.push("cooking");

// console.log(originalObject.details.age); // Output: 30
// console.log(originalObject.hobbies); // Output: ["reading", "hiking"]

// // =================================

// // ======================
//     const originalObject = {
//       name: "Bob",
//       details: { age: 25 },
//       greet: function() { console.log("Hello"); } // This will be lost
//     };

//     const deepCopy = JSON.parse(JSON.stringify(originalObject));

// console.log(deepCopy.greet); // Output: undefined
// // ========================

// // ================================
//     function deepClone(obj) {
//       if (obj === null || typeof obj !== "object") {
//         return obj;
//       }

//       let copy;
//       if (Array.isArray(obj)) {
//         copy = [];
//         for (let i = 0; i < obj.length; i++) {
//           copy[i] = deepClone(obj[i]);
//         }
//       } else {
//         copy = {};
//         for (let key in obj) {
//           if (Object.prototype.hasOwnProperty.call(obj, key)) {
//             copy[key] = deepClone(obj[key]);
//           }
//         }
//       }
//       return copy;
//     }

//     const originalObject = { a: 1, b: { c: 2 } };
// const deepCopy = deepClone(originalObject);
//     // =====================================

// ============================
// Assuming Lodash is imported
// import _ from 'lodash';

// const originalObject = { /* ... */ };
// const deepCopy = _.cloneDeep(originalObject);
// ===========================

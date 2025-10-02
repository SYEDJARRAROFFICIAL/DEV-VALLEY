// let a = 3;
// let b = a;
// b = a;

// a = 5;
// console.log(a);
// console.log(b);

// const obj1 = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// // const obj2 = obj1;
// // obj2.age = 31;

// const obj2 = { ...obj1 };
// obj2.age = 31;

// console.log(obj1);
// console.log(obj2);

// ====================
// const obj1 = {
//   name: "JS COURSE",
//   duration: " 3 months",
//   platform: "Dev Valley",
//   instructor: "Hammad",
//   topics: {
//     html: "HTML",
//     css: "CSS",
//     javascript: "JavaScript",
//     react: "React",
//   },
// };
// const obj2 = { ...obj1 };
// obj2.topics.css = "Bootstrap";
// console.log(obj1);
// console.log(obj2);
// ====================

// // ====================
// arrays in object with{...} the address of array will be copied tonew object
// const obj1 = {
//   name: "JS COURSE",
//   duration: " 3 months",
//   platform: "Dev Valley",
//   instructor: "Hammad",
//   topics: {
//     html: "HTML",
//     css: "CSS",
//     javascript: "JavaScript",
//     react: "React",
//   },
//   skills: ["web development", "front end", "back end"],
// };
// const obj2 = { ...obj1 };
// obj2.topics.css = "Bootstrap";
// obj2.skills.push("full stack");
// console.log(obj1);
// console.log(obj2);
// // ====================

// ====================
// cloning deep copy of obj1 into obj2
// const obj1 = {
//   name: "JS COURSE",
//   duration: " 3 months",
//   platform: "Dev Valley",
//   instructor: "Hammad",
//   topics: {
//     html: "HTML",
//     css: "CSS",
//     javascript: "JavaScript",
//     react: "React",
//   },
//   skills: ["web development", "front end", "back end"],
// };
// const obj2 = JSON.stringify(obj1);
// console.log("stringified obj1:", obj2);
// const obj3 = JSON.parse(obj2);
// console.log("parsed obj2:", obj3);
// obj3.topics.css = "Bootstrap";
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// ====================

// const obj2 = obj1;
// // console.log("obj1:", obj1);

// obj2.topics.css = "Bootstrap";
// console.log("obj2:", obj2);
// console.log("obj1:", obj1);
// console.log(typeof obj2); // true because both are pointing to same address

// ===========================================
// difference between assignment operator and spread operator to copy an object

const objA = { x: 1, y: 2 };
const objB = objA; // Assignment operator copies the reference
const objC = { ...objA }; // Spread operator creates a shallow copy
console.log(objA); // { x: 1, y: 2 }
objB.x = 10;
objC.y = 20;
console.log(objA); // { x: 10, y: 2 } - objA is affected by changes in objB
console.log(objB); // { x: 10, y: 2 } - objB reflects changes made to objA
console.log(objC); // { x: 1, y: 20 } - objC is independent of objA and objB
// ===========================================

console.log("hello welcome back");

console.log("comment exmaple");

// single line comment

/*

console.log("hello world"); 
multi - line

*/

//lets exploe keywords in variable declaratiton in js

/* 
lets explore types in js 
remeber always var, let , const  in simple analogy vlc media player lol 
 */

// var demonstration
var a = 10; // var can be redeclared and reassigned
var a; // redeclaring var is allowed (not recommended)
console.log(a); // prints undefined because of redeclaration

// let demonstration
let b = 20; // let can be reassigned but not redeclared
console.log(b);

b = 30; // reassignment is allowed with let
console.log(b);

// const demonstration
const c = 40; // const cannot be redeclared or reassigned
console.log(c);

// When to use each:
// var: Avoid using var in modern JavaScript (function-scoped, can be redeclared)
// let: Use for variables that need to be reassigned (block-scoped)
// const: Use for values that shouldn't change (block-scoped, immutable reference)

// lets explore types

// ================ DATA TYPES IN JAVASCRIPT ================

// 1. String Type
// Strings can be defined using three types of quotes
let name = "John"; // Double quotes
let name2 = "Jane"; // Single quotes
let name3 = `John`; // Backticks (Template literals)
console.log("String Examples:", name, name2, name3);
console.log("Type of name:", typeof name);

// 2. Number Type
// Numbers can be integers or floating-point
let age = 20; // Integer
let age2 = 20.5; // Floating-point
console.log("Number Examples:", age, age2);
console.log("Type of age:", typeof age);

// 3. Boolean Type
let isStudent = true;
console.log("Boolean Example:", isStudent);
console.log("Type of isStudent:", typeof isStudent);

// 4. Undefined Type
let f;
console.log("Undefined Example:", f);
console.log("Type of f:", typeof f);

// 5. Null Type
let g = null;
console.log("Null Example:", g);
console.log("Type of g:", typeof g); // Returns 'object' (This is a known JavaScript quirk)

// 6. Array Type
let arr = [1, 2, 3, 4, 5];
console.log("Array Example:", arr);
console.log("Type of arr:", typeof arr); // Returns 'object'

// 7. Object Type
let obj = { name: "John", age: 20 };
console.log("Object Example:", obj);
console.log("Type of obj:", typeof obj);

// 8. Symbol Type
let sym = Symbol("unique");
console.log("Symbol Example:", sym);
console.log("Type of sym:", typeof sym);

// ================ TYPE CONVERSION ================

// 1. Implicit Type Conversion (Type Coercion)
// JavaScript automatically converts types in certain operations
console.log("\n=== Implicit Type Conversion Examples ===");

// String + Number = String
let strNum = "10" + 2; // "102" (string concatenation)
console.log("String + Number:", strNum);

// String - Number = Number
let strMinusNum = "10" - 2; // 8 (numeric subtraction)
console.log("String - Number:", strMinusNum);

// Boolean + Number = Number
let boolNum = true + 1; // 2 (true becomes 1)
console.log("Boolean + Number:", boolNum);

// 2. Explicit Type Conversion
console.log("\n=== Explicit Type Conversion Examples ===");

// String to Number
let strToNum = Number("123");
console.log("String to Number:", strToNum);

// Number to String
let numToStr = String(123);
console.log("Number to String:", numToStr);

// Boolean Conversion
let boolFromStr = Boolean("hello"); // true
let boolFromEmpty = Boolean(""); // false
console.log("String to Boolean:", boolFromStr, boolFromEmpty);

// ================ COMMON INTERVIEW QUESTIONS ================

/*
Q1: What is the difference between == and === in JavaScript?
A: == performs type coercion before comparison, while === checks both value and type.
   Example:
   "5" == 5   // true (type coercion)
   "5" === 5  // false (different types)

Q2: Why does typeof null return 'object'?
A: This is a known bug in JavaScript that has persisted for historical reasons.
   It was an implementation error in the first version of JavaScript that was never fixed
   to maintain backward compatibility.
*/

// Practical Example of Type Coercion Gotcha
console.log("\n=== Type Coercion Gotcha Example ===");
console.log([] + []); // "" (empty string)
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0
console.log({} + {}); // "[object Object][object Object]"

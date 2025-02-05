// What is Data Types ?
// Ans : The data type is a classification of data that defines 
// what kind of value is stored and what kind of operation can 
// be performed on it.
// There are 7 types of data type in js
// 1. number : a number or floating point number
// 2. string : sequence of character
// 3.boolean : truthy or falsy value
// 4. null : "null" is a special value denotes the "no value"
// 5. undefined : represents a variable that has been declared but not initialized.
// 6. symbol : represents a unique and immutable identifier.
// 7. bigint : represents a integer with arbitrary precision.

let name = "Venkatesh"; // string
let age = 22; // number
let isMarried = false; // boolean
let nullish = null;  // null
let undef;   // undefined : declared but not initialized
let sym = Symbol("%"); // symbol
let bInt = 123456n; // bigInt

console.table([typeof(name),typeof(age), typeof(isMarried), typeof(nullish), 
    typeof(undef), typeof(sym), typeof(bInt)])

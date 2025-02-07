// What is Operator?
// Ans : Operators are special symbol that are used to perform operations on values
//      and variables. They can be classified into several categories based on their functionality.

// 1. Arithmetic operator : 
// Ans : Arithmetic operators are used to perform mathematical calculations on numerical values.
//      + , - , *  ,/ , % , ++ , -- , ** , etc.

// Example : 

let sum = 1 + 3;  // addition
let sub = 5 - 4;  // subtraction
let multi = 5 * 5; // multiplication 
let div = 10 / 2;  // division
let mod = 25 % 3;  // modulus


console.table([sum , sub, multi, div, mod]);

// ===============================================================================

// 2. Comparison Operator : 
// Ans : Comparison operators are used to compare two values and return boolean (true or false ) result
// == , === , != , !== , > , < , >= , <= 
// 
// Example .: 

let a = 5; 
let b = 9;
console.log( a > b); // greater than 
console.log( a < b); // less than 
console.log( a == b); // equal to 
console.log(a === b); // strict equal to 
console.log(a != b); // not equal to 
console.log(b !== a); // strict not equal to 
console.log(a >= b); // greater than or equal to 
console.log(a <= b); // less than or equal to 

// =========================================================================================

// 3. Logical Operator : 
// Ans : Logical operator are used to combine or invert boolean values.
//  && , ||, !
// Example : 
let age = 18;
let isMarried = false;
if(age >= 18 && isMarried == false){    // logical and : both condition must be true
    console.log("You are eligible for job")
}
else{
    console.log("You are not eligible.");
}



if(age >= 18 || isMarried == false){   // logical or : minimum one condition must be true
    console.log("You are eligible for job")
}
else{
    console.log("You are not eligible.");
}

// ===========================================================================================



// 4. Assignment Operator : 
// Ans : Assignment Operator are used to assign value to variables.
//  = , += , -= , *= , .

// Example : 

let assign = 45;
console.log(assign);
assign += 1;        // add assignment
console.log(assign);
assign -= 1;        // sub assignment
console.log(assign);
assign *= 2;        // multiplication assignment
console.log(assign); 
assign /= 3;        // division assignment
console.log(assign);
assign %= 3;        // modulus assignment
console.log(assign);

//======================================================================================



// 5. Ternary Operator : 
// Ans : A ternary operator is a short-hand notation that evaluates a 
// a condition and returns one of two expressions. it is also known as conditional operator.

// Example : 

let isAdult = (age >= 18)? "Yes" : "No";
console.log(isAdult)


// =====================================================================================


// typeof operator : 
// typeof opreator is used to know the data type of variable.

console.log(typeof(age))
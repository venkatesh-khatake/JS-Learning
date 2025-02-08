//Conditional Statement :
//  1. Conditional statement are used to perform different actions based on different condition
//  2. They allow our code to make decisions and execute specific blocks of code only when certain conditions are met

//1. 'if' statement :
//      The 'if' statement executes a block of code if specified condition evaluates to true.
//
// Syntax :
//      if(condition){
//          // code
//      }

// Example :
let age = 8;
if (age >= 18) {
  console.log("You can drive.");
}

// ================================================================================

// 2.'else' statement :
//      The 'else' statement specifies a block of code to be executed if the condition in the 'if' statement is false.
//
// Syntax :
//      if(condition){
//          //code
//      }
//      else{
//      // code
//      }.

// Example :

if (age >= 18) {
  console.log("You can drive.");
} else {
  console.log("You cannot drive");
}

// =======================================================================

//3. 'else-if' statement :
//      The 'else-if' statement allows you to test multiple conditions
//      if the first condition is false, it checks the next one and so on.
//      the else if statement must follows an if statement  and precede an 'else' statement (if present)
//
// Example :

let license = true;

if (age >= 18) {
  console.log("you can drive");
} else if (license == true) {
  console.log("you are eligible to drive");
} else {
  console.log("You cant drive");
}

// ==============================================================================

// 4. 'switch' statement :
//          switch statement is used to perform different actions based on the value of an expression.
//          it is particularly useful when you need to compare the same expression against multiple values.
//
// Syntax :
//
//      switch(expression){
//          case value1:
//code
//break;
//          case value2:
//code
//break;
//            default:
//code
//      }

//example :

let month = 9;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Unspecified Month");
}

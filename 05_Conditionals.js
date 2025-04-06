// Conditional Statement :
//      Conditional Statements allows our code to make decisions and execute block of
//      code based on whether condition is true or false.

// 1. if Statement :
//  if takes a condition , if the condition is true, it will execute code which is inside the if statement, otherwise it will be ignore.
//  The if statement is used to execute a block of code if a condition is true.

//  Syntax : if (condition) {
//       code;
// }

let age = 95;

if (age >= 18) {
  console.log("You are an adult");
}

// 2. if-else statement :
// if the "if  statement" condition getting false, then else statement will be executed.
else {
  console.log("You are a minor");
}

// else-if Statement :
//      if there are multiple conditions then else-if statement can be used.

// Example :

if (age <= 18) {
  console.log("You are Minor");
} else if (age >= 18 && age <= 49) {
  console.log("You are Adult.");
} else if (age >= 50) {
  console.log("You are Senior");
} else {
  console.log("Invalid Age");
}

// 3. Switch Statement :
//      Switch statement is used to execute a block of code when a variable matches a value.

let day = 5;

switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday.");
    break;
  case 3:
    console.log("Today is Wednesday.");
    break;
  case 4:
    console.log("Today is Thursday.");
    break;
  case 5:
    console.log("Today is Friday.");
    break;
  case 6:
    console.log("Today is Saturday.");
    break;
  case 7:
    console.log("Today is Sunday.");
    break;
  default:
    console.log("Invalid Day");
}

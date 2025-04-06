// Operators : Operators are symbols or special keyword used to perform
//              operations on values and variables

// There are various types of Operators :

// 1. Arithmetic Operators : Arithmetic Operators performs mathematical
              //             Operations, like, addition, subtraction, multiplication, etc.

            //   +, -, *, /, %, --, ++, etc
            console.log("==========Arithmetic Operator===============")
            let a = 15;
            let b = 8;
            console.log('Addition : ', a + b);
            console.log("Subtraction : ", a - b);
            console.log("Multiply : ", a * b);
            console.log("Divide : ", a / b);
            console.log("Modulus : ",a % b);
            console.log("Increment : ", a++);
            console.log("Decrement : ", a--);


// 2. Assignment Operators : 
//   Assignment Operators are used to assign a value to a variable.
//    = , -= , += , *= , etc...

console.log("============Assignment Operator=============")
            let assign = 45;
            console.log(assign);
            assign += 5; // assign = assign + 5;
            console.log(assign);

            assign -= 2;  // assign = assign - 2;
            console.log(assign);

            // etc....


// 3.Comparison Operators : 
//     They are used to compare two values & return a boolean,
//      it is useful for making decision in conditional statements.
// >, <, >= , <= , ==  ,=== , !=, etc..

console.log("==========Comparison Operator=============")
console.log(5 > 45);
console.log(5 < 45);
console.log(5 >= 5);
console.log(5 <= 5);
console.log(5 == 5);
console.log(5 === '5');


// 4. Ternary Operator : 
//   It's a short hand for conditional statement .it takes a three operands.
console.log("==========Ternary Operator=============")
let age = 25;
let status = (age > 18) ? 'I can Vote.':"I cannot Vote.";

console.log(status);

// 5. Logical Operators : 
//      Logical operators are usd to combine expression.

// and = "&&", OR = "||", Not = "!"

console.log("=========Logical Operators=============");

isLogin = false;

let bgmi = (age >= 18 && isLogin) ? 'You can Play BGMI' : "Condition not Matched.";

console.log(bgmi);


//6. Bitwise Operators : 
//   Bitwise operators are used to perform operations on binary numbers.
//  &, |, ^, ~
console.log("=======Bitwise Operators==========")
console.log(2 & 2);
console.log(2 | 8);
console.log(2 ^ 8);
// console.log(2 ~ 8);
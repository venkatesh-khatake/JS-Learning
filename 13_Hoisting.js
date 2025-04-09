// Hoisting : 
//   - In Hoisting Variables and functions are moved to the top of their scope.
//   - It is a mechanism that allows us to use the variable or function before it is declared.
//   - It is a feature of JavaScript that allows us to use the variable or function before it
//     is declared, but it does not mean that the variable or function is moved to the top
//     of the script. It is still declared where it was declared in the code.

//   - There are two types of hoisting: variable hoisting and function hoisting.
//   - Variable hoisting: It is the process of moving the variable declaration to the top of
//     the scope. It is not possible to use the variable before it is declared.
//   - Function hoisting: It is the process of moving the function declaration to the top of
//     the scope. It is possible to use the function before it is declared.
//   - In JavaScript, variables are "hoisted" to the top of their scope, but
//     their assignment is not. This means that if you use a variable before it is declared,
//     it will be undefined until it is assigned a value.
//   - In JavaScript, functions are "hoisted" to the top of their scope, but
//     their assignment is not. This means that if you use a function before it is declared,
//     it will be undefined until it is assigned a value.

//   - In JavaScript, the `let` and `const` keywords are not hoisted,
//     but the `var` keyword is hoisted.
//   - In JavaScript, the `function` keyword is hoisted, but the `var`
//     keyword is not hoisted for function declarations.
//   - In JavaScript, the `function` keyword is hoisted, but the `var`
//     keyword is not hoisted for function expressions.


// console.log(name); // output : undefined
// var name = "Venkatesh";


// Hoisting is not possible with 'let' and 'const' keyword;
// console.log(name);
// let name = "Venkatesh"; // it gives reference Error : cannot access 'name' before initialization.


// function hoisting : 


greet();
function greet(){
    console.log("Hello");
}

// Hoisting is not possible with function Expression 

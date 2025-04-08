// Function : 
//      Function is reusable block of code used to execute a specific task.
//      It can take arguments and return values.
//      Function can be defined inside a class or outside a class.
//      Function can be called multiple times in a program.

// Syntax : 
//         function function_Name(parameter1, parameter2){
                //code ;
//          }
 
// For Example : 

function addition(a, b){
    return a + b;
}
console.log(addition(4,3));


// return Statement : 
//      The return statement is used to return a value from a function.


// Arrow Functions : 
//      Arrow functions are a concise way to define small functions in JavaScript.
//      Arrow function was introduced in ES 6.
//      They are defined using the "=>" operator.
//      Arrow functions are anonymous functions, meaning they do not have a name.
//      Arrow functions are used to define functions that can be used as arguments to other functions, or
//      as values to be returned by other functions.
//      Arrow functions are not hoisted, meaning they cannot be used before they are defined.
//      Arrow functions do not have their own "this" context, meaning they do not have access
//      to the "this" keyword.
//      Arrow functions are not supported in older browsers, meaning they may not work in older browsers.

// Syntax :
//      let function_Name = (parameter1, parameter2) => {
    //          // code
    //      }

// for Example : 

let greet = () =>{
    console.log("Hello World");
}
greet()



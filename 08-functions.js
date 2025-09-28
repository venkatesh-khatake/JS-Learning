// What is Function?
// A function is a block of code that performs a 
// specific task, anytime and anywhere in the program when we call it.

function greet(name){
    console.log("Hello "+name);
}

// 1. What is Parameter ?
// Parameters are the placeholders defined in the function.

// function greet(name)   // .....Here name is a parameter

// 2. What is Arguments?
// Arguments are the actual values passed at the time of calling function.

greet("Venkatesh") // ......here "Venkatesh" is an argument.


// 3. Default Parameters : 
// Default parameters are used when no argument is provided during the function call.
// If no value is passed , then function automatically uses default value.

// eg : 
    function demo(name = "User"){
        console.log("Hello "+ name);
    }

    demo("Venkey");


// return statement : 
//  The return statement is used to send a result back from the function.
// when the return statement executes, the function stops running at that point.

//eg : 

function sum(a, b){
    return a + b;
}
let result = sum(4,5);
console.log(result);



// Types of Functions : 

// 1. named Function : 
// A named function has it's own name when it is declared, it's easy to reuse and debug because
// the name is shows up in  error message or stack traces.

// syntax : 

        // function hello(){
        //     console.log("Hello");
        // }

// 2. Function expression 
// A function that doesn't have its own name, but is stored in the variable that known as function expression.

// Syntax : 

        // let greet = (){
            // console.log("Hello")
    // }

    // Function call : greet();

// 3. Anonymous Function : 
// An anonymous function is just a function without name,
//  since it has no name, it cannot be called directly.

// Syntax : 

        // function(){
        // code
       // }


// 4. Arrow Function : 
// Arrow function is introduced in ES6, it's a shorter way  
// of writing function and they don't have their own 'this' binding.

// Syntax : 
//  let greet = ()=>{
    
// }

// 5. IIFE(Immediately Invoked Function Expression):
// IIFE function are executed immediately after their definition,
// They are often used to create isolated Scopes.

// Syntax : 

//          (function(){
            // console.log("Hello")
            // })();


// 6. Callback Function : 
//  A function that is passed as an argument to another function
//  and it is executed after the completion of that function .

// Syntax : 

//         function num (n, callback){
                // return callback(n)
//           }


// 7. Constructor Function : 
//  A constructor function is a special type of function that
//  is used to create multiple objects with the same structure
// and it is called with 'new' keyword.

// syntax : 

//  function Person(name, age){
//         this.name = name;
//         this.age = age;
//   }

// const user = new Person("Venkey", 23);
// console.log(user.name)
// console.log(user.age)

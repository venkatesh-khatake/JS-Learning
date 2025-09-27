// What is Variable?
// Variable is a name of memory location used to store data.
// it allows us to store, update, and reuse values.
// Variables can be categorized based on their scope  :

// Scopes : 
// 1. Local or Function Scope : 
// A Variable  declared inside any function , that variable can be accessible within that function only.

// 2. Block Scope : 
// A Variable declared inside any inside block , that can be accessible only within that block only.

// 3. Global Scope : 
// A variable declared outside the function and the block , that variable can be accessible anywhere in the program


// let, var and const : 
// A variable can be declared using these keyword

// 1. var : 
//      var is a oldest keyword used to declared a variable, it has a global scope or function scope.
//      meaning a variable declared with var keyword can be accessible within a function only.
//      it can be redeclared and reassigned.

var a = 22;
{
    console.log(a);   // global scope
    var b = 74;
}
 console.log(b); // global scope


 function greet(){
    var name = "venkatesh"; // function scope
    console.log(`Hello ${name}`);
 }

//  console.log(name) // function scope  : declared inside function cannot be accessible outside it

 greet()

// 2. let : 
//      let was introduced in ES6 version , it has a block scope and can be reassigned but cannot be redeclared.

{
    let c = 45; // Block Scope : declared inside block cannot be accessible outside it.
    c = 21; // can be reassigned but cannot be redeclared
    console.log(c);
}
// console.log(c)  // Throws error : c is not defined

// 3. const : 
//      const is used for constant values, it has a block scope and must be initialized at the time of declaration.

const pi = 3.14; // must be initialized at the time of declaration.
console.log(pi);

//  pi = 44; throws error : assignment to constant variable





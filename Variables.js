// Variables : Variable is a named memory location used to store data, it act like a container.

let name = "Venkatesh";

// we can declare a variable using 3 keyword that is : 
// let, const, var

// 1. var : var is oldest way to declare a variable. it has a function-scope or globally-scope , we can redeclare a variable using var keyword

        var age = 22;
        // function scope : when we declare a variable inside the function using var keyword. 
        // it is only accessible within that function. we cant access it outside the function.

        // globally scope : global scope  means we can access a variable anywhere in the program. 

        var a = "abc"

        {
            console.log(a);
        }

    
 // 2. let : let keyword introduced in ES6 Version(EcmaScript 6). it has a block scope and we can't redeclare same variable but we can reassign a value to it.

        // block scope : when we declare a variable within a specific block, it can be accessible only within that block, we can't access it outside that block.

        {
            let lName = "Khatake";
            console.log("inside ",lName);
        }
        // console.log(lName)  // throws  referenceError



// 3. const : const introduced in ES6 version. it has a block scope and it must be initialized during declaration. we can't reassign a value to it.

        const pi = 3.14;
        // pi = 114    // throws TypeError


    
        
// Variables : Variable is a named memory location used to store data, it act like a container.

let name = "Venkatesh";

// we can declare a variable using 3 keyword that is : 
// let, const, var

// 1. var : var is oldest way to declare a variable. it has a function-scope or globally-scope , we can redeclare a variable using var keyword

        var age = 22;
        // function scope : when we declare a variable inside the function using var keyword. 
        // it is only accessible within that function. we cant access it outside the function.
        //Example : 

            function displaySum(){
                var sum = 4 + 5;
            }

            // console.log(sum);   // throws ReferenceError : sum is not defined

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



// 3. const : const means constant,it was introduced in ES6 version. it has a block scope and it must be initialized during declaration. we can't reassign a value to it.

        const _pi = 3.14;
        console.log(_pi)
        // pi = 114    // throws TypeError


    
        

// Rules for Declaring Variable : 
// 1. we can't start a variable name with a number.
// 2. we can't use a special keyword as a variable name.
// 3. we can't use a space in a variable name.
// 4. we can't use a special character in a variable name.
// 5. we can't use a reserved keyword as a variable name.
// variable name must start with character, $(dollar) or (_)hyphen
// 6. we can't use a variable name that is same as a function name.
// 7. variable name must be meaningful.

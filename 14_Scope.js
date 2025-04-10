// What is Scope?
// Scope is the region of the program where a variable is defined and accessible.
// It is the area of the code where a variable is declared and can be used.
// Scope is used to prevent variable naming conflicts and to improve code readability.

// There are 3 basic types of Scope : 

// 1. Global Scope : 
// Those variables which are declared outside the function or block are having global scope.
// These variables can be accessed from any part of the program.
var x = 10; // Global Scope

// 2. function scope : 
// Those variables which are declared inside the function are having function scope.
// These variables can be accessed only inside the function where they are declared.
function myFunction() {
    var y = 20; // function scope
    console.log(y); // Output : 20
    } // Output : 20
    myFunction();

    // console.log(y) // it gives error : y is not defined

// 3. block scope : 
// Those variables which are declared inside the block are having block scope.
// These variables can be accessed only inside the block where they are declared.
if (true) {
    let z = 30; // block scope
    console.log(z); // Output : 30
    } // Output : 30

    // console.log(z);// it gives error : z is not <defined styleName={}></defined>


    console.log(num)
    console.log("Khatake");
    console.log("Venkatesh");
    let num = 14;

    console.log(num);

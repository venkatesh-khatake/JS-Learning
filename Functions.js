// What is function?
// A function is a reusable block of code designed to perform a specific task, once we defined it, we can call it multiple time.
// it helps in code reusability, modularity and readability.



// Write a function that takes two numbers as arguments and returns their sum. 🚀

function sum(num1, num2){
    return num1 + num2;
}

console.log(sum(3, 5));

//Write a function that takes a number as input and returns true if it's even, otherwise false.

function even(num){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(even(5))




// ===================================================

// Function Expression : 
// A function expression don't have specific name, we just create a variable and assigned function to it, 
// it is also known as anonymous function.

// ex : 

let greet = function(name){
    return `Good Morning ${name}`;
}
console.log(greet("Venkatesh"))


// =====================================================

// Arrow Function : 
// Arrow function is a shorter way to write function in js, it was introduced in ES6 and it uses => (arrow) syntax.

// ex.:

let disp = (name) =>{
    return `Good Morning ${name}`;
}

console.log(disp("Venkey"))

// =======================================================
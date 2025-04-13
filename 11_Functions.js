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

// function addition(a, b){
//     return a + b;
// }
// console.log(addition(4,3));


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

// let greet = () =>{
//     console.log("Hello World");
// }
// greet()


// ========================================

//Find Factorial

// let num = 5;
// let factorial = 1;
// for(let i = 1; i <= num ; i++){
//     factorial = factorial * i;
// }
// console.log(factorial);


// ========================================

// convert celsius to fahrenheit;

// function convertToFahrenheit(c){
//     let fahrenheit = c * 9/5 + 32;
//     return fahrenheit;
// }
// console.log(convertToFahrenheit(34));

// =========================================

//  Write a function that returns the square of a number.

function square(num){
    return num * num;
}

console.log(square(5));

// Write a function that checks if a number is even or odd.

function EvenOdd(num){
    if(num % 2 == 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(EvenOdd(5));

// Write a function to find the maximum of two numbers.

function maximum(num1, num2){
    if(num1 > num2){
        return `${num1} is greater than ${num2}`;
    }
    else if(num1 < num2){
        return `${num2} is greater than ${num1}`;
    }
    else if(num1 == num2){
        return `both are equal`;
    }
    else{
        return 'please enter a number';
    }
}

console.log(maximum(5,"ff"))

// Write a function to return the factorial of a number.

function factorial(num){
    if(num == 0 || num == 1){
        return 1
    }
    else{
        return num * factorial(num - 1);
    }
}
console.log(factorial(10));

// Write a function to reverse a string.
function reverseString(str){
    let newString = "";
    for(let i = str.length - 1; i >= 0; i--){
        newString = newString+ str[i];
    }
    return newString;
}
console.log(reverseString("Venkatesh"));

// Write a function that counts the number of vowels in a string.
function countVowels(str){
    let count = 0; 
    for(let i = 0; i <= str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U'){
            count++;
        }
    }
    return count;
}

console.log(countVowels("Tejaswini"));

// Write a function to check if a string is a palindrome.
function strPalindrome(str){
    let newStr = "";

    for(let i = str.length - 1; i >= 0; i--){
        newStr = newStr + str[i];
    }
    if(str == newStr){
        return 'true';
    }
    else{
        return 'false';
    }
}

console.log(strPalindrome("madam"));


function table(num){
    for(let i = 1; i <= 10; i++){
        console.log(`${num} * ${i} = ${num * i}`);
    }
}
table(5)



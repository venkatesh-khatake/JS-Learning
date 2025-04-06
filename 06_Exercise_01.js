//1. Declare variables for your name, age, and isStudent (true/false)
// Then log a sentence using all of them, like:
// "My name is Venkatesh, I am 22 years old and I am a student."

// Your code here:

let name = "Venkatesh";
let age = 22; 
let isStudent = true;

console.log("My name is "+ name + ", I am "+age+" years old and i am a student.")


// ======================================================

// 2. Create two number variables: num1 and num2
// Calculate their sum, difference, product, and quotient
// Log the results

// Your code here:

let num1 =25; 
let num2 = 14;

console.log("Sum :", num1 + num2);
console.log("Difference : ",num1 - num2);
console.log("Product : ", num1 * num2);
console.log("Quotient : ",num1 / num2);


// ======================================

// 3. Given two numbers, write conditions to check:

// Your code here:

// 1. Which one is greater

if(num1 > num2){
    console.log(num1, " is greater than ", num2);
}
else if( num1 == num2){
    console.log("Both are Equal.")
}
else{
    console.log(num2, " is greater than ", num1);
}

// 2. If both are positive numbers

if(num1 >= 0 && num2 >= 0){
    console.log("Both are positive numbers");
}
else{
    console.log("Both are Negative");
}


// 4. Write a program to check whether a person is eligible to vote or not.
// Age must be 18 or above to vote.

// let age = 20;  // change this value to test different results
// Your code here:


if(age >= 18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote")
}   



// 5. Create a grading system based on marks:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F

// let marks = 85;
// Output: Grade B

// Your code here:

let isPass = true;
let marks = 74;

if(isPass){
    if(marks >= 90 && marks <= 100){
        console.log("Grade A");
    }
    else if(marks >= 80 && marks <= 89){
        console.log("Grade B");
    }
    else if(marks >= 70 && marks <= 79){
        console.log("Grade C");
    }
    else if(marks >= 60 && marks <= 69){
        console.log("Grade D");
    }
    else{
        console.log("Grade F");
    }
}else{
    console.log("You are Fail.")
}


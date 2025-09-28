// What is Conditional Statements : 
// Conditional Statements executes a block of code based on wether condition is true or false.

// 1. if Statement : 
//      in if statement ,condition is true then it will execute a block of code, 
//      otherwise it will move to the next statement.

let age = "ab";

if(age >= 18){
    console.log("You can Vote.")
}

// 2. if-else statement  : 
//  in if-else statement , condition of if statement becomes false ,then  it will execute a else statement 

if(age >= 18){
    console.log("You can vote");
}
else{
    console.log("You can't vote");
}

// 3. else-if ladder : 
//  in else-if ladder, we can check multiple conditions, and execute a block of code according to it.

if(age >1 && age <10){
    console.log("You are Child");
}
else if(age > 10 && age < 18){
    console.log("Teenager")
}
else if(age >= 18 && age <= 49){
    console.log("Adult");
}
else if(age >= 50 ){
    console.log("Senior Citizen")
}
else{
    console.log("Enter your correct age");
}

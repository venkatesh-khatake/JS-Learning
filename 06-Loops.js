// What is Loop?
// Loops are used to execute a block of code repeatedly.

// 1. for Loop : 
//  for loop is used, when we know the exact how many times we want to execute a code block.

for(let i = 1; i<= 10; i++){
    console.log(i)
}

// 2. while loop : 
// while loop takes a condition, until condition becomes false, it will execute a block of code.

let a = 5;
 let i = 5;

while (a != 25){
    a += i;
    console.log(a);
}
console.log("The value of a is ", a);

// 3. do-while loop : 
//  do -while loop is similar to the while loop ,
//  but it runs a block of code at least once. even if the condition is already  false.

count = 5;

do{
    console.log(count);
    count++;
}while(count == 5)



// 4. for-in Loop : 
//  for in loop iterates over the enumerable properties of an object

let obj = {
    name : "Venkatesh",
    age : 22,
    isStudent : true
}

for(let key in obj){
    console.log(key +" : "+ obj[key]);
}

// 5. for of loop:
//  for of loop iterates over the iterable objects like , array, String, etc.

let arr = [1,2,3,4,5,6];

for(let [index, val] of arr.entries()){
    console.log("index : "+index +" : " + val )
}
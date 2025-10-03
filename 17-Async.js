// What is Synchronous:
// In synchronous programming, operations are performed one after another,
// so basically, each line of code waits for the previous one to finish before
// proceeding  to the next.so this means that the program executes in predictable
// linear order

// Ex. : 

// console.log("hello 1");
// console.log("hello 2");
// console.log("hello 3");

// This is the example of Synchronous programming, each line of code waits for the previous
// one to finish its execution.

// What is Asynchronous ?
// Asynchronous Programming allows multiple tasks to run independently of each other,
// in asynchronous code, a task can be initiated, and while waiting fot it to complete,
// other tasks can proceed. 
// This non-blocking nature helps improve performance and responsiveness, especially in web application.


// Ex. : 

// console.log("Hello World");

// setTimeout(()=>{
//     console.log("Executed after 3 second.")
// },3000)

// console.log("sum of two number :", 56 + 32);



// What is Callback function : 
// A callback function is a function that is passed as an argument to the another function.
// it is primarily used to handle asynchronous operations and to provide customizable behavior within a function.

function greet(name, callback){
    console.log("Hello ", name);
    callback(name);
}

function sayBye(name, callback){
    console.log("Bye ", name)
    callback(name);
}
function sayCome(name){
    console.log("Please come ", name);
}

greet('Venkatesh',function(name){
    sayBye(name, function(name){
        sayBye(name,function(name){
            sayCome(name)           // this is example of callback hell.
        })
    })
})


// What is callback Hell?
// Callback hell is also known as "Pyramid of Doom ", is a anti-pattern in JavaScript. 
// particularly when dealing with asynchronous operations. it occurs when multiple asynchronous 
// functions nested within each other as callback, leading to deeply indented and difficult-to-read,
// understand, and maintain code.


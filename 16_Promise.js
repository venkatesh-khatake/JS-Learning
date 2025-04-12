// What is Synchronous JS?
// Synchronous JS is a type of JavaScript that executes one line of code at a time, in
// the order it is written. It is called "synchronous" because it waits for each line
// of code to finish executing before moving on to the next line.

// for Example :

// console.log("Venkatesh");
// console.log("Khatake");
// console.log("age 22");

// =====================================================================

// What is Asynchronous JS?
// Asynchronous JS is a type of JavaScript that executes multiple lines of code at the same time,
// without waiting for each line to finish. It is called "asynchronous" because it does not
// wait for each line of code to finish executing before moving on to the next line.

// for Example : 

// console.log("first");
// console.log("second");

// setTimeout(() =>{
//     console.log("third");
// },4000);

// console.log("Fourth");
// console.log("Fifth")

// =============================================================


//Callback : 
//  A Callback is a function that is passed as an argument to another function.
//  It is used to perform a specific task after the main function has completed its execution.
//  Callbacks are often used in asynchronous programming to handle the result of an operation.

// for Example : 

function hallTicket(callback){
    setTimeout(() => {
        console.log("Hall ticket Received Successfully.");
        callback();
    },2000)
}

function exam(callback){
    setTimeout(() =>{
        console.log("Exam Started");
    },400)

    setTimeout(() =>{
        console.log("Exam Finished");
        callback();
    },6000)

}

function result(){
    console.log("Result Declared");
}

hallTicket(()=>{
    exam(() =>{
        result();
    })
})

//===============================================

// callback hell : 
//  Callback hell is a situation where a function calls another function, which in turn calls another function
//  and so on, creating a long chain of callbacks. This can make the code difficult to
//  read and understand.
//  It is also known as the pyramid of doom.
//  To avoid callback hell, we can use Promises or async/await.
//==============================================



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

// function hallTicket(callback){
//     setTimeout(() => {
//         console.log("Hall ticket Received Successfully.");
//         callback();
//     },2000)
// }

// function exam(callback){
//     setTimeout(() =>{
//         console.log("Exam Started");
//     },400)

//     setTimeout(() =>{
//         console.log("Exam Finished");
//         callback();
//     },6000)

// }

// function result(){
//     console.log("Result Declared");
// }

// hallTicket(()=>{
//     exam(() =>{
//         result();
//     })
// })

//===============================================

// callback hell : 
//  Callback hell is a situation where a function calls another function, which in turn calls another function
//  and so on, creating a long chain of callbacks. This can make the code difficult to
//  read and understand.
//  It is also known as the pyramid of doom.
//  To avoid callback hell, we can use Promises or async/await.
//==============================================


// Promise : A Promise is an Object represents  the eventual complition (or failure) of an asynchronous operation
// it allows you to attach handlers(like .then() and .catch()) to handle the result of an 
// asynchronous operation

//  Promise has a Three states : 

// Pending : Pending is the initial state, in this state the promise is still being Processed.
//  Fulfilled : Fulfilled is the state when the promise is resolved and the operation is completed.
//  Rejected : Rejected is the state when the promise is rejected and the operation failed.


// const promiseOne = new Promise (function (resolve, reject){
//     // Do an Async Tasks...
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve();
//     },1000)
// });

// promiseOne.then(function(){
//     console.log("Promise is resolved");
// })

// =============================

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2.")
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Promise 2 is resolved");
// })

// ============================================

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username : "Venkatesh", email :'vpk@gmail.com'})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

// ==================

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username : "Venkey", password : "vpk123"})
//         }
//         else{
//             reject("Error : Something went Wrong.")
//         }
//     },2000)
// })

// promiseFour
// .then((user) =>{
//      console.log(user);
//      return user.username;
// })
// .then((username) =>{
//     console.log(username);
// })
// .catch((error) =>{
//     console.log(error);
// }).finally(() =>{
//     console.log("Promise either resolve or rejected.");
// })

// ===============================================

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username : "JavaScript", password : "vpk123"})
//         }
//         else{
//             reject("Error : JS went Wrong.")
//         }
//     },2000)
// })



// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive;
//         console.log(response)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// consumePromiseFive();


// ===================================

// async function getAllUser(){
//  try{
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//  }catch(error){
//     console.log(error);
//  }
// }
// getAllUser();

// =================================

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json();
// })
// .then((data) =>{
//     console.log(data)
// })
// .catch((error) =>{
//     console.log(error);
// })


// ========================================================

// let promise = new Promise((resolve, reject) =>{
//     let dataLoaded = false;

//     setTimeout(()=>{
//         if(dataLoaded){
//             resolve("Data Loaded Successfully...");
//         }
//         else{
//             reject("Failed to load Data...")
//         }
//     },3000)
// })

// promise
// .then((result) =>{
//     console.log(result);
// })
// .catch((error) =>{
//     console.log(error);
// })

// ===================================

// let checkEvenOdd = (num)=>{
//   return  new Promise((resolve, reject)=>{
//         if(num % 2 === 0){
//             resolve("Number is Even");
//         }
//         else{
//             reject("Number is Odd");
//         }
//     })
// }

// checkEvenOdd(10)
// .then((result)=>{
//     console.log(result);
// })
// .catch((error) =>{
//     console.log("error");
// })


// ===================================

// Task: Create a promise that resolves with "Hello, Promises!" after 2 seconds.

// let greet = function(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             resolve("Hello, Promises!");
//         },2000)
//     })
// }

// greet()
// .then((result) =>{
//     console.log(result);
// })
// =======================================================

// Task: Create a function checkNumber(num) that returns a promise.

//     If num > 10, it should resolve with "Number is big!"

//     Otherwise, reject with "Number is small!"

// let checkNumber = function(num){
//     return new Promise((resolve, reject) =>{
//         if(num > 10){
//             resolve("Number is Big.");
//         }
//         else{
//             reject('Number is small.')
//         }
//     })
// }
// checkNumber(0)
// .then((result) =>{
//     console.log(result);
// })
// .catch((error) =>{
//     console.log(error);
// })


// ===============================================

// let p1 = Promise.resolve("Hello World");
// // p1.then((res)=> console.log(res))

// let p2 = Promise.resolve("Promise is Resolved")
// // p2.catch((err)=> console.log(err));

// Promise.all([p1,p2])
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

// ================================

// let p1 = new Promise((res) => {
//     setTimeout(()=>{
//         res("first");
//     },1000)
// })

// let p2 = new Promise((res)=>{
//     setTimeout(()=>{
//         res("second");
//     },500)
// })

// Promise.race([p1,p2])
// .then((res) =>{
//     console.log(res)
// })



// const p1 = Promise.resolve("Success 1");
// const p2 = Promise.reject("Failed 2");

// Promise.allSettled([p1, p2]).then((results) => {
//   console.log(results);
// });


// const p1 = Promise.reject("Failed 1");
// const p2 = Promise.resolve("Success 2");
// const p3 = Promise.resolve("Success 3");

// Promise.any([p1, p2, p3]).then((result) => {
//   console.log(result); // Output: "Success 2"
// });

// Promise.any([
//     Promise.reject("Error 1"),
//     Promise.reject("Error 2")
//   ]).catch((err) => console.log(err)); 


// You have three promises. Two resolve and one rejects. Use Promise.allSettled() to print the result of each promise.

// const p1 = Promise.resolve("Loaded A");
// const p2 = Promise.reject("Error B");
// const p3 = Promise.resolve("Loaded C");

// Promise.allSettled([p1,p2,p3])
// .then((res) =>{
//     res.forEach((result) =>{
//         console.log(result)
//     })
// })

// Promise.allSettled([p1,p2,p3])
// .then((res)=>{
//     console.log(res)
// })

// =======================================
// You have 3 promises. First two reject and the third one resolves. Use Promise.any() to get the first successful result.
// const p1 = Promise.reject("Not working");
// const p2 = Promise.reject("Still not working");
// const p3 = Promise.resolve("Finally works!");

// Promise.any([p1,p2,p3])
// .then((res)=>{
//     console.log(res);
// })

// ======================================
const p1 = Promise.reject("Fail 1");
const p2 = Promise.reject("Fail 2");
const p3 = Promise.reject("Fail 3");

Promise.any([p1,p2,p3])
.then((res) => console.log(res))
.catch((err) => console.log("All Failed : ",err))
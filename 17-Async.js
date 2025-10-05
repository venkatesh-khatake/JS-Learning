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
// in asynchronous code, a task can be initiated, and while waiting for it to complete,
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

// function greet(name, callback){
//     console.log("Hello ", name);
//     callback(name);
// }

// function sayBye(name, callback){
//     console.log("Bye ", name)
//     callback(name);
// }
// function sayCome(name){
//     console.log("Please come ", name);
// }


// greet('Venkatesh',function(name){
//     sayBye(name, function(name){
//         sayBye(name,function(name){
//             sayCome(name)           // this is example of callback hell.
//         })
//     })
// })


// Goal: Create a function that prints a message after another function runs.

// Steps:

// Write a function sayHello(name, callback)
// → It should print: "Hello, <name>!"

// Then call the callback() function inside it.

// Pass another function that prints "How are you?" as a callback.


// function sayHello(name, callback){
//     console.log(`Hello ${name}`);
//     callback();
// }

// function ask(){
//     console.log("How are you.")
// }


// sayHello('Venkatesh',ask)


    // Task 2: Simulate an Order System (Asynchronous Callback)
    // Goal: Use setTimeout() to simulate delays like in real-world apps.
    // Steps:
    // Create a function placeOrder(order, callback)
    // → It should print "Order placed: <order>" after 2 seconds.
    // After that, run the callback function to print "Order served: <order>".
    // Call the function with "Coffee" as the order.

    // function placeOrder(order,callback){
    //     console.log('placing order...')
    //     setTimeout(()=>{
    //         console.log("order place : ",order);
    //         setTimeout(()=>{
    //             callback(order);
    //         },2000)
    //     },2000)
    // }

    // function served(order){
    //     console.log("order served : ",order)
    // }


    // placeOrder("Coffee",served)




    // Task 3: Callback Chain (Nested Callbacks)
    // Goal: Create a small chain of callbacks to understand “callback hell”.
    // Steps:
    // register(callback) → after 1s print "User registered
    // login(callback) → after 2s print "User logged in"
    // fetchData(callback) → after 1.5s print "User data fetched"
    // Call them in such a way that they happen in sequence using callbacks.


    // function register(callback){
    //     setTimeout(()=>{
    //         console.log("User registered successfully.")
    //         callback();
    //     },1000)
    // }

    // function login(callback){
    //     setTimeout(()=>{
    //         console.log("User logged in Successfully.")
    //         callback();
    //     },2000)
    // }

    // function fetchData(){
    //     console.log("fetching user data...")
    //     setTimeout(()=>{
    //         console.log("User data fetched.")
    //     },1500)
    // }

    // register(()=>{
    //     login(()=>{
    //         fetchData()
    //     })
    // })




    // What is callback Hell?
    // Callback hell is also known as "Pyramid of Doom ", is a anti-pattern in JavaScript. 
    // particularly when dealing with asynchronous operations. it occurs when multiple asynchronous 
    // functions nested within each other as callback, leading to deeply indented and difficult-to-read,
    // understand, and maintain code.




    // What is Promise?
    // A promise is an object , that represents the eventual completion or failure of asynchronous 
    // Operation and its resulting value. 
    // It act as a placeholder for a value that is not yet available but will be at some point in 
    // the future.

    // States of a Promise : 
    // The promise can exists in one of three states : 
    // 1. pending : pending is the initial state of the promise, means the operation not yet completed.
    // 2. fulfilled(resolved) : fulfilled means the operation completed successfully and holds a resulting value.
    // 3. Rejected : Rejected state means . the operation failed, and the promise holds the reason for the failure.

    // What is the use of Promise :
    // The promises are primarily used to manage asynchronous operations, like fetching data from the
    // API, reading files or handling timers, where the result is not immediately available



    // let isLoggedIn = true;

    // let p1 = new Promise((resolve, reject)=>{
    //     if(isLoggedIn == true){
    //         resolve("User successfully logged in.")
    //     }
    //     else{
    //         reject("User can't log in .")
    //     }
    // })

    // p1.then((res)=>{
    //     console.log(res)
    // })
    // .catch((rej)=>{
    //     console.log(rej)
    // })
    // .finally(()=>{
    //     console.log("Hello WOrld");
    // })


    // Handling Promise outcomes :
    // .then() : .then() method is used to register callback function that will be executed when the promise is successfully 
    // fulfilled. it receives the resolved value as an argument.

    // .catch() : .catch() method is used to register callback function that will be executed if the promise is rejected.
    // it receives the reason for the rejection as an argument.

    // .finally() : This method is used to register a callback function that will be executed regardless of whether the promise
    // is fulfilled or rejected. it does not receive any arguments.



    // 💻 Task 1 — Promise Success Handling

// 👉 Create a Promise that resolves after 2 seconds with the message "✅ Data fetched successfully"
// Then, use .then() to print that message on the console.

// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Data fetched Successfully.")
//     },2000)
// })

// promise.then((res)=>{
//     console.log(res)
// })


// Task 2 — Promise Error Handling

// 👉 Create a Promise that rejects after 2 seconds with the message "❌ Failed to fetch data".
// Use .catch() to handle the error and print it.

// let promise2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject('Failed to fetch data.')
//     },2000)
// })

// promise2
// .then((res)=>{
//     console.log(res)
// })
// .catch((rej)=>{
//     console.log(rej)
// })


// Task 3 — Using .finally()

// 👉 Make a Promise that randomly either resolves or rejects (use Math.random()).

// If resolves → print “✅ Success”

// If rejects → print “❌ Error”

// Use .finally() to print “🔚 Process completed”


// let promise3 = new Promise((resolve, reject)=>{
//     let success = Math.random() > 0.5;

//     if(success){
//         resolve(" ✅ Success");
//     }
//     else{
//         reject('❌ Error');
//     }
// })

// promise3
// .then((result)=>{
//     console.log(result)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log(" 🔚 Process Completed")
// })



// function placeOrder(){
    
//     return new Promise((resolve)=>{
//         setTimeout(()=> resolve("Order placed."),2000);
//     })
// }

// function prepareFood(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>        resolve("Food Ready."),3000)
//     })
// }

// function deliverOrder(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>        resolve("Order Delivered."),2000)
//     })
// }


// Promise.all() method : 
// Promise.all() method is used to run multiple promises in parallel, and wait for all of them to complete.
// it resolves when  the promises are resolved, if any one fails, it rejects immediately.



let p1 = new Promise((resolve, reject)=>{
    return resolve("Promise 1 resolved .")
})

let age = 28
let p2 = new Promise((resolve, reject)=>{
    if(age > 18){
        return resolve("Promise 2 resolved.")
    }
    else{
        return reject("Error Occured.")
    }
})

let p3 = new Promise((resolve, reject)=>{
    return resolve("Promise 3 resolved.")
})

Promise.all([p1,p2,p3])
.then((results)=>{
    console.log("Promise.all : ",results)
})
.catch((error)=>{
    console.log("Promise.all : ",error)
})


// Promise.allSettled() method : 
// Promise.allSettled() method takes multiple promises and wait for all of them to complete. 
// whether they succeed or fail.
// and it returns an array of object with status and resulting value of the promise.


Promise.allSettled([p1,p2,p3])
.then((result)=>{
    console.log("Promise.allSettled : ",result);
})
.catch((error)=>{
    console.log("Promise.allSettled : ",error)
})


// Promise.race() method : 
// Promise.race() method returns the first promise that settles, either it is resolved or rejected.

Promise.race([p1,p2,p3])
.then((result)=>{
    console.log("Promise.race : ",result);
})
.catch((error)=>{
    console.log("Promise.race : ",error)
})


// Promise.any() method : 
// Promise.any() method is used to return the first fulfilled promise. ignoring rejections.
// if all promises are rejected, it will throw error.

Promise.any([p2,p1,p3])
.then((result)=>{
    console.log("Promise.any : ",result);
})
.catch((error)=>{
    console.log("Promise.any ",error)
})


// Promise.resolve() / Promise.reject() : 
// These methods are used to create already resolved or rejected promises.

Promise.resolve("Instant success")
.then(result=> console.log(result));

Promise.reject("Instant failure")
.catch(error=> console.log(error));








// placeOrder()
// .then((result)=>{
//     console.log(result);
//     return prepareFood()
// })
// .then((result)=>{
//     console.log(result);
//     return deliverOrder();
// })
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("Thank you for ordering.")
// })


// async function processOrder(){
//     try{
//         const order = await placeOrder();
//     console.log(order);

//     const food = await prepareFood();
//     console.log(food);

//     const delivery = await deliverOrder();
//     console.log(delivery)
//     }
//     catch(error){
//         console.log("Error :", error);
//     }
//     finally{
//         console.log("Thank you for ordering.")
//     }
// }

// processOrder()
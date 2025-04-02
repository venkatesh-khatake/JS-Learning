// let myPromise = new Promise((resolve, reject) =>{
//     let success = false;
// setTimeout(() =>{
//     if(success){
//         resolve("promise resolved");
//     }else{
//         reject("promise rejected");
//     }
// },5000)
// })

// myPromise.then((result) => console.log(result))
// .catch((error) =>console.log(error))
// .finally(() => console.log("Promise execution completed."))


// new Promise((resolve, reject) => {
//     setTimeout(() => resolve(10), 1000);
// })
//     .then((num) => {
//         console.log(num);
//         return num * 2;
//     })
//     .then((num) => {
//         console.log(num);
//         return num * 2;
//     })
//     .then((num) => console.log(num)); 


// console.log("One");
// console.log("two");

// setTimeout(()=>{
//     console.log("Hello");
// },4000);

// console.log("Three");
// console.log("Four")


function sum(a,b){
    console.log(a + b);
}

function calc(a,b, callback){
    callback(a,b);
}

calc(4,5, sum)

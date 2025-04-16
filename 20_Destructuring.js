// // What is Destructuring?
// // Destructuring is a shortcut to extract values from arrays or objects
// // and store them in variables.

// // for Ex.:

// // Array Destructuring : 

// let arr = [1,2,3,4,5,6,7,8]
// let [a,b,c,d,...ele] = arr;
// console.log(a,b,c,d,ele);

// // Object Destructuring :

// let obj = {
//     name : "Venkey",
//     age : 25,
//     city : "Chennai",
//     country : "India"
// }
// let {name, age, city, country } = obj;

// // console.log(name)




// // Spread Operator : 
// // The spread operator is a syntax that allows an iterable (like an array or a string) to
// // be expanded in places where zero or more arguments are expected.
// // It is denoted by three dots (...) and is used to unpack the elements of an array or
// // string into a new array or string.
// // For example:
// // let arr1 = [1, 2, 3];
// // let arr2 = [...arr1, 4, 5, 6];
// // console.log(arr2); // Output: [1, 2, 3, 4
// // 5, 6]
// // let str1 = "Hello";
// // let str2 = [...str1, " ", "World"];
// // console.log(str2); // Output: "Hello World"
// // let arr = [1, 2, 3, 4, 5,
// // 6, 7, 8];
// // let [a, b, c, d, e, ...rest] = arr;
// // console.log(rest); // Output: [6, 7, 8]
// // let obj1 = {
// //     name: "John",
// //     age: 30
// // };
// // let obj2 = {
// //     ...obj1,
// //     city: "New York"
// // };
// // console.log(obj2); // Output: {name: "John", age: 30,
// // city: "New York"}
// // let arr = [1, 2, 3, 4, 5,
// // 6, 7, 8];
// // let [a, b, c, d, e, ...rest] = arr;
// // console.log(a,b,c,d,e,rest);
// // let arr = [1, 2, 3, 4, 5,
// // 6, 7, 8];
// // let [a, b, c, d, e, ...rest] = arr;
// // ==========================================

// // Exercise 1: Use Spread to Merge Arrays

// let arr1 = [1,2,3];
// let arr2 = [4,5];
// const merged = [...arr1, ...arr2]
// console.log(merged);



// // 🧠 Exercise 2: Clone an Object using Spread

// const person = {
//     name: "Venkatesh",
//     age : 22
// };
// const clonedPerson = {...person};
// console.log(clonedPerson)



// // 🧠 Exercise 3: Use Rest in Function Parameters

function multiplyAll(...nums){
  return nums.reduce((acc,curr) => acc * curr,1)
}
console.log("total : ",multiplyAll(1,2,3,4,5,6))



// //  Exercise 4: Use Rest in Array Destructuring

// const nums = [10, 20, 30, 40, 50];
// const [x,y,...rest] = nums;

// console.log(x,y,rest); // Output: 10 20 [30, 40,


// 🧠 Exercise 5: Rest in Object Destructuring
//  const student = {
//   name: "Tejas",
//   roll: 25,
//   city: "Pune"
// };

// const{name, ...others} = student
// console.log(name, others)

// 

const fruits = ["apple", "banana", "mango", "grape"];
let [a,,b] = fruits;
console.log(a,b)

const laptop = { brand: "HP", ram: "16GB", price: 55000 };
const {ram,price} = laptop;
console.log(ram,price)


const profile = {
    username: "venky",
    location: {
      city: "Pune",
      pin: 411001
    }
  };

  const {
    location:{city, pin}
  } = profile;

  console.log(city, pin)
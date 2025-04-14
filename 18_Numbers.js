// number : 
// number is a primitive data type used to store integer and decimal points.

// let num = 34
// console.log(typeof(num))

// let num2 = 457.585697;
// console.log(num2.toFixed(3))

let num = '4578';
let num2 = parseInt(num);

console.log(typeof(num));
console.log(typeof(num2))

// 7. Generate a random number between 1 to 100

let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum)

// Find the square root of a number using Math object

// console.log(Math.sqrt(randomNum))


let arr = [43,56,87,90,21,43,889];
console.log(Math.max(...arr))

// 10. Convert "100" to number and add 20

let result = Number("100")+20;
console.log(result);

console.log(isNaN("abc"))

console.log(parseInt("42.85"))

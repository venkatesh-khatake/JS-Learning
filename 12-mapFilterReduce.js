// map(), filter() and reduce() are the method of Array Object.

// 1. map() : 
//  map() method creates a new array by applying a function to each element
// of the original array.
// map() method is used when we want to transform each element of the array.
// eg : 

let arr = [1,2,3,4,5,6];

let doubled = arr.map((n)=>{
    return n * 2;
})
console.log(doubled)

// 2.filter() method : 
// filter() method creates a new array containing only the element that
// pass a given condition.
// filter() method is used when we want to select some element based on a condition.


let evenNum = arr.filter(n => n % 2 == 0);
console.log(evenNum)

// 3. reduce() method : 
// the reduce() method reduces an array to a single value by applying a function called reducer 
// to each element, accumulating a result.
// basically , it is used to combine all element in a single result.

let sumOfArr = arr.reduce((acc, num)=> acc + num);
console.log(sumOfArr)

const max = arr.reduce((acc, num)=>(num > acc ? num : acc),arr[0]);
console.log(max)


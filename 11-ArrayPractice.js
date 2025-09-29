// Given an array arr[], the task is to print every alternate element 
// of the array starting from the first element.

function printAlternate(arr){
    let res = [];

    for(let i = 0; i< arr.length; i += 2){
        res.push(arr[i])
    }
    return res;
}

let arr = [10,20,300, 40, 50, 60];

console.log(printAlternate(arr));


// Given an array, arr[] of n integers, and an integer element x,
//  find whether element x is present in the array.

for(let i = 0; i< arr.length; i++){
    if(arr[i] == 40){
        console.log(arr[i] +" is at index "+ i);
        break;
    }
}

let large = arr[0];

for(let i = 0; i< arr.length; i++){
    if(arr[i] > large){
        large = arr[i];
    }
}

console.log(large)



// Array Searching Method : 
// 1. indexOf() method : 
// indexOf() method is used to find the index of a specific element.

console.log(arr.indexOf(50));

// 2. lastIndexOf() method : 
// lastIndexOf() method is used to find the last occurance of specified value,
// and returns the index of that number, if not found it will return -1.
console.log(arr.lastIndexOf(50))

// 3. includes() method : 
// includes() method is used to find the specified element is 
// present or not in an array, and returns a boolean value.

console.log(arr.includes(120)); // false


// Sorting and Reversing

// 1. sort() method :
// Sort() method sorts array alphabetically

let fruits = ["Mango", "Banana", "Grapes", "Apples"];
console.log(fruits.sort())
console.log(fruits)

let newArr = [102,43,13,65,708,98,24];
console.log(newArr.sort((a,b)=> a - b)) // for ascending Order
console.log(newArr.sort((a,b)=>b - a))  // for descending order
console.log(newArr)


// 2. reverse() method : 
// reverse() method is used to reverse the elements of array

console.log(fruits.reverse())
console.log(fruits);

// Extracting 

// 1. slice() method : 
// slice method is use to copy some portion of array.
// syntax : arr.slice(start, end);

let copy = newArr.slice(1,4);
console.log(copy)
console.log(newArr)

// 2. splice() method : 
// splice() method is used to add or remove elements from the array
// syntax : arr.splice(start, deleteCount, ...addItems);

newArr.splice(1,3, 34,65,78);
console.log(newArr)

// other Methods 

// 1. join() method : 
// join() method is used to concatenate all the elements of an array into a single string.
// it returns a new String and does not modify original array.

let str = newArr.join('-');
console.log(str);

//2. flat() method : 
// flat() method is used to flatten nested array. 

let myArr = [1,2,3,4,[54,87,9]];
console.log("Before using flat() method : ",myArr);
console.log("After using flat() method : ",myArr.flat())

// 3. some() method : 
// some() method in JavaScript is an array method that test whether at least one element
// in the array satisfies a provided testing function. and returns boolean value

const hasEven = myArr.some(function(num){
    return num % 2 == 0
})

console.log(hasEven)


// 4. every() method : 
// in Js , every() method test whether all element in an array pass a provided condition.

const allEven = myArr.every((n) => n % 2 ==0);
console.log(allEven)
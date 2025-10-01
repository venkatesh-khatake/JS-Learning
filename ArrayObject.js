// 🔹 Array Tasks

// Write a function that takes an array of numbers and returns the maximum number.

function findMax([...arr]){
    return Math.max(...arr);
}
console.log(findMax([2,4,3,6,87,90,34,76]));

// Write a function that removes duplicate values from an array.

let arr = [1,2,3,5,3,7,2,9,5];

// function removeDuplicate(arr){
//     return arr.filter((val, index)=> arr.indexOf(val) === index);
// }

// console.log(removeDuplicate(arr))
// console.log(arr)

// function removeDuplicate(arr){
//     let unique = [...new Set(arr)];
//     arr.length = 0;
//     arr.push(...unique);
// }

// removeDuplicate(arr);
// console.log(arr)


function removeDup(arr){
    for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j <arr.length; j++){
       if(arr[i] === arr[j]){
        arr.splice(j,1)
        j--;
       }
    }
}
}
removeDup(arr)
console.log(arr)

// Given an array of strings, return only the strings that have length > 5.

let fruits = ["Apple","Banana", "PineApple", "SugarCane","Mango"];

let newFruits = fruits.filter((val)=> val.length > 5);
console.log(newFruits)

// Write a function to reverse an array without using .reverse().

function reverseArr(arr){
    let newArr = [...arr]
    arr.length = 0;
    for(let i = newArr.length - 1; i >=  0; i--){
        arr.push(newArr[i])
    }
    return arr;
}
reverseArr(fruits)
console.log(fruits)

// Given an array of numbers, return a new array with only even numbers.

let evenNum = arr.filter((num)=> num % 2 === 0 );
console.log(evenNum)





// Object Tasks

// Create an object person with name, age, and city. Print all keys and values separately.

let person = {
    name : "Venkatesh",
    age : 23,
    city : "Pune"
}

console.log(Object.keys(person));
console.log(Object.values(person));

// Write a function that counts the number of properties in an object.

function countProp(obj){
    let count = 0;

    for(let key in obj){
        count++
    }
    return count;
}

console.log(countProp(person));

// Merge two objects, but if they have the same key, keep the value from the second object.

let user = {
    name : "Raj",
    id : 123,
    pass : "abc123"
}

person = Object.assign({},person,user);
console.log(person)


// Write a function that checks if a given property exists in an object or not.

function checkProperty(obj){
    return obj.hasOwnProperty('name');
}

console.log(checkProperty(person))


// Given an object of student marks {math: 80, eng: 70, sci: 90}, calculate the average marks.

let marks ={
    math: 80,
     eng: 70,
      sci: 90
}

let count = Object.keys(marks).length;

let sum = 0;
for(let key in marks){
    sum += marks[key];
}
console.log(sum)
let avg = sum / count;

console.log("The Average of Marks : ", avg)
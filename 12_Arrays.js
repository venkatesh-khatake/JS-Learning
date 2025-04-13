// // Array : 
// //      An Array is a data structure that allows us 
// //      to store multiple values in a single variable.
// //      It is a collection of elements that can be of any data type, including strings, integers
// //      and floats.
// //      Arrays are denoted by square brackets [] and elements are separated by commas.
// //      Arrays are mutable, meaning they can be changed after they are created.
// //      Arrays are zero-indexed, meaning the first element is at index 0.
// //      Arrays are dynamic, meaning they can grow or shrink in size as elements are added or removed
// //      Arrays are useful for storing and manipulating large amounts of data.

// // There are two different way to create array : 

// // 1. create Array using literal : 
// //      let arr = [1, 2, 3, 4, 5];

// // 2. create Array using new Keyword(constructor):
// //      let arr = new Array(1, 2, 3, 4);

// let arr = [1,2,4,5,6,7,8,9];

// // Array Methods : 

// // 1. push : 
// //      The push() method adds one or more elements to the end of an array and returns the
// //      new length of the array.
// //      Syntax : arr.push(element1, element2, element3, ...)
//      Example : arr.push(10, 20, 30);
//      console.log(arr);

// // 2. pop():
// //      The pop() method removes the last element from an array and returns the removed element.
// //      Syntax : arr.pop()
// Example : arr.pop();
// console.log(arr);

// // 3. shift():
// //      The shift() method removes the first element from an array and returns the removed element.
// //      Syntax : arr.shift()
// Example : arr.shift();

// // 4. unshift:
// //      The unshift() method adds one or more elements to the beginning of an array and returns
// //      the new length of the array.
// //      Syntax : arr.unshift(element1, element2, element3, ...)
// Example : arr.unshift(0, -1);


// 5. map:
//      The map() method creates a new array with the results of applying a provided function on every
//      element in this array.
//      Syntax : arr.map(callback(currentValue, index, array), thisValue)
//      Example : arr.map(function(x) {
//          return x * 2;
//      });

// let newArr = arr.map(function(x){
//     return x * 2;
// })
// console.log(newArr)

// // 6. filter() : 
// //      The filter() method creates a new array with all elements that pass the test implemented by a
// //      provided function.
// //      Syntax : arr.filter(callback(element, index, array), thisValue)
// //      Example : arr.filter(function(x) {
// //          return x % 2 === 0;
// //      });
// let newArr2 = arr.filter(function(x){
//     return x % 2 === 0;
//     })
//     console.log(newArr2)


// 7. reduce() : 
//      The reduce() method applies a function against an accumulator and each element in the array
//      (from left to right) to reduce it to a single value.
//      Syntax : arr.reduce(callback(accumulator, currentValue, index, array), initialValue)
//      Example : arr.reduce(function(accumulator, currentValue) {
//          return accumulator + currentValue;
//      }, 0);
// let sum = arr.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
//     }, 0);
//     console.log(sum)

// // 8. slice() : 
// //      The slice() method returns the selected elements in an array, as a new array object.
// //      Syntax : arr.slice(start, end)
// //      Example : arr.slice(1, 3);
// let newArr3 = arr.slice(1, 3);
// console.log(newArr3)

// // 9. splice():
// //      The splice() method adds or removes elements from an array.
// //      Syntax : arr.splice(index, howmany, item1, item2, itemN)
// //      Example : arr.splice(2, 0, 'apple');
// let newArr4 = arr.splice(2, 0, 'apple');
// console.log(newArr4)



// =====================================================================================


// Create an array of 5 numbers and print all using for loop.

// let arr = [1,2,3,4,5];

// for(let i = 0; i <= arr.length; i++){
//     console.log(arr[i]);
// }

// // Add a number to the end of array using push().
// arr.push(45);
// console.log(arr);

// // Remove the last element using pop().
// arr.pop()
// console.log(arr);


// // Check if "mango" exists in the array using includes().
// console.log(arr.includes('mango'));


// // Use map() to double all elements of [1, 2, 3] → [2, 4, 6]
// let newArr = arr.map((ele)=>{
//     return ele * 2
// });
// console.log("new Arr :",newArr)

// // Use filter() to return only even numbers.
// let filterArr = arr.filter((ele) =>{
//     return ele % 2 == 0;
// })

// console.log("Filter Array " ,filterArr)



// // Use reduce() to find sum of all elements.

// let sumOfArray = arr.reduce((acc, currentValue) =>{
//     return acc + currentValue;
// })
// console.log("sum of Array :",sumOfArray)


// let fruits = ['mango', 'banana', 'apple', 'papaya'];

// // slice(start, ende) : slice method is used to return a portion of array

// console.log(fruits.slice(1,3))

// // splice(start, deleteCount, ...items) : it is used to add and remove items in the array(modifies original array);

// console.log(fruits.splice(1,2, "Kiwi"))
// console.log(fruits)

// let nums = [45,85,24,65,12,10,102];
// // sort() : sort method is used to sort the array in ascending order.
// // sort() : sort method is used to sort the array in ascending order.
// console.log(nums.sort((a,b) => a - b))

// console.log(nums.reverse())


// // 🔧 Exercises (Try and send your code):

// //     Slice the array [10, 20, 30, 40, 50] from index 1 to 4.

// console.log(nums.slice(1,4));

// //     Use splice() to insert "grapes" at index 2 in ["apple", "banana", "mango"].
// console.log(fruits.splice(2,0,"grapes"))
// console.log(fruits)

// //     Sort [55, 11, 4, 98, 23] in ascending order using sort().

// console.log(nums.sort((a, b) => a - b))
// //     Reverse the array [1, 2, 3, 4].

// console.log(nums.reverse())
// //     Bonus: Make a function findMax(arr) that returns the max value using reduce().


let arr = [45,25,14,78,96,34,76];

function findMax(){
    let max = arr[0];
for(let i = 1; i < arr.length; i++){

    if(arr[i] >= max){
        max = arr[i];
    }
}
return max;
}
console.log(findMax())
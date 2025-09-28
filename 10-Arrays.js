// What is Array?
// An array is an ordered list of value, means we can store multiple values
// in a single variable , and we can access that values by referring index number.

// syntax :

let arr = [1,2,3,4,5,6]
console.log(arr)

// Basics Operation on JavaScript Arrays : 

// 1. Accessing Elements of an Array : 
// Any element in the array can be accessed using the index number, The index in the array starts with 0;

console.log(arr[3]);

// 2. Modifying the Array Elements:
// Elements in an array can be modified by assigning a new value to their corresponding index.

arr[2] = 45;
console.log(arr)

// 3. Adding new element to end of the array : 
// We can add new element to the end of the array by using push() method.

arr.push(100);
console.log(arr);

// 4. Adding new element to the start of the array : 
// unshift() method is used to add element at starting of the array.

arr.unshift(101);
console.log(arr);

// 5. Remove last element of the array : 
// pop() method is used to remove last element of the array.

arr.pop();


// 6. Remove first element of the array : 
// shift() method can be used to remove first element of the array

arr.shift();

// 7. Remove or replace element of the array : 
// splice() method removes or replaces the element from the array.

arr.splice(1,3);   // arr.splice(from index 1, remove 3 elements), means it will remove index,1,2,3
console.log(arr)

// 8. Array length : 
// We can get the length of the array by using the arr.length property

console.log(arr.length);

// 9. Increase and decrease the array length;
// we can also increase or decrease array length by using arr.length property.
arr.length = 8;
console.log(arr.length);
arr.length = 2;
console.log(arr.length)
console.log(arr)
arr.length = 3;
console.log(arr)

// 10. Array Concatenation  : 
// we can combine 2 or more array by using concat() method ,
//  it returns a new array containing joined array elements.

let lang = ['html', 'css','JavaScript']
let frame = ['bootstrap', 'react'];

let combine = lang.concat(frame)
console.log(combine)

// 11. Conversion of an array to string : 
// We have built-in method toString() to converts an array to string.

console.log(lang.toString())

// 12. Check the type of array : 
// The js typeof operator is used to check the type of an array. it returns "object" for an array.

console.log(typeof(lang));


// 13. Recognizing a JS Array : 
// There are two method by which can recognize a JavaScript array.
let lag = 10
console.log(Array.isArray(lang)); // true
console.log(lag instanceof Array) // false



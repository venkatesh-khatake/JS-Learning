// Array : 
//      An Array is a data structure that allows us 
//      to store multiple values in a single variable.
//      It is a collection of elements that can be of any data type, including strings, integers
//      and floats.
//      Arrays are denoted by square brackets [] and elements are separated by commas.
//      Arrays are mutable, meaning they can be changed after they are created.
//      Arrays are zero-indexed, meaning the first element is at index 0.
//      Arrays are dynamic, meaning they can grow or shrink in size as elements are added or removed
//      Arrays are useful for storing and manipulating large amounts of data.

// There are two different way to create array : 

// 1. create Array using literal : 
//      let arr = [1, 2, 3, 4, 5];

// 2. create Array using new Keyword(constructor):
//      let arr = new Array(1, 2, 3, 4);

let arr = [1,2,4,5,6,7,8,9];

// Array Methods : 

// 1. push : 
//      The push() method adds one or more elements to the end of an array and returns the
//      new length of the array.
//      Syntax : arr.push(element1, element2, element3, ...)
     Example : arr.push(10, 20, 30);
     console.log(arr);

// 2. pop():
//      The pop() method removes the last element from an array and returns the removed element.
//      Syntax : arr.pop()
Example : arr.pop();
console.log(arr);

// 3. shift():
//      The shift() method removes the first element from an array and returns the removed element.
//      Syntax : arr.shift()
Example : arr.shift();

// 4. unshift:
//      The unshift() method adds one or more elements to the beginning of an array and returns
//      the new length of the array.
//      Syntax : arr.unshift(element1, element2, element3, ...)
Example : arr.unshift(0, -1);


// 5. map:
//      The map() method creates a new array with the results of applying a provided function on every
//      element in this array.
//      Syntax : arr.map(callback(currentValue, index, array), thisValue)
//      Example : arr.map(function(x) {
//          return x * 2;
//      });

let newArr = arr.map(function(x){
    return x * 2;
})
console.log(newArr)

// 6. filter() : 
//      The filter() method creates a new array with all elements that pass the test implemented by a
//      provided function.
//      Syntax : arr.filter(callback(element, index, array), thisValue)
//      Example : arr.filter(function(x) {
//          return x % 2 === 0;
//      });
let newArr2 = arr.filter(function(x){
    return x % 2 === 0;
    })
    console.log(newArr2)


// 7. reduce() : 
//      The reduce() method applies a function against an accumulator and each element in the array
//      (from left to right) to reduce it to a single value.
//      Syntax : arr.reduce(callback(accumulator, currentValue, index, array), initialValue)
//      Example : arr.reduce(function(accumulator, currentValue) {
//          return accumulator + currentValue;
//      }, 0);
let sum = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
    }, 0);
    console.log(sum)

// 8. slice() : 
//      The slice() method returns the selected elements in an array, as a new array object.
//      Syntax : arr.slice(start, end)
//      Example : arr.slice(1, 3);
let newArr3 = arr.slice(1, 3);
console.log(newArr3)

// 9. splice():
//      The splice() method adds or removes elements from an array.
//      Syntax : arr.splice(index, howmany, item1, item2, itemN)
//      Example : arr.splice(2, 0, 'apple');
let newArr4 = arr.splice(2, 0, 'apple');
console.log(newArr4)

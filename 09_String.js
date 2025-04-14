// // String : 
// //      String is a sequence of characters, typically used to represent the text.

// // for Example : 

// let firstName = "Venkatesh";
// console.log(firstName)

// // or 

// let lastName = new String('KHATAKE');
// console.log(lastName);

// // There are various types of String methods used to operation on String:

// // 1. toUpperCase() : 
// //      This method is used to convert text into uppercase.
// //      Syntax : string.toUpperCase()
// //      Example :
// console.log(firstName.toUpperCase())

// // 2. toLowerCase() : 
// //      This method is used to convert text into lowercase.
// //      Syntax : string.toLowerCase()
// //      Example :
// console.log(lastName.toLowerCase())

// // 3. split() : 
// //      This method is used to split a string into an array where each word is an array item
// //      Syntax : string.split(separator)
// //      Example :
// // let str = "Hello, how are you doing today?"
// // console.log(str.split(" "));

// // 4. trim() : 
// //      This method is used to remove the whitespace from the string.
// //      Syntax : string.trim()
// //      Example :
// let str = "   Hello, how are you doing today?   "
// console.log(str);
// console.log(str.trim())

// //5. substring() :
// //      This method is used to return a subset of a string.
// //      Syntax : string.substring(start, end)
// //      Example :
// console.log(str.substring(10, 21))

// // etc......................................



// let name = "Venkatesh";

// // console.log(name.length);


// console.log(name.includes('enk'))

// console.log(name.slice(0,5))
// console.log(name.replace('atesh', 'ey'));

// let str = "Hello My Name is Venkatesh";

// console.log(str.split(",").length)

// ==============================================

// Write a function to check if a string contains the word "hello"
let str = "Hello My      name is Venkatesh";

function containsHello(str){
    let newStr = str.toLowerCase();
    return newStr.includes("hello");
}
// console.log(containsHello(str))

console.log(str.toUpperCase())

console.log(str.trim())

console.log(Number("42.58"))
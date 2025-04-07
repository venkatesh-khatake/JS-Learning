// String : 
//      String is a sequence of characters, typically used to represent the text.

// for Example : 

let firstName = "Venkatesh";
console.log(firstName)

// or 

let lastName = new String('KHATAKE');
console.log(lastName);

// There are various types of String methods used to operation on String:

// 1. toUpperCase() : 
//      This method is used to convert text into uppercase.
//      Syntax : string.toUpperCase()
//      Example :
console.log(firstName.toUpperCase())

// 2. toLowerCase() : 
//      This method is used to convert text into lowercase.
//      Syntax : string.toLowerCase()
//      Example :
console.log(lastName.toLowerCase())

// 3. split() : 
//      This method is used to split a string into an array where each word is an array item
//      Syntax : string.split(separator)
//      Example :
// let str = "Hello, how are you doing today?"
// console.log(str.split(" "));

// 4. trim() : 
//      This method is used to remove the whitespace from the string.
//      Syntax : string.trim()
//      Example :
let str = "   Hello, how are you doing today?   "
console.log(str);
console.log(str.trim())

//5. substring() :
//      This method is used to return a subset of a string.
//      Syntax : string.substring(start, end)
//      Example :
console.log(str.substring(10, 21))

// etc......................................


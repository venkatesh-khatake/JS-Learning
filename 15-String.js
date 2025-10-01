// What is String : 
// A JavaScript String is a sequence of character, typically used to represent text.

// There are 2 way to create a string : 

// 1. String literal : 
// we can eighter use single or double quotes to create a string.
// eg  :
    let name = 'venkatesh';
    let lName = "khatake";
    console.log(name + " " + lName)
    console.log(typeof(name))


// 2. Using constructor : 
// The new String() constructor creates a string object instead of a primitive string.

let role = new String("Frontend Developer");
console.log(role)
console.log(typeof(role))

// Multiline String : 
// We can create multiline string using backticks (`  `) with template literals.

let para = `This is 
    a multiline
        String
`;

console.log(para)


// Basic Operations on JavaScript Strings

// 1. Finding the length of String : 
// we can find the length of string using 'length' property.

console.log(name.length)

// 2. String Concatenation : 
// We can combine two or more string using + operator.

let fullName = name + " "+ lName;
console.log("Full Name : "+fullName);

// 3. Find subString of String : 
//We can extract a portion of a string using subString() method.

let s1 = "JavaScript Tutorial";
let s2 = s1.substring(0, 10)   // .subString(start index, end index)
console.log("SubString : "+s2)


// Convert a String to UpperCase or lowerCase:
// We can convert a string to upper or lower case using toUpperCase() or toLowerCase() methods.

console.log("UpperCase : "+name.toUpperCase())
console.log("lowerCase : "+name.toLowerCase())

// 5. String Search  : 
// We can find the first index of substring within a string using 'indexOf()' method.
// if not found it will return -1.

console.log(name.indexOf('kate'))

// 6. String replace in JS : 
// we can replace a portion of string using replace() method.
let name2 = name.replace('atesh',"ey");
console.log(name2)

// 7. Trimming whiteSpace from string : 
// trim() method is used to remove extra white spaces from the string .

// let str = "    Venkatesh       "
// console.log(str)
// let str2 = str.trim();
// console.log(str2)


// 8. Accessing characters from String : 
// charAt() method is used to find the character placed on specific index

console.log(name.charAt(5));

//9. String comparison in JS : 
// .localeCompare() method is used to compare String lexicographically.
// 0 : true
// -1 : false;

let course = 'javaScript';
let course2 = "javaScript"
console.log(course.localeCompare(course2))

console.log(course.split("").reverse().join(""))
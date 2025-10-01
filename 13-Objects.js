// Objects ; 
// An object is a non-primitive data type used to store collection of data
// and more complex entities. it represents a dynamic data structure that groups
// related data as key-value pairs.

// Syntax : 

// Object Literal
let obj = {
    name : "Venkatesh",
    age : 22,
    isStudent : false,
}

// new Object() constructor

let obj2 = new Object();
obj2.name = "Venkey";
console.log(obj2['name'])

// Accessing Properties : 

// 1. Using (dot) notation.
console.log(obj.name)

// 2. Using bracket notation ; 
console.log(obj['age'])

// Modifying Object Properties : 

obj.name = "Rohit" // the value of name property updated.
console.log(obj.name)


//  Adding new Properties to an object : 

// obj.experience = "fresher"
//  or
obj["experience"] = 'fresher'
console.log(obj)

// Removing properties from an object : 
// delete operator is used to remove properties from an object.

delete obj.experience;
console.log(obj)

// Checking if a property exists. : 
// There are two way to check if the property is exists or not in an object
// 1. using 'in' operator : 
console.log("name property exist or not : ",'name' in obj);

//  or 

// 2. using 'hasOwnProperty()' method : 
console.log("Age property exist or not : ",obj.hasOwnProperty('location'));

// Iterating Through object Properties : 
// for-in loop can be used to iterate through the properties of an object.

for(let key in obj){
    console.log(key + " - "+obj[key]);
}


// Merging Object : 
// Object can be merge by using Object.assign() method or the spread operator.

merged= Object.assign({},obj, obj2)
console.log(merged)
obj = {...obj,...obj2}

console.log(obj)

// Object length : 
// You can find the number of properties in an object using 'Object.keys()

console.log(Object.keys(obj).length)


// Object.keys() method : 
// Object.keys() method is used to get a object keys.
console.log(Object.keys(obj))

// Object.values() method : 
// Object.values() method is used to get the values of the properties in an object.
console.log(Object.values(obj));

// Object.entries() method : 
// Object.entries() method returns an array of [key,value] key-value pairs.
console.log(Object.entries(obj));

let objArr = Object.entries(obj);
console.log(objArr)

// Object.fromEntries() method : 
// Object.fromEntries() method is used to convert an array of key-value part into normal object.
let objArr2 = Object.fromEntries(objArr);
console.log(objArr2)

console.log(objArr.toString())


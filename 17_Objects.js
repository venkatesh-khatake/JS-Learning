// What is Object?
// An object is a non-primitive data types that allows us to store multiple values in the form of key-value pairs.

// syntax:
// let objectName = {
//   key1: value1,
//   key2: value2,
//   key3: value3
// }

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

// 1. Print car brand
console.log(car.brand)

// 2. Add a new property color = "Red"
car.color = "Red";
// 3. Update year to 2023
car.year = 2023;
// 4. Loop and print all key-value pairs
for(key in car){
    console.log(key + " : "+ car[key])
}


let student = {
    name: "Rohit",
    rollNo: 21,
    showDetails: function(){
        return `Name: ${this.name}, Roll No: ${this.rollNo}`;
    }
};

console.log(student.showDetails());

student.changeName = function(newName){
    this.name = newName;
}
student.changeName("Venkatesh");


console.log(student.name)

// Array of Objects : 
// It's an Array where each element is an object , it's very useful
// real-world data (like API Responses, Employee records, product lists, etc.)

let users = [
    { name: "Venkatesh", age: 22 },
    { name: "Ravi", age: 25 },
    { name: "Priya", age: 20 }
];

users.forEach((user) =>{
    console.log(user.name + " is "+ user.age + " years old.")


})

let products = [
    { id: 1, name: "Laptop", price: 45000 },
    { id: 2, name: "Phone", price: 25000 },
    { id: 3, name: "Watch", price: 5000 }
];

// 1. Print name and price of all products
let count = 1;
products.forEach((product) =>{
    console.log(`Product ${count} : Name : ${product.name} :: Price : ${product.price}`)
    count++;
})

products.filter((product) =>{
    if(product.price > 10000){
        console.log(`Name : ${product.name} & Price ${product.price}`)
    }
})


let totalPrice = products.reduce((acc, product) =>{
    return acc + product.price;
},0)
console.log(totalPrice)
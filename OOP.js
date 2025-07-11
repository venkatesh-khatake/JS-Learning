// What is OOP : 
// OOP(Object Oriented Programming) is a style to write a code where
// object is used to store data and function together.
// it was developed to make code flexible and easier to maintain.



// What is Class:
// Class is a template for creating objects, it allows you to define
// properties and methods in one place, and then create multiple 
// objects based on that class.


// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         console.log(`Hello, my name is ${this.name}, i'm ${this.age} years old`);
//     }
// }

// const person1 = new Person("Venkatesh", 22);
// person1.greet();

// const personArr = [];

// personArr.push(person1);
// console.log(personArr)

// What is Object : 
// An object is a non-primitive data type, that allows you to 
// store multiple values in the form of key-value pairs.



// what is Constructor :
// A constructor is a special method inside the class that is 
// automatically called when a new object is created from the class,
// using 'new' keyword.
// it is used to initialize the objects properties.



// Create a class Student with the following:

//     A constructor that takes name and rollNo

//     A method display() that prints Name: ___, Roll No: ___

// Then, create an object of Student and call the method.

// class Student{
//     constructor(name, rollNo){
//         this.name = name;
//         this.rollNo = rollNo
//     }

//      display(){
//         console.log(`Name : ${this.name}, Roll No. : ${this.rollNo} `);
//      }
// }

// const student1 = new Student('Venkey', 102);

// student1.display()


// Inheritance :
// Inheritance allows a class to inherit properties and methods from 
// another class, we use 'extends' keyword to inherit class and
// 'super()' to call the parent class's constructor.


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    showDetails(){
        console.log("My name is Venkey")
    }
}



class Student extends Person{
    constructor(name,age, rollNo){
        super(name, age)
        this.rollNo = rollNo;
    }

    studentInfo(){
        console.log(`Student Name : ${this.name}, Age : ${this.age}, Roll NO. : ${this.rollNo}`)
        super.showDetails();
    }
}

const student1 = new Student('venkatesh', 22, 102)
student1.studentInfo();
console.log(student1 instanceof Person)
console.log(student1.constructor);

// instanceof :
// instanceof operator is used to check the type of an object
// at run time. it returns the boolean value if true then it 
// indicates that the object is an instance of a particular 
// class and if false it is not.


console.log(student1 instanceof Person)
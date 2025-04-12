// Classes : 
// Classes are a way to create objects and reuse code. 
// They are blueprint or template for creating objects with properties and methods
// Classes are defined using the class keyword followed by the name of the class.
// classes where introduced in ES6 and provide a cleaner, more familiar syntax for creating
// constructor functions and handling inheritance.



class Human{
    //properties

    age = 22;
    wt  = 65; // public 
    #ht = 165; // private 

    //methods

    walking(){
        console.log("I am Walking");
    }

    running(){
        console.log("I am Running");
    }
    
    abc(wt,ht){
        
        console.log(`my age is ${this.age}, height is ${this.ht} and weight is ${this.wt}`);
    }

}
let obj = new Human();
console.log(obj.age);

obj.abc();
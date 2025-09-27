// What is Data types : 
// A data type that defines the type of value a variable can hold, 
// and what kind of operation can be performed on it.

// Data types can be categorized into two groups : 
// 1. Primitive Data types : 
//  Primitive data types are the most basic, fundamental , built-in data type, which stores
//  single value. 

// 1. String : String stores a sequence of characters
// eg. : 
    let str = "Venkatesh";
    console.log("String "+ str);
    console.log(typeof(str))

// 2. Number : Number stores numeric values : 
// eg : 
        let num = 22;
        console.log("Number : "+num);
        console.log(typeof(num));

// 3. boolean : boolean can stores true or false value : 
// eg : 
    let bool = true;
    console.log("Boolean : ",bool);
    console.log(typeof(bool));

// 4. undefined : a variable is declared but not assigned that type is known as undefined
// eg : 
    let name;
    console.log("undefined : ",name);
    console.log(typeof(name));

// 5. null : null is a intensional absence of value. means a variable store nothing.
// eg : 
    let dd = null;
    console.log("null : ", dd);
    console.log(typeof(dd));

// 6.bigInt : bigint is used for bigger number : 
// eg : 
    let big = BigInt(123456789);
    console.log("bigint : ",big);
    console.log(typeof(big));

// 7. Symbol : symbol is introduced in ES6, that is used to create unique identifier for objects, properties or methods.
// eg : 
    let sym = Symbol("id");
    console.log("Symbol :", sym);
    console.log(typeof(sym));





//  Non-Primitive Data types : 
// Non-primitive data types stores multiple value in a single variable and can be accessed by reference rather 
//  than by value;

// Arrays, objects, function, etc. are the non-primitive data types : 
// What is Closures?
// A closure is a function that remember its lexical environment,
// even after outer function has finished executing.


function outerFunction(){
    let counter = 0;
    
    function innerFunction(){
        counter++;
        console.log(counter);
    }
   return innerFunction;
}

const myFunc = outerFunction();

myFunc();

const myFunc2 = myFunc;
myFunc2();
myFunc2();
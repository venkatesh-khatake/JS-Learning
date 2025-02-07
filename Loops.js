// What are Loops?
// Ans : Loops are control structures that allows us to repeat a block of code multiple times.
//      They are useful for iterating over collections, performing repetitive tasks, or processing data.

// 1. 'for' loop : 
//      The 'for' loop is a basic and versatile loop that repeat a block of code a specified number of time.
//      It consist of three parts : initialization, condition and iteration.

// syntax : 
//      for(initialization ; condition ; iteration){
//          // code here
//      }

// Example : 

    let a = 5;
    for(let i = 1; i <= 10; i++){
        console.log(i * a);
    }

console.log("==================================")
// ===========================================================================================

// 2. 'while' loop : 
//      The 'while' loop continues to execute a block of code as long as the specified condition evaluates to true.
//      it is useful when the number of iteration is not known in advance
// 
// Syntax : 
//          while(condition){
//              // code
                // iteration++;
//          }.

// Example : 

        while (a <= 15){
            console.log(a);
            a++;
        }

        console.log("=======================================");

// =====================================================================================================

// 3. 'do-while' loop : 
//      The 'do-while' loop is similar to the 'while' loop, but it guarantees that the code block
//      is executed at least once before checking the condition
// 
// syntax : 
// 
//      do{
// 
            //code
//          iteration++
//      }while(condition)
// .

// example : 

            do{
                console.log("Hello")
                a++;
            }while ( a== 4);



    // ==========================================================================


// 4. 'for-in' loop : 
//          The 'for-in' loop iterates over the enumerable properties of an object or element in an array.
//          it is generally used for objects.
//          It is not recommended  for array if the index order is important as it does not . 
// Syntax : 
//      for(variable in object){
//  
            // code
//  
//      }.

// Example : 

      let obj = {
        name : "Venkatesh",
        age : 22,
        isStudent : true,
        isMarried : false
      }

      for(key in obj){
        console.log(key + " = "+ obj[key]);
      }


    // ================================================================================


// 5. 'for-of' loop : 
//          The 'for-of' loop iterates over iterable objects like arrays, map, sets, and more
//          It provides a simpler and more readable syntax compared 'for' & 'for-in' loop for iterating over array elements.
// 
// Syntax : 
//      for(variable of iterable){
// 
            // code
//          
//      }.

// Example : 
        
      let arr = [5,6,8,9,4,3,55];

      for(i of arr){
        console.log(i);
      }
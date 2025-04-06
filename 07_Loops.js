// Loops : 
//       A Loop is used to execute a block of code repeatedly as long as specified condition is true.
// There are various types of loop:

// for loop : 
//       A for loops is used when we know the number of iteration beforehand.

// Syntax : 
    // for(initialization ; condition ; update/ iteration){
               // code
//        }


// Example : 
// Print name Venkey 10 times.

for(let i = 1; i <= 10; i++){
        console.log("Venkey");
}

// break keyword :
//       The break keyword is used to terminate the loop when a specified condition is met.

for (let i = 1; i <= 10; i++){
    if(i == 5){
        break;
    }
    console.log(i);
}

// continue keyword :
//       The continue keyword is used to skip the current iteration and move to the next iteration.

for(let i = 1; i <= 10; i++){
    if(i == 6){
        continue;
    }
    console.log(i)
}

//while loop : 
// A while loop is used when we don't know the number of iteration beforehand.

// Syntax :
// while(condition){
//     code
// }

// Example :

// let a = 2;
// let i = 1;
// while(a != 20){
//     console.log(a);
//     a++;
// }

console.log("--------------------")


// do-while loop : 
// A do-while loop is used when we want to execute the code at least once.
// Syntax :
// do{
//     code
// }
// while(condition);

let i = 10; 
do{
    console.log(i);
    i++;
}while(i == 5);





// Typing Animation : 

// const text = "Hello Venkatesh! Welcome to the Typing Animation Demo  🚀";

// let i = 0;

// function typeChar(){
//     for(;;){
//         if(i >= text.length){
//             break;
//         }
    
//     document.getElementById('output').innerHTML += text.charAt(i);
//     i++;
//     setTimeout(typeChar, 50);
//     break;
//     }
// }
// typeChar();
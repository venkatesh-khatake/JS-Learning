// Given an array arr[], the task is to print every alternate element 
// of the array starting from the first element.

function printAlternate(arr){
    let res = [];

    for(let i = 0; i< arr.length; i += 2){
        res.push(arr[i])
    }
    return res;
}

let arr = [10,20,300, 40, 50, 60];

console.log(printAlternate(arr));


// Given an array, arr[] of n integers, and an integer element x,
//  find whether element x is present in the array.

for(let i = 0; i< arr.length; i++){
    if(arr[i] == 40){
        console.log(arr[i] +" is at index "+ i);
        break;
    }
}

let large = arr[0];

for(let i = 0; i< arr.length; i++){
    if(arr[i] > large){
        large = arr[i];
    }
}

console.log(large)
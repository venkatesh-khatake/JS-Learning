function Factorial(num){
    if(num < 0){
        return "Number must be greater than 0";
    }
    if(num === 0 || num ===1){
        return 1;
    }
    else{
        // return num * Factorial(num -1);
        let res = 1;

        for(let i = 1; i <= num ;i++){
            res = res * i;
        }
        return res;

    }
}

console.log(Factorial(5))
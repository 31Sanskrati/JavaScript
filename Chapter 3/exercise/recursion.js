function isEven(x){
    if(x<0){
        return "Not a positive number";
    }
    if(x%2==0){
        return 1;
    }
    return 0;
}

console.log(isEven(7));
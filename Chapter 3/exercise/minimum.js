function min(x, y){
    if(x>y){
        return x;
    }
    else if(y>x){
        return y;
    }
    else{
        return "Same";
    }
}

console.log(min(2,9));
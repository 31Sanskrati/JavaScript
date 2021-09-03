function countBs(str){
    let count = 0;
    let i;
    for (i = 0; i<str.length; i++){
        if(str[i] == 'B'){
            count++;
        }
    }
    return count;
}

console.log(countBs('Bob, not boB'));  //2
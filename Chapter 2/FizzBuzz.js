/* This program is based on the famous "Fizzbuzz game" in which
 we say "Fizz" when the number is divisible 3
 and "Buzz" when divisible by 5
 and "FizzBuzz" when divisible by both
*/
for(let i = 1; i<=30; i++){
    if((i%3 == 0) && (i%5 == 0)){
        console.log("FizzBuzz");
    }
    else if(i%3 == 0){
        console.log("Fizz");
    }
    else if(i%5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}
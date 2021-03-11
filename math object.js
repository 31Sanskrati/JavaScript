let m = Math;
console.log(m);

console.log("The value og Math.E is", Math.E);

let a = 34.7565656;
let b =90;
console.log("The value of a and b is ", a, b);
console.log("The value of a and b rounded is ", Math.round(a), Math.round(b));
console.log("The value of a and b with power 2 is ", Math.pow(a, 2), Math.pow(b,2));
console.log("Square root of a and b is ", Math.sqrt(a), Math.sqrt(b));
console.log("Rounded up value of a is ", Math.ceil(a));
console.log("Rounded down value of a is ", Math.floor(b));

console.log("Absolute value of a is ", Math.abs(a));
console.log("Absolute value of -a is ", Math.abs(-a));

console.log("Value of sine of pi is ", Math.sin(Math.PI));
console.log("Value of sine of a is ", Math.sin(a));
console.log("Value of cosine of b/2 is ", Math.sin(b/2));

console.log("The min value of 4,7,9 is ", Math.min(4, 7, 9));
console.log("The max value of 4,7,9 is ", Math.max(4, 7, 9));

let r = Math.random();
console.log("A random no. is ", r)
let x = 1;
let y = 10;
let r1_10 = x + (y-x)*Math.random;
console.log('Random no. between 1-10 is ', r1_10);
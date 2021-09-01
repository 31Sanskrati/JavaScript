// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
myArray.push(["anni", 18]);
myArray.unshift(["nanu", 15]);
console.log(myArray); // [ [ 'nanu', 15 ], [ 'John', 23 ], [ 'dog', 3 ], [ 'anni', 18 ] ]

var removedFromMyArray = myArray.shift(); // pops the first element


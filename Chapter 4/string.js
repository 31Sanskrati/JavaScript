console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5
console.log(String(6).padStart(3, "*"));
// → **6

let sentence = "My name is Mr. X";
let words = sentence.split(" ");
console.log(words); //[ 'My', 'name', 'is', 'Mr.', 'X' ]
console.log(words.join("* ")); //My* name* is* Mr.* X

console.log("HA".repeat(4)); // HAHAHAHA
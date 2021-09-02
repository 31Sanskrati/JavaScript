function wrapValue(n) {
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

//wrap 1 and wrap 2 are function because we have return a function in wrapValue

console.log(wrap1()); // → 1
console.log(wrap2()); // → 2

/*This situation is a good demonstration of the fact that local
bindings are created anew for every call, and different calls can’t trample on
one another’s local bindings.

This feature—being able to reference a specific instance of a local binding in
an enclosing scope—is called closure.
 */
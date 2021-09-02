//declaration --> Different syntax than function

/*Function declarations are not part of the regular top-to-bottom
flow of control. They are conceptually moved to the top of their scope and can
be used by all the code in that scope.*/

console.log(square(2));
function square(x) {
    return x * x;
}

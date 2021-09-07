//convert array to list
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

//convert list to array
function listToArray(list) {
    let array = [];
    for (let i = list; i; i = i.rest) {
        array.push(i.value);
    }
    return array;
}

//add value to the list
function prepend(value, list) {
    return { value, rest: list };
}

//return the value of nth element
function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

list = arrayToList([1, 2]); //{ value: 1, rest: { value: 2, rest: null } }
console.log(listToArray(list)); //[ 1, 2 ]
console.log(prepend(67, list)); //{ value: 67, rest: { value: 1, rest: { value: 2, rest: null } } }
console.log(nth(list, 1)); //2
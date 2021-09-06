let todoList = [];

//add task to todoList
function remember(task) {
    todoList.push(task);
}

//removes the first element from the list
function getTask() {
    return todoList.shift();
}

//add task at the beginning of the list
function rememberUrgently(task) {
    todoList.unshift(task);
}

remember('Read Book');
remember('Study OOPs');
remember('LeetCode Problems');
remember('DSA');
getTask();
rememberUrgently('Assignment');

console.log(todoList); //[ 'Assignment', 'Study OOPs', 'LeetCode Problems', 'DSA' ]
console.log([1,2,3,4,5].slice(2, 4)); // [2 ,3]
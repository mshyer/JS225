// MAKE LIST FUNCTION
// Input: none
// Output: FUNCTION
// LIST FUNCTION
// Input: string or none
// Output: 
//  1. side effect: add or remove matching string from array
//  2. If no arguments, log all items to console
// Data structure: private array of strings within closure
// Algorithm:
// makeList function initializes the variables:
//   -todos
//   -noTodosMessage
//   -returns anonymous function
// Anon function: called with ...todo
//   -if no argument:
//     -if no todos, log message
//     -else log all the todos
//   -if arg is string
//     -check todos
//     -if todos contains the string, remove the todo (splice)
//        -log removed message
//     -if it doesn't, add it to the todos (push)
//        -log added message

function printTodos(todos) {
  if (todos.length === 0) {
    console.log('The list is empty');
  } else {
    todos.forEach(todo => console.log(todo));
  }
}

function makeList() {
  let todos = [];
  return function(todo) {
    if (arguments.length === 0) {
      printTodos(todos);
    } else if  (todos.includes(todo.trim())) {
      let todoIdx = todos.indexOf(todo);
      todos.splice(todoIdx, 1);
      console.log(todo + ' removed!');
    } else {
      todos.push(todo);
      console.log(todo + ' added!');
    }
  };
}

let list = makeList();
list();
list('make breakfast');
list('read book');
list();
list('make breakfast');
list();

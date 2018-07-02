// create an array
var todos = ["Buy milk"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") {
    listTodos(); // find from bottom
  }
  else if (input === "new") {
    addTodo();
  }
  else if (input === "delete") {
    deleteTodo();
  }
  input = prompt("What would you like to do?");
}

console.log("OK, you quit the app.");


function listTodos() {
  console.log("*****");
  todos.forEach(function(todo, i){ 
  // the second parameter i here refers to the index
  console.log(i + ": " + todo);
  });
  console.log("*****");
}

function addTodo() {
  // ask for new todo and add to todos array
  var newTodo = prompt("Enter new todo: ");
  todos.push(newTodo);
  console.log("You added a todo.");
}

function deleteTodo() {
  var toDelete = prompt("Enter index of todo to delete: ");
  // .splice here will take away 1 item starting at the toDelete index
  todos.splice(toDelete, 1);
  console.log("You deleted a todo.");
}
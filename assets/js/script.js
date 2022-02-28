var formE1 = document.querySelector("#task-form");
var taskToDoE1 = document.querySelector("#tasks-to-do");


var createTaskHandler = function(event) {
  event.preventDefault();
  
  var listItemE1 = document.createElement("li");
  listItemE1.textContent = "This is a new task";
  listItemE1.className = "task-item"
  taskToDoE1.appendChild(listItemE1);
}


formE1.addEventListener("submit", createTaskHandler);
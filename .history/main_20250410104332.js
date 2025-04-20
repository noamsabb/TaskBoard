"use strict";
let todoList = [];

document.addEventListener("DOMContentLoaded", function () {
  loadTodoList();
  displayTodoList();
});

const taskTextBox = document.getElementById("taskTextBox");
const timeTextBox = document.getElementById("timeTextBox");
const containerDiv = document.getElementById("containerDiv");

function addTodo() {
  if(pushTodo()=== 0) return;
  displayTodoList();
  clearForm();
}


function pushTodo() {
  const task = taskTextBox.value;
  const time = timeTextBox.value;
  
  let isLegal = checkLegalTime(time);
  if (!checkLegalTime(time)) {
    illegalTime();
    return 0;
  }
  let formattedTime = time
    .replace("T", "<br>")
    .replace(/-/g, "/")
    .replace("202", "2");
  const todo = { task, formattedTime };
  todoList.push(todo);
  saveTodoList();
  return 1;
}

function illegalTime() {
  const timeMessageBox = document.getElementById("timeMessageBox");

  timeMessageBox.style.background = "red";
  timeMessageBox.style.color = "white";
  timeMessageBox.style.opacity = 0.5;
  timeMessageBox.innerHTML = "Can't schedule a task for a previous date";
  setTimeout(() => {
    timeMessageBox.innerHTML = "";
    timeMessageBox.style.background = "";
    timeMessageBox.style.color = "";
  }, 4500);
}

function displayTodoList() {
  let html = "";

  for (let i = 0; i < todoList.length; i++) {
    const card = `
            <div class="card">
                <span onclick="deleteMe(${i})"> ❌ </span>
                <div class= "taskDiv">${todoList[i].task}</div>
                <div class= "timeDiv">${todoList[i].formattedTime}</div>  
            </div>
        `;
    html += card;
  }
  containerDiv.innerHTML = html;
}

function deleteMe(index) {
  todoList.splice(index, 1);
  displayTodoList();
  saveTodoList();
}

function clearForm() {
  taskTextBox.value = "";
  timeTextBox.value = "";
  taskTextBox.focus();
}

function saveTodoList() {
  const json = JSON.stringify(todoList);
  localStorage.setItem("toDoList", json);
}
function loadTodoList() {
  const json = localStorage.getItem("toDoList");
  if (json) {
    todoList = JSON.parse(json);
  }
}

function checkLegalTime(time) {
  let actualTime = new Date();
  let taskTimeConverted = new Date(time);

  if (taskTimeConverted < actualTime) {
    return false;
  }
  return true;
}

function resetTaskBoard(){
    todoList.splice(0, todoList.length)
    displayTodoList
}

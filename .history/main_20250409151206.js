"use strict";
let todoList = [];

document.addEventListener('DOMContentLoaded', function () {
    loadTodoList();
  });
  
const taskTextBox = document.getElementById("taskTextBox");
const timeTextBox = document.getElementById("timeTextBox");
const conatinerDiv = document.getElementById("conatinerDiv");

function addTodo() {
  pushTodo();
  displayTodoList();
  clearForm();
}

function pushTodo() {
  const task = taskTextBox.value;
  const time = timeTextBox.value;
  const todo = { task, time };
  todoList.push(todo);
  saveTodoList();
}

function displayTodoList() {
  let html = "";

  for (let i = 0; i < todoList.length; i++) {
    const card = `
            <div class="card">
                <span onclick="deleteMe(${i})"> ❌ </span>
                <div>${todoList[i].task}</div>
                <div>${todoList[i].time}</div>  
            </div>
        `;
    html += card;
  }
  containerDiv.innerHTML = html;
}

function deleteMe(index) {
  todoList.splice(index, 1);
  displayTodoList();
}

function clearForm() {
  taskTextBox.value = "";
  timeTextBox.value = "";
  taskTextBox.focus();
}


function saveTodoList(){
    const json = JSON.stringify(todoList);
    localStorage.setItem("toDoList", json);
  }
  function loadTodoList(){
    const json = localStorage.getItem("todoList");
    if(json){
      todoList = JSON. parse(json);
    }
  }
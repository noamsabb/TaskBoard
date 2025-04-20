"use strict";
let todoList = [];

document.addEventListener('DOMContentLoaded', function () {
    loadTodoList();
    displayTodoList()
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
  checkLegalTime(time);
  let formattedTime = time.replace("T", " ").replace(/-/g, "/").replace("202", "2")
  const todo = { task, formattedTime };
  todoList.push(todo);
  saveTodoList();
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


function saveTodoList(){
    const json = JSON.stringify(todoList);
    localStorage.setItem("toDoList", json);
  }
  function loadTodoList(){
    const json = localStorage.getItem("toDoList");
    if(json){
      todoList = JSON. parse(json);
    }
  }


  function checkLegalTime(time){
    let actualTime = new Date()
    let stringDate = actualTime.toLocaleDateString;
    alert(stringDate);
  }
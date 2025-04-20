"use strict"

let todoList = [];


function addTodo(){
    pushTodo();
    displayTodoList();
    clearForm();
}

function pushTodo(){
    const task = taskTextBox. value;
    const time = timeTextBox. value;
    const todo = {task, time};
    todoList.push(todo);

}

function displayTodoList(){ 

    const containerDiv = document. getElementById ("containerDiv");
    let html ="";
    for (let i = 0; i < todoList.length; i++) {
        const card = `
            <div class="card">
                <span onclick="deleteMe(${i}"> ❌ </span>
                <div>${todoList[i].task}</div>
                <div>${todoList[i].time}</div>  
            </div>
        `;
        html += card;
    }
    containerDiv.innerHTML = html;
}

function deleteMe (index) {
    todoList. splice(index, 1);
    displayTodoList();
}
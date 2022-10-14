const task = document.querySelector("#tarefa");

const btnAddTask = document.getElementById("add_tarefa");

const toDoList = document.querySelector("#a-fazer");

btnAddTask.onclick = function(e){
    e.preventDefault();
    const newTask = document.createElement("li");
    //newTask.innerText = task.value;
    const taskText = document.createTextNode(task.value);
    newTask.appendChild(taskText);
    toDoList.appendChild(newTask);
    task.value = "";
}
const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoFormInput = toDoForm.querySelector("input");

function paintToDo (newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}


function handleTodoSubmit (e) {
    e.preventDefault();
    const newTodo = toDoFormInput.value;
    toDoFormInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleTodoSubmit);
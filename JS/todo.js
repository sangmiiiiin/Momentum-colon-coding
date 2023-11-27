const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoFormInput = toDoForm.querySelector("input");

function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();
}
function paintToDo (newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleTodoSubmit (e) {
    e.preventDefault();
    const newTodo = toDoFormInput.value;
    toDoFormInput.value = "";
    paintToDo(newTodo);
}

function handleTodoRemove() {
    console.log("Click!!")
}

toDoForm.addEventListener("submit", handleTodoSubmit);

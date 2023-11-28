const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoFormInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";

const toDos = [];

function saveTodos () {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();
}
function paintToDo (newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleTodoSubmit (e) {
    e.preventDefault();
    const newToDo = toDoFormInput.value;
    toDoFormInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveTodos();
}

function handleTodoRemove() {
    console.log("Click!!")
}


toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parseToDos = JSON.parse(savedToDos);
    console.log(parseToDos);
    parseToDos.forEach((item) => {"This is turn of ", item});
}
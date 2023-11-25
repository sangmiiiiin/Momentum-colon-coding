const loginForm = document.querySelector("#login-form");
const inputForm = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_ITEM = "hidden"
const SUBMIT_STRING = "submit"
const USERNAME_STRING = "username"

const handleLogin = (e) => {
    e.preventDefault()
    const username = inputForm.value;
    localStorage.setItem(USERNAME_STRING, username);
    showGreeting(username);
}



const showGreeting = (username) => {
    loginForm.classList.add(HIDDEN_ITEM);
    greeting.classList.remove(HIDDEN_ITEM);
    greeting.innerText = `Hello ! ${username}`
}


const savedName = localStorage.getItem(USERNAME_STRING);

if(savedName === null) {
    loginForm.classList.remove(HIDDEN_ITEM);
    loginForm.addEventListener(SUBMIT_STRING, handleLogin);
} else {
    showGreeting(savedName);
}
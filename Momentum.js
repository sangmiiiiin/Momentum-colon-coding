const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(e) {
    // console.dir(loginInput);
    // console.log("click!!!!!");
    // const username = loginInput.value;
    e.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit)

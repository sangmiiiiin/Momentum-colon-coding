const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";  // 관습 비교적 중요하지 않은 단순 문자열 같은경우 대문자를 사용하고 스네이크 방식으로 작성

function onLoginSubmit(e) {
    // console.dir(loginInput);
    // console.log("click!!!!!");
    e.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    greeting.innerText = `Hello ${username}`;
    //greeting.innerText = "Hello " + username; 과 동일하다 템플릿 리터럴을 사용해 변수를 문자열처럼 사용가능
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

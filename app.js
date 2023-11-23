// const changeButtonHandler = () => {
//     const Text = document.querySelector(".Momentum h1");
//     if (Text.innerText === "Grab me!") {
//         Text.innerText = "I got you!";
//     } else if (Text.innerText === "I got you!") {
//         Text.innerText = "Grab me!";
//     }
// }
const title = document.querySelector(".Momentum h1");

function handleTitleClick() {
    title.style.color = "red";
}

title.addEventListener("click", handleTitleClick);
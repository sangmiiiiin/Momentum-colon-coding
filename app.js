// const changeButtonHandler = () => {
//     const Text = document.querySelector(".Momentum h1");
//     if (Text.innerText === "Grab me!") {
//         Text.innerText = "I got you!";
//     } else if (Text.innerText === "I got you!") {
//         Text.innerText = "Grab me!";
//     }
// }
// const title = document.querySelector(".Momentum h1");

// console.dir(title);

// function handleTitleClick() {
//     title.style.color = "red";
// }

// title.addEventListener("click", handleTitleClick);

const title = document.querySelector(".Momentum h1");

const handleMouseEnter = () => {
    title.innerText = "Mouse is here!";
}
const handleClickEvent = () => {
    title.style.color = "red";
}

const handleOnMouse = () => {
    title.innerText = "Mouse is gon!";
}

const handleWindowResize = () => {
    document.body.style.backgroundColor = "tomato";
}

const handleWindowCopy = () => {
    alert("Don't copy this");
}

title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("click", handleClickEvent);
title.addEventListener("mouseleave", handleOnMouse);
title.onclick = handleClickEvent;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
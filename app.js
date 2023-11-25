const clickText = document.querySelector(".container h1");

const handleClick = () => {
    clickText.classList.toggle("active")
}
clickText.addEventListener("click", handleClick)
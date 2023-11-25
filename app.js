const clickText = document.querySelector(".container h1");

const handleClick = () => {
	const currentColor = clickText.style.color
    let changedColor
    if (currentColor === "red") {
    	changedColor = "blue"
    } else {
    	changedColor = "red"
    }
    clickText.style.color = changedColor
}
clickText.addEventListener("click", handleClick);
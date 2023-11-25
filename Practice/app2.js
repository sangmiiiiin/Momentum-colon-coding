const BackgroundButton = document.querySelector(".changeBackgroundColor");
const DayOrNightButton = document.querySelector(".dayOrNight");

const handleBackgroundButton = () => {
    document.body.classList.toggle("changedBackgroundColor");
}
const handleDayOrNight = () => {
    document.body.classList.toggle("dayOrNightBackgroud");
    document.querySelectorAll("p").forEach(function(para) {
        para.classList.toggle("nightText");
      });
    document.querySelectorAll("section").forEach(function(section) {
        section.classList.toggle("nightBorder")
    });
    document.querySelectorAll("aside").forEach(function(aside) {
        aside.classList.toggle("nightBorder")
    });
    document.querySelector(".headerContainer").classList.toggle("nightBorder");
    document.querySelector(".footerContainer").classList.toggle("nightBorder");
};

BackgroundButton.addEventListener("click", handleBackgroundButton)
DayOrNightButton.addEventListener("click", handleDayOrNight);
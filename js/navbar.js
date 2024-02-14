const bars = document.querySelector(".bars");
const navBar = document.querySelector(".nav-bar");

bars.onclick = function () {
    navBar.classList.toggle("active");
    bars.classList.toggle("cross");
};


window.onscroll = function () {
    if (navBar.classList.contains("active")) {
        navBar.classList.remove("active");
        bars.classList.remove("cross");
    }
};
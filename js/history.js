let currentSlide = 0;

function showSlide(index) {
    const slider = document.getElementById("slider");
    const slides = document.getElementsByClassName("slide");

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slider.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

const sliderContainer = document.getElementById("slider-container");
const hammertime = new Hammer(sliderContainer);

hammertime.on("swipeleft", function () {
    nextSlide();
});

hammertime.on("swiperight", function () {
    prevSlide();
});

hammertime.on("panleft", function () {
    nextSlide();
});

hammertime.on("panright", function () {
    prevSlide();
});

setInterval(function () {
    nextSlide();
}, 9000);

document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector(".carrusel");
    let currentIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll(".diapositiva");
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        carrusel.style.transition = "transform 0.5s ease-in-out";
        carrusel.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }
  
    const firstClone = carrusel.firstElementChild.cloneNode(true);
    const lastClone = carrusel.lastElementChild.cloneNode(true);

    carrusel.appendChild(firstClone);
    carrusel.insertBefore(lastClone, carrusel.firstElementChild);
    carrusel.style.transform = "translateX(-100%)";

    setInterval(function () {
        nextSlide();
    }, 6000);
    carrusel.addEventListener("transitionend", () => {
        const slides = document.querySelectorAll(".diapositiva");
        if (currentIndex === 0) {
            carrusel.style.transition = "none";
            currentIndex = slides.length - 2;
            carrusel.style.transform = `translateX(${-currentIndex * 100}%)`;
        } else if (currentIndex === slides.length - 1) {
            carrusel.style.transition = "none";
            currentIndex = 1;
            carrusel.style.transform = `translateX(${-currentIndex * 100}%)`;
        }
    });
});
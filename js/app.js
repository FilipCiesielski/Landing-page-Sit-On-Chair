document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM IS READY GO FILIP!");


    var showMenu = document.querySelector("li.show a");
    var subMenu = document.querySelector("ul.sub_menu");

    showMenu.addEventListener("mouseover", function (event) {
        subMenu.style.display = "block"
    });

    showMenu.addEventListener("mouseout", function (event) {
        subMenu.style.display = "none"
    });


    var opacitySpan = document.querySelectorAll(".opacity span");
    var opacity = document.querySelectorAll(".opacity");
    var widget = document.querySelectorAll("#section_two .widget");

    opacitySpan[0].addEventListener("mouseover", function (event) {
        chairClair.style.display = "none";
        opacity[0].style.display = "none";
    });
    widget[0].addEventListener("mouseover", function (event) {
        opacitySpan[0].style.display = "none";
        opacity[0].style.display = "none";
    });

    opacitySpan[0].addEventListener("mouseover", function (event) {
        chairClair.style.display = "none";
        opacity[1].style.display = "none";
    });
    widget[1].addEventListener("mouseover", function (event) {
        opacitySpan[1].style.display = "none";
        opacity[1].style.display = "none";
    });

    opacitySpan[0].addEventListener("mouseout", function (event) {
        chairClair.style.display = "block";
        opacity[0].style.display = "block";
    });
    widget[0].addEventListener("mouseout", function (event) {
        opacitySpan[0].style.display = "block";
        opacity[0].style.display = "block";
    });

    opacitySpan[0].addEventListener("mouseout", function (event) {
        chairClair.style.display = "block";
        opacity[1].style.display = "block";
    });
    widget[1].addEventListener("mouseout", function (event) {
        opacitySpan[1].style.display = "block";
        opacity[1].style.display = "block";
    });

// slider

    var arrowPrev = document.querySelector(".arrow_prev");
    var arrowNext = document.querySelector(".arrow_next");
    var sliderElements = document.querySelectorAll("#slider li");

    var currentIndex = 0;

    sliderElements[currentIndex].classList.add("visible");

    arrowPrev.addEventListener("click", function () {
        console.log("click prev")
        sliderElements[currentIndex].classList.remove("visible");
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = sliderElements.length - 1;
        }
        sliderElements[currentIndex].classList.add("visible");

    });

    arrowNext.addEventListener("click", function () {
        sliderElements[currentIndex].classList.remove("visible");
        currentIndex++;
        if (currentIndex >= sliderElements.length) {
            currentIndex = 0;
        }
        sliderElements[currentIndex].classList.add("visible")
    })


});
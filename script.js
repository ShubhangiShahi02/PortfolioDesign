// sticky navigation menu JS

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    } else {
        nav.classList.add("sticky");
        scrollBtn.style.display = "none";
    }
}

//Side navigation menu JS
let body = document.querySelector("body");
let navBar = document.querySelector("navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.oneclick = function() {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "hidden";
    scrollBtn.style.pointerEvents = "none";
}

menuBtn.oneclick = function() {
    navBar.classList.add("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scrollBtn.style.pointerEvents = "auto";
}

//Side Navigation Bar Close While we click On Navigation Links

let navLinks = document.querySelector(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
    nav[i], addEventListener("click", function() {
        navBar.classList.remove("active");
        menuBtn.style.opacity = "i";
        menuBtn.style.pointerEvents = "auto";
    })
}
// sticky navigation menu JS

let nav = document.querySelector("nav");
let scroll8tn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        scroll8tn.style.display = "block";
    } else {
        nav.classList.add("sticky");
        scroll8tn.style.display = "none";
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
    scroll8tn.style.pointerEvents = "none";
}

menuBtn.oneclick = function() {
    navBar.classList.add("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
    scroll8tn.style.pointerEvents = "auto";
}
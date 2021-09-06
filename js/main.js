

//Navbar
const hamburger = document.querySelector(".hamburger-btn");
const navMenu = document.querySelector(".navbar__menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Closes menu when link is clicked 
const navLink = document.querySelectorAll(".navbar__menu-item");

navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/************************** Planet Information **********/
// Variables

// Facts
const planets = {
    0: 'mercury',
    1: 'venus',
    2: 'earth',
    3: 'mars',
    4: 'jupiter',
    5: 'saturn',
    6: 'uranus',
    7: 'neptune'
}

const btnColors = {
    0: '419EBB',
    1: 'EDA249',
    2: '6D2ED5',
    3: 'D14C32',
    4: 'D83A34',
    5: 'CD5120',
    6: '1EC1A2',
    7: '2D68F0'
}
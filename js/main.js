

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
const planetLinks = document.querySelector('.nav__link');
const planetName = document.querySelector('.planet-title');
const planetImage = document.querySelector('.planet-image');
const planetDesc = document.querySelector('.planet-text');
const source = document.querySelector('.source-link');
const rotation = document.querySelector('.rotation-time');
const revolution = document.querySelector('.revolution-time');
const radius = document.querySelector('.radius');
const temperature = document.querySelector('.average-temp');

// Buttons
const planetOverview = document.querySelector('.btn-overview');
const planetStructure = document.querySelector('.btn-structure');
const planetGeology = document.querySelector('.btn-geology');


const vw = document.documentElement.clientWidth; // For window breakpoints


var data;

// Get information from data.json
function fetchData() {
    if (typeof data === 'undefined') {
        fetch('data.json').then(response => {
            if (!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
            .then(json => {
                data = json;
                console.log(data);
                //displayPlanetInfo();
            });
    }
    //else displayPlanetInfo();
}
fetchData();

let currentPlanet = 0;
let currentState = "planetOverview";



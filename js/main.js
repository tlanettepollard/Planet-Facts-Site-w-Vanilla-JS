
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
const main = document.querySelector('.main');
const planetLink = document.querySelector('.nav__link');
const planetName = document.querySelector('.planet-title');
const planetImage = document.querySelector('.planet-image');
const planetDesc = document.querySelector('.planet-text');
const source = document.querySelector('.source-link');
const rotation = document.querySelector('.rotation-time');
const revolution = document.querySelector('.revolution-time');
const radius = document.querySelector('.radius-size');
const temperature = document.querySelector('.average-temp');

// Buttons Tablet
const overview = document.getElementById('overview');
const structure = document.getElementById('structure');
const geology = document.getElementById('.geology');

//Buttons Mobile
const overviewMobileBtn = document.getElementById('overview-mobile');
const structureMobileBtn = document.getElementById('structure-mobile');
const geologyMobileBtn = document.getElementById('geology-mobile');

// Breakpoints
const vw = document.documentElement.clientWidth; // For window breakpoints
// Miscellaneous
//const planetIndex = 0;

let planetsData;
let currentPlanet = 0;
let currentState = "overview";

// Get data.json
function fetchData() {
    if (typeof data === 'undefined') {
        fetch('/data.json').then((response) => response.json())
            .then((data) => {
                planetsData = data;
                //console.log(planetsData)
                displayPlanetData();
            });
    }
    else displayPlanetData();
}

fetchData();

// Render planet information

function displayPlanetData() {
    planetName.innerHTML = planetsData[currentPlanet].name;
    rotation.innerHTML = planetsData[currentPlanet].rotation;
    revolution.innerHTML = planetsData[currentPlanet].revolution;
    radius.innerHTML = planetsData[currentPlanet].radius;
    temperature.innerHTML = planetsData[currentPlanet].temperature;

    if (currentState === "overview") {
        planetDesc.innerHTML = planetsData[currentPlanet].overview.content;
        source.href = planetsData[currentPlanet].overview.source;

    }
}





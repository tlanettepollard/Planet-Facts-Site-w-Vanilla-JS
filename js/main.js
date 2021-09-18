
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
const radius = document.querySelector('.radius-size');
const temperature = document.querySelector('.average-temp');

// Buttons
const planetOverview = document.querySelector('.btn-overview');
const planetStructure = document.querySelector('.btn-structure');
const planetGeology = document.querySelector('.btn-geology');

// Breakpoints
const vw = document.documentElement.clientWidth; // For window breakpoints

const planets = {
    0: "mercury",
    1: "venus",
    2: "earth",
    3: "mars",
    4: "jupiter",
    5: "saturn",
    6: "uranus",
    7: "neptune"
}

let currentPlanet = 0;
let currentState = 'planetOverview';

// Get data.json

function fetchData() {
    if (typeof data === 'undefined') {
        fetch('/data.json')
            .then(response => response.json())
            .then(json => {
                //console.log(json);
                data = json;
                displayPlanetInfo();
            }).catch(error => {
                console.log(error);
            });
    }
    else displayPlanetInfo();
}
fetchData();


function displayPlanetInfo() {
    planetName.innerText = data[currentPlanet].name;
    rotation.innerText = data[currentPlanet].rotation;
    revolution.innerText = data[currentPlanet].revolution;
    radius.innerText = data[currentPlanet].radius;
    temperature.innerText = data[currentPlanet].temperature;

    if (currentState === "planetOverview") {
        planetDesc.innerText = data[currentPlanet].overview.content;
        source.href = data[currentPlanet].overview.source;
        planetImage.style.background = `url('/assets/planet-${planets[currentPlanet]}.svg')`;
        planetImage.style.backgroundRepeat = 'no-repeat';
        planetImage.style.backgroundPosition = 'center';

        if (vw > 992) {
            planetImage.style.backgroundSize = `${data[currentPlanet].size.large}`, `${data[currentPlanet].size.large}`;
            planetImage.style.height = `${data[currentPlanet].size.large}`;
            planetImage.style.width = `${data[currentPlanet].size.large}`;
        } else if (vw<=992 && vw>=768) {
            planetImage.style.backgroundSize = `${data[currentPlanet].size.medium}`, `${data[currentPlanet].size.medium}`;
            planetImage.style.height = `${data[currentPlanet].size.medium}`;
            planetImage.style.width = `${data[currentPlanet].size.medium}`;
        } else {
            planetImage.style.backgroundSize = `${data[currentPlanet].size.small}`, `${data[currentPlanet].size.small}`;
            planetImage.style.height = `${data[currentPlanet].size.small}`;
            planetImage.style.width = `${data[currentPlanet].size.small}`;
        }
    }
}








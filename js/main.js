
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


let index = 0;
let currentPlanet = index;
let currentState = "overview";

// Get data.json
fetch('/data.json').then(response => response.json())
    .then(json => {
        planetsData = json;
        //console.log(planetsData);
        displayPlanetInfo();

    }).catch(error => {
        console.log('error: ' + error);
    }); 


function displayPlanetInfo() {
    planetName.innerText = planetsData[currentPlanet].name;
    source.href = planetsData[currentPlanet].overview.source;
    rotation.innerText = planetsData[currentPlanet].rotation;
    revolution.innerText = planetsData[currentPlanet].revolution;
    radius.innerText = planetsData[currentPlanet].radius;
    temperature.innerText = planetsData[currentPlanet].temperature;

    if (currentState === 'overview') {
        planetDesc.innerText = planetsData[currentPlanet].overview.content;
        source.href = planetsData[currentPlanet].overview.source;
        planetImage.style.background = `url('${planetsData[currentPlanet].images.planet}')`;
        planetImage.style.backgroundRepeat = 'no-repeat';
        planetImage.style.backgroundPosition = 'center';

        if (vw > 992) {
            planetImage.style.backgroundSize = `${planetsData[currentPlanet].size.large}`, `${planetsData[currentPlanet].size.large}`;
            planetImage.style.height = `${planetsData[currentPlanet].size.large}`;
            planetImage.style.width = `${planetsData[currentPlanet].size.large}`;
        } else if (vw <= 992 && vw >= 768) {
            planetImage.style.backgroundSize = `${planetsData[currentPlanet].size.medium}`, `${planetsData[currentPlanet].size.medium}`;
            planetImage.style.height = `${planetsData[currentPlanet].size.medium}`;
            planetImage.style.width = `${planetsData[currentPlanet].size.medium}`;
        } else {
            planetImage.style.backgroundSize = `${planetsData[currentPlanet].size.small}`, `${planetsData[currentPlanet].size.small}`;
            planetImage.style.height = `${planetsData[currentPlanet].size.small}`;
            planetImage.style.width = `${planetsData[currentPlanet].size.small}`;
        }
    } else if (currentState === 'structure') {
        planetDesc.innerText = planetsData[currentPlanet].structure.content;
        source.href = planetsData[currentPlanet].structure.source;
        planetImage.style.background = `url('${planetsData[currentPlanet].images.internal}')`;
        planetImage.style.backgroundRepeat = 'no-repeat';
        planetImage.style.backgroundPosition = 'center';

        if (vw > 992) {
            planetImage.style.backgroundSize = `${planetsData[currentPlanet].size.large}`, `${planetsData[currentPlanet].size.large}`;
            planetImage.style.height = `${planetsData[currentPlanet].size.large}`;
            planetImage.style.width = `${planetsData[currentPlanet].size.large}`;
        } else if (vw <= 992 && vw >= 768) {
            planetImage.style.backgroundSize = `${planetsData[currentPlanet].size.medium}`, `${planetsData[currentPlanet].size.medium}`;
            planetImage.style.height = `${planetsData[currentPlanet].size.medium}`;
            planetImage.style.width = `${planetsData[currentPlanet].size.medium}`;
        } else {
            planetImage.style.backgroundSize = `${planetsData[currentPlanet].size.small}`, `${planetsData[currentPlanet].size.small}`;
            planetImage.style.height = `${planetsData[currentPlanet].size.small}`;
            planetImage.style.width = `${planetsData[currentPlanet].size.small}`;
        }
    } else {
        planetDesc.innerText = planetsData[currentPlanet].geology.content;
        source.href = planetsData[currentPlanet].geology.source;
        planetImage.style.background = `url('/assets/geology-${planetsData[currentPlanet].images.geology}')`, `url('${planetsData[currentPlanet].images.planet}')`; 
        planetImage.style.backgroundRepeat = 'no-repeat';
        planetImage.style.backgroundPosition = 'center';

        if (vw > 992) {
            planetImage.style.backgroundSize = `${planetsData[currentPlanet].geologySize.large}, ${planetsData[currentPlanet].size.large}`, `${planetsData[currentPlanet].size.large}`;
            planetImage.style.height = `${planetsData[currentPlanet].size.large}`;
            planetImage.style.width = `${planetsData[currentPlanet].size.large}`;
        } else if (vw<=992 && vw>=768) {
            planetImage.style.backgroundSize = `${planetsData[currentPlanet].geologySize.medium}, ${planetsData[currentPlanet].size.medium}`, `${planetsData[currentPlanet].size.medium}`;
            planetImage.style.height = `${planetsData[currentPlanet].size.medium}`;
            planetImage.style.width = `${planetsData[currentPlanet].size.medium}`;
        } else {
            planetImage.style.backgroundSize = `${planetsData[currentPlanet].geologySize.small}, ${planetsData[currentPlanet].size.small}`, `${planetsData[currentPlanet].size.small}`;
            planetImage.style.height = `${planetsData[currentPlanet].size.small}`;
            planetImage.style.width = `${planetsData[currentPlanet].size.small}`;
        }
    
    }

}

  

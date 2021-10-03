
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
const geologyImage = document.querySelector('.geology-image');
const planetDesc = document.querySelector('.planet-text');
const source = document.querySelector('.source-link');
const rotation = document.querySelector('.rotation-time');
const revolution = document.querySelector('.revolution-time');
const radius = document.querySelector('.radius-size');
const temperature = document.querySelector('.average-temp');

// Buttons Tablet
const overviewBtn = document.querySelector('.btn-overview');
const structureBtn = document.querySelector('.btn-structure');
const geologyBtn = document.querySelector('.btn-geology');

// Breakpoints
const vw = document.documentElement.clientWidth;

let id = 0;
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
    const planet = planetsData[id];
    planetName.innerText = planet.name;
    planetDesc.innerText = planet.overview.content;
    planetLink.href = planet.overview.source;
    rotation.innerText = planet.rotation;
    revolution.innerText = planet.revolution;
    radius.innerText = planet.radius;
    temperature.innerText = planet.temperature;

    if (vw<768){
        planetImage.style.background = `url('${planet.images.planet}')`;
        planetImage.style.backgroundRepeat = 'no-repeat';
        planetImage.style.backgroundPosition = 'center';
        planetImage.style.backgroundSize = `${planet.size.small}`, `${planet.size.small}`;
        planetImage.style.width = planet.size.small;
        planetImage.style.height = planet.size.small;
        geologyImage.src = planet.images.geology;
    } else if (vw <= 992 && vw >= 768) {
        planetImage.style.background = `url('${planet.images.planet}')`;
        planetImage.style.backgroundRepeat = 'no-repeat';
        planetImage.style.backgroundPosition = 'center';
        planetImage.style.backgroundSize = `${planet.size.medium}`, `${planet.size.medium}`;
        planetImage.style.width = planet.size.medium;
        planetImage.style.height = planet.size.medium;  
    } else {
        planetImage.style.background = `url('${planet.images.planet}')`;
        planetImage.style.backgroundRepeat = 'no-repeat';
        planetImage.style.backgroundPosition = 'center';
        planetImage.style.backgroundSize = `${planet.size.large}`, `${planet.size.large}`;
        planetImage.style.width = planet.size.large;
        planetImage.style.height = planet.size.large;  
    } 

    // Overview Button
    overviewBtn.addEventListener('click', () => {
        planetDesc.innerText = planet.overview.content;
        planetLink.href = planet.overview.source;
        planetImage.src = `url('${planet.images.planet}')`;
        geologyImage.style.display = 'none'; 
        overviewBtn.style.borderBottom = `4px solid ${planet.color}`;
        structureBtn.style.borderBottom = null;
        geologyBtn.style.borderBottom = null;

        if (vw<768){
            planetImage.style.background = `url('${planet.images.planet}')`;
            planetImage.style.backgroundRepeat = 'no-repeat';
            planetImage.style.backgroundPosition = 'center';
            planetImage.style.backgroundSize = `${planet.size.small}`, `${planet.size.small}`;
            planetImage.style.width = planet.size.small;
            planetImage.style.height = planet.size.small;
            geologyImage.src = planet.images.geology;
        } else if (vw <= 992 && vw >= 768) {
            planetImage.style.background = `url('${planet.images.planet}')`;
            planetImage.style.backgroundRepeat = 'no-repeat';
            planetImage.style.backgroundPosition = 'center';
            planetImage.style.backgroundSize = `${planet.size.medium}`, `${planet.size.medium}`;
            planetImage.style.width = planet.size.medium;
            planetImage.style.height = planet.size.medium;  
        } else {
            planetImage.style.background = `url('${planet.images.planet}')`;
            planetImage.style.backgroundRepeat = 'no-repeat';
            planetImage.style.backgroundPosition = 'center';
            planetImage.style.backgroundSize = `${planet.size.large}`, `${planet.size.large}`;
            planetImage.style.width = planet.size.large;
            planetImage.style.height = planet.size.large;  
        }
    });

    // Structure Button
    structureBtn.addEventListener('click', () => {
        planetDesc.innerText = planet.structure.content;
        planetLink.href = planet.structure.source;
        planetImage.src = `url('${planet.images.internal}')`;
        geologyImage.style.display = 'none';
        structureBtn.style.borderBottom = `4px solid ${planet.color}`;
        overviewBtn.style.borderBottom = null;
        geologyBtn.style.borderBottom = null;

        if (vw<768){
            planetImage.style.background = `url('${planet.images.internal}')`;
            planetImage.style.backgroundRepeat = 'no-repeat';
            planetImage.style.backgroundPosition = 'center';
            planetImage.style.backgroundSize = `${planet.size.small}`, `${planet.size.small}`;
            planetImage.style.width = planet.size.small;
            planetImage.style.height = planet.size.small;
            geologyImage.src = planet.images.geology;
        } else if (vw <= 992 && vw >= 768) {
            planetImage.style.background = `url('${planet.images.internal}')`;
            planetImage.style.backgroundRepeat = 'no-repeat';
            planetImage.style.backgroundPosition = 'center';
            planetImage.style.backgroundSize = `${planet.size.medium}`, `${planet.size.medium}`;
            planetImage.style.width = planet.size.medium;
            planetImage.style.height = planet.size.medium;  
        } else {
            planetImage.style.background = `url('${planet.images.internal}')`;
            planetImage.style.backgroundRepeat = 'no-repeat';
            planetImage.style.backgroundPosition = 'center';
            planetImage.style.backgroundSize = `${planet.size.large}`, `${planet.size.large}`;
            planetImage.style.width = planet.size.large;
            planetImage.style.height = planet.size.large;  
        }
    });

    // Geology Button
    geologyBtn.addEventListener('click', () => {
        planetDesc.innerText = planet.geology.content;
        planetLink.href = planet.geology.source;
        planetImage.src = `url('${planet.images.geology}'), url('${planet.images.planet}')`;
        geologyImage.style.display = 'block';
        geologyBtn.style.borderBottom = `4px solid ${planet.color}`;
        overviewBtn.style.borderBottom = null;
        structureBtn.style.borderBottom = null;

        if (vw < 768) {
            planetImage.style.background = `url('${planet.images.geology}'), url('${planet.images.planet}`;
            planetImage.style.backgroundRepeat = 'no-repeat';
            planetImage.style.backgroundPosition = 'center';
            planetImage.style.backgroundSize = `${planet.geologySize.small}`, `${planet.size.small}`, `${planet.size.small}`;
            planetImage.style.width = planet.size.small;
            planetImage.style.height = planet.size.small;
            geologyImage.src = planet.images.geology;
        } else if (vw <= 992 && vw >= 768) {
            planetImage.style.background = `url('${planet.images.geology}'), url('${planet.images.planet}')`;
            planetImage.style.backgroundRepeat = 'no-repeat';
            planetImage.style.backgroundPosition = 'center';
            planetImage.style.backgroundSize = `${planet.geologySize.medium}`, `${planet.size.medium}`, `${planet.size.medium}`;
            planetImage.style.width = planet.size.medium;
            planetImage.style.height = planet.size.medium;
        } else {
            planetImage.style.background = `url('${planet.images.geology}'), url('${planet.images.planet}')`;
            planetImage.style.backgroundRepeat = 'no-repeat';
            planetImage.style.backgroundPosition = 'center';
            planetImage.style.backgroundSize = `${planet.geologySize.large}`, `${planet.size.large}`, `${planet.size.large}`;
            planetImage.style.width = planet.size.large;
            planetImage.style.height = planet.size.large;
        }
    });


}


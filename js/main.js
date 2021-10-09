
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

let id = 0;

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
    let currentState = 'overview';
    planetName.innerText = planet.name;
    planetDesc.innerText = planet.overview.content;
    planetLink.href = planet.overview.source;
    rotation.innerText = planet.rotation;
    revolution.innerText = planet.revolution;
    radius.innerText = planet.radius;
    temperature.innerText = planet.temperature;
    planetImage.src = planet.images.planet;
    geologyImage.style.display = 'none';
    
    if (window.innerWidth < 768) {
        planetImage.style.height = planet.size.small;
        planetImage.style.width = planet.size.small;
    } else if (window.innerWidth >= 768 && window.innerWidth <= 992) {
        planetImage.style.height = planet.size.medium;
        planetImage.style.width = planet.size.medium;
    } else {
        planetImage.style.height = planet.size.large;
        planetImage.style.width = planet.size.large;
    }

    overviewBtn.addEventListener('click', () => {
        currentState = 'overview';
        planetDesc.innerText = planet.overview.content;
        planetLink.href = planet.overview.source;
        planetImage.src = planet.images.planet;
        geologyImage.style.display = 'none';
        overviewBtn.style.backgroundColor = `#${planet.color}`;
        structureBtn.style.backgroundColor ='transparent';
        geologyBtn.style.backgroundColor = 'transparent';

        if (window.innerWidth < 768) {
            overviewBtn.style.borderBottom = `4px solid #${planet.color}`;
            overviewBtn.style.background = 'transparent';
            geologyBtn.style.borderBottom = 'transparent';
            structureBtn.style.borderBottom = 'transparent';
        }
    })

    // Structure Button 
    structureBtn.addEventListener('click', () => {
        planetDesc.innerText = planet.structure.content;
        planetLink.href = planet.structure.source;
        planetImage.src = planet.images.internal;
        geologyImage.style.display = 'none';
        overviewBtn.style.backgroundColor = 'transparent';
        structureBtn.style.backgroundColor = `#${planet.color}`;
        geologyBtn.style.backgroundColor = 'transparent';
        
        if (window.innerWidth < 768) {
            structureBtn.style.borderBottom = `4px solid #${planet.color}`;
            structureBtn.style.background = 'transparent';
            geologyBtn.style.borderBottom = 'transparent';
            overviewBtn.style.borderBottom = 'transparent';
        }
    });

    // Geology Button
    geologyBtn.addEventListener('click', () => {
        planetDesc.innerText = planet.structure.content;
        planetLink.href = planet.structure.source;
        planetImage.src = planet.images.planet;
        geologyImage.src = planet.images.geology;
        geologyImage.style.display = 'block';
        geologyImage.style.position = 'absolute';
        overviewBtn.style.backgroundColor = 'transparent';
        structureBtn.style.backgroundColor = 'transparent';
        geologyBtn.style.backgroundColor = `#${planet.color}`;

        if (window.innerWidth < 768) {
            geologyImage.style.height = planet.geologysize.small;
            geologyImage.style.width = planet.geologysize.small;
        } else if (window.innerWidth >= 768 && window.innerWidth <= 992) {
            geologyImage.style.height = planet.geologysize.medium;
            geologyImage.style.width = planet.geologysize.medium;   
        } else {
            geologyImage.style.height = planet.geologysize.large;
            geologyImage.style.width = planet.geologysize.large;
        }
    });
    
}


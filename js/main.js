
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
//const planetLink = document.querySelector('.nav__link');
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

// Buttons Mobile
const overviewBtnMobile = document.querySelector('.btn-overview--mobile');
const structureBtnMobile = document.querySelector('.btn-structure--mobile');
const geologyBtnMobile = document.querySelector('.btn-geology--mobile');


function displayPlanetInfo(planet) {
    planetName.innerText = planet.name;
    planetDesc.innerText = planet.overview.content;
    source.href = planet.overview.source;
    rotation.innerText = planet.rotation;
    revolution.innerText = planet.revolution;
    radius.innerText = planet.radius;
    temperature.innerText = planet.temperature;
    planetImage.src = planet.images.planet;
    //geologyImage.style.display = 'none';
    
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

    // Overview Button mobile
    overviewBtnMobile.addEventListener('click', () => {
        planetDesc.innerText = planet.overview.content;
        source.href = planet.overview.source;
        planetImage.src = planet.images.planet;
        geologyImage.style.display = 'none';
        overviewBtnMobile.style.backgroundColor = 'transparent';
        structureBtnMobile.style.backgroundColor = 'transparent';
        geologyBtnMobile.style.backgroundColor = 'transparent';

        
        if (window.innerWidth < 768) {
            overviewBtnMobile.style.borderBottom = `4px solid #${planet.color}`;
            overviewBtnMobile.style.background = 'transparent';
            //overviewBtn.style.display = 'none';
            geologyBtnMobile.style.borderBottom = 'transparent';
            structureBtnMobile.style.borderBottom = 'transparent';
        } 
    });

    // Overview Button-- Tablet
    overviewBtn.addEventListener('click', () => {
        planetDesc.innerText = planet.overview.content;
        source.href = planet.overview.source;
        planetImage.src = planet.images.planet;
        geologyImage.style.display = 'none';
        overviewBtn.style.backgroundColor = `#${planet.color}`;
        structureBtn.style.backgroundColor = 'transparent';
        geologyBtn.style.backgroundColor = 'transparent';

        
        if (window.innerWidth >= 768) {
            overviewBtn.style.borderBottom = 'transparent';
            overviewBtn.style.background = `#${planet.color}`;
            geologyBtn.style.backgroundColor = 'transparent';
            structureBtn.style.backgroundColor = 'transparent';
        } 
    });


    // Structure Button -- Mobile
    structureBtnMobile.addEventListener('click', () => {
        planetDesc.innerText = planet.structure.content;
        source.href = planet.structure.source;
        planetImage.src = planet.images.internal;
        geologyImage.style.display = 'none';
        overviewBtnMobile.style.backgroundColor = 'transparent';
        structureBtnMobile.style.backgroundColor = 'transparent';
        geologyBtnMobile.style.backgroundColor = 'transparent';
        
        // Button mobile
        if (window.innerWidth < 768) {
            structureBtnMobile.style.borderBottom = `4px solid #${planet.color}`;
            structureBtnMobile.style.background = 'transparent';
            //structureBtn.style.display = 'none';
            geologyBtnMobile.style.borderBottom = 'transparent';
            overviewBtnMobile.style.borderBottom = 'transparent';
        }
    });

    // Structure Button-- Tablet 
    structureBtn.addEventListener('click', () => {
        planetDesc.innerText = planet.structure.content;
        source.href = planet.structure.source;
        planetImage.src = planet.images.internal;
        geologyImage.style.display = 'none';
        structureBtn.style.backgroundColor = `#${planet.color}`;
        geologyBtn.style.backgroundColor = 'transparent';
        overviewBtn.style.backgroundColor = 'transparent';

        
        if (window.innerWidth >= 768) {
            structureBtn.style.borderBottom = 'transparent';
            structureBtn.style.background = `#${planet.color}`;
            geologyBtn.style.backgroundColor = 'transparent';
            overviewBtn.style.backgroundColor = 'transparent';
        } 
    });

    // Geology Button-- Mobile
    geologyBtnMobile.addEventListener('click', () => {
        planetDesc.innerText = planet.geology.content;
        source.href = planet.geology.source;
        planetImage.src = planet.images.planet;
        geologyImage.src = planet.images.geology;
        geologyImage.style.display = 'block';
        overviewBtnMobile.style.backgroundColor = 'transparent';
        structureBtnMobile.style.backgroundColor = 'transparent';
        geologyBtnMobile.style.backgroundColor = 'transparent';

        if (window.innerWidth < 768) {
            geologyImage.style.height = planet.geologysize.small.height;
            geologyImage.style.width = planet.geologysize.small.width;
        } else if (window.innerWidth >= 768 && window.innerWidth <= 992) {
            geologyImage.style.height = planet.geologysize.medium.height;
            geologyImage.style.width = planet.geologysize.medium.width;   
        } else {
            geologyImage.style.height = planet.geologysize.large.height;
            geologyImage.style.width = planet.geologysize.large.width;
        }

        //Button mobile
        if (window.innerWidth < 768) {
            geologyBtnMobile.style.borderBottom = `4px solid #${planet.color}`;
            geologyBtnMobile.style.backgroundColor = 'transparent';
            structureBtnMobile.style.borderBottom = 'transparent';
            overviewBtnMobile.style.borderBottom = 'transparent';
        }
    });

    // Geology Button-- Tablet 
    geologyBtn.addEventListener('click', () => {
        planetDesc.innerText = planet.geology.content;
        source.href = planet.geology.source;
        planetImage.src = planet.images.planet;
        geologyImage.src = planet.images.geology;
        geologyImage.style.display = 'block';
        overviewBtn.style.backgroundColor = 'transparent';
        structureBtn.style.backgroundColor = 'transparent';
        geologyBtn.style.backgroundColor = 'transparent';

        if (window.innerWidth < 768) {
            geologyImage.style.height = planet.geologysize.small.height;
            geologyImage.style.width = planet.geologysize.small.width;
        } else if (window.innerWidth >= 768 && window.innerWidth <= 992) {
            geologyImage.style.height = planet.geologysize.medium.height;
            geologyImage.style.width = planet.geologysize.medium.width;   
        } else {
            geologyImage.style.height = planet.geologysize.large.height;
            geologyImage.style.width = planet.geologysize.large.width;
        }

        //Button mobile
        if (window.innerWidth >= 768) {
            geologyBtn.style.borderBottom = 'transparent';
            geologyBtn.style.backgroundColor = `#${planet.color}`;
            structureBtn.style.backgroundColor = 'transparent';
            overviewBtn.style.backgroundColor = 'transparent';
        }
    });
    
}





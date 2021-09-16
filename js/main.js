

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
const overview = document.querySelector('.btn-overview');
const structure = document.querySelector('.btn-structure');
const geology = document.querySelector('.btn-geology');

const vw = document.documentElement.clientWidth; // For window breakpoints



// Objects for planet information
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

// Colors based on planets
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

// Planet image sizes by breakpoint
const planetSize = {
    0: { large: "290px", medium: "184px", small: "111px"},
    1: { large: "400px", medium: "253px", small: "154px" },
    2: { large: "450px", medium: "285px", small: "173px" },
    3: { large: "336px", medium: "213px", small: "129px" },
    4: { large: "582px", medium: "369px", small: "224px" },
    5: { large: "666.09px", medium: "422px", small: "256px" },
    6: { large: "458px", medium: "290px", small: "176px" },
    7: { large: "450px", medium: "285px", small: "173px" }
}

// Geology images sizes
const geologySize = {
    large: "163px 199px",
    medium: "80px 93.25px",
    small: "50px 58.28px"
}

let currentPlanet = planets[0];
let currentState = "overview";

fetchData();
changeBtn();


// Get information from data.json
let data;
function fetchData() {
    fetch('data.json').then(response => {
        if (!response.ok) {
            throw Error("ERROR");
        }
        return response.json();
    })
        .then(json => {
            data = json;
            //console.log(data);
            displayPlanetInfo();
        });
    
}

fetchData();


// Change buttons to change data 
function changeBtn() {
    if (currentState === "overview") {
        overview.style.backgroundColor = `${btnColors[currentPlanet]}`;
        structure.style.backgroundColor = 'transparent';
        geology.style.backgroundColor = 'transparent';
    } else if (currentState === "structure") {
        overview.style.backgroundColor = 'transparent';
        structure.style.backgroundColor = `${btnColors[currentPlanet]}`;
        geology.style.backgroundColor = 'transparent';
    } else {
        overview.style.backgroundColor = 'transparent';
        structure.style.backgroundColor = 'transparent';
        geology.style.backgroundColor = `${btnColors[currentPlanet]}`;
    }
}

changeBtn();


function overviewBtn() {
    currentState = "overview"
    fetchData();
    changeBtn();
}

function structureBtn() {
    currentState = "structure"
    fetchData();
    changeBtn();
}

function geologyBtn() {
    currentState = "geology"
    fetchData();
    changeBtn();
}




function displayPlanetInfo() {
    /*planetName.innerText = data[currentPlanet].name;
    rotation.innerText = data[currentPlanet].rotation;
    revolution.innerText = data[currentPlanet].revolution;
    radius.innerText = data[currentPlanet].radius;
    temperature.innerText = data[currentPlanet].temperature;
    console.log(planetName);*/
}

displayPlanetInfo();
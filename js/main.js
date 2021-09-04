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
const planetName = document.querySelector(".description-planet-title");
const planetLink = document.querySelector(".planet-item");
const planet = document.querySelector(".planet-image");
const planetDesc = document.querySelector(".description-planet-text");
const source = document.querySelector(".source-link");
const rotation = document.querySelector(".rotation-time");
const revolution = document.querySelector(".revolution-time");
const radius = document.querySelector(".radius");
const temperature = document.querySelector(".average-temp");

//Buttons
const overview = document.querySelector(".btn-overview");
const structure = document.querySelector(".btn-structure");
const geology = document.querySelector(".btn-geology");

const vw = document.documentElement.clientWidth;


// Objects for planet information

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

const buttonColors = {
    0: "419EBB",
    1: "EDA249",
    2: "6D2ED5",
    3: "D14C32",
    4: "D83A34",
    5: "CD5120",
    6: "1EC1A2",
    7: "2D68F0"
}

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


const geologySize = {
    large: "163px 199px",
    medium: "80px 93.25px",
    small: "50px 58.28px"
}

// Starting with first planet Mercury

let currentPlanet = 0;
let currentDesc = "overview";

fetchData();
changeBtn();

function planetInput(inputPlanet) {
    currentPlanet = inputPlanet;
    currentDesc = "overview";
    fetchData();
    changeBtn();
}

function overviewInput() {
    currentDesc = "overview";
    fetchData();
    changeBtn();
}

function structureInput() {
    currentDesc = "structure";
    fetchData();
    changeBtn();
}

function geologyInput() {
    currentDesc = "geology";
    fetchData();
    changeBtn();
}

planetLink.addEventListener("click", changePlanet);
function changePlanet() {
    for (let i = 0; i < planets.length; i++) {
        planetInput();
    }
}

var data;

function fetchData() {
    if (typeof data === "undefined") {
        fetch('data.json').then(response => response.json()).then(json => {
            data = json;
            displayInfo();
        });
    }
    else displayInfo();
}

// Displaying planet information

function displayInfo() {

    planetName.innerText = data[currentPlanet].name;
    rotation.innerText = data[currentPlanet].rotation;
    revolution.innerText = data[currentPlanet].revolution;
    radius.innerText = data[currentPlanet].radius;
    temperature.innerText = data[currentPlanet].temperature;

    if (currentDesc === "overview") {
        planetDesc.innerText = data[currentPlanet].overview.content;
        source.href = data[currentPlanet].overview.source;
        planet.style.background = `url("/assets/planet-${planets[currentPlanet]}.svg")`;
        planet.style.backgroundRepeat = "no-repeat";
        planet.style.backgroundPosition = "center";

        // Breakpoints for Overview
        if (vw < 768) {
            planet.style.backgroundSize = `${planetSize[currentPlanet].small}`, `${planetSize[currentPlanet].small}`;
            planet.style.height = `${planetSize[currentPlanet].small}`;
            planet.style.width = `${planetSize[currentPlanet].small}`;
        } else if (vw>=768 && vw <=992) {
            planet.style.backgroundSize = `${planetSize[currentPlanet].medium}`, `${planetSize[currentPlanet].medium}`;
            planet.style.height = `${planetSize[currentPlanet].medium}`;
            planet.style.width = `${planetSize[currentPlanet].medium}`;
        } else {
            planet.style.backgroundSize = `${planetSize[currentPlanet].large}`, `${planetSize[currentPlanet].large}`;
            planet.style.height = `${planetSize[currentPlanet].large}`;
            planet.style.width = `${planetSize[currentPlanet].large}`;
        }
    } else if (currentDesc === "structure") {
        planetDesc.innerText = data[currentPlanet].structure.content;
        source.href = data[currentPlanet].structure.source;
        planet.style.background = `url("/assets/planet-${planets[currentPlanet]}-internal.svg")`;
        planet.style.backgroundRepeat = "no-repeat";
        planet.style.backgroundPosition = "center";

        // Breakpoints for Structure
        if (vw < 768) {
            planet.style.backgroundSize = `${planetSize[currentPlanet].small}`, `${planetSize[currentPlanet].small}`;
            planet.style.height = `${planetSize[currentPlanet].small}`;
            planet.style.width = `${planetSize[currentPlanet].small}`;
        } else if (vw>=768 && vw <=992) {
            planet.style.backgroundSize = `${planetSize[currentPlanet].medium}`, `${planetSize[currentPlanet].medium}`;
            planet.style.height = `${planetSize[currentPlanet].medium}`;
            planet.style.width = `${planetSize[currentPlanet].medium}`;
        } else {
            planet.style.backgroundSize = `${planetSize[currentPlanet].large}`, `${planetSize[currentPlanet].large}`;
            planet.style.height = `${planetSize[currentPlanet].large}`;
            planet.style.width = `${planetSize[currentPlanet].large}`;
        }

    } else  {
        planetDesc.innerText = data[currentPlanet].geology.content;
        source.href = data[currentPlanet].geology.source;
        planet.style.background = `url("/assets/geology-${planets[currentPlanet]}.png"), url("/assets/planet-${planets[currentPlanet]}.svg")`;
        planet.style.backgroundRepeat = "no-repeat, no-repeat";
        planet.style.backgroundPosition = "50% 100% center";

        // Breakpoints for Geology
        if (vw < 768) {
            planet.style.backgroundSize = `${geologySize.small}, ${planetSize[currentPlanet].small}, ${planetSize[currentPlanet].small}`;
            planet.style.height = `${planetSize[currentPlanet].small}`;
            planet.style.width = `${planetSize[currentPlanet].small}`;
        } else if (vw>=768 && vw <=992) {
            planet.style.backgroundSize = `${geologySize.medium}, ${planetSize[currentPlanet].medium}, ${planetSize[currentPlanet].medium}`;
            planet.style.height = `${planetSize[currentPlanet].medium}`;
            planet.style.width = `${planetSize[currentPlanet].medium}`;
        } else {
            planet.style.backgroundSize = `${geologySize.large}, ${planetSize[currentPlanet].large}`, `${planetSize[currentPlanet].large}`;
            planet.style.height = `${planetSize[currentPlanet].large}`;
            planet.style.width = `${planetSize[currentPlanet].large}`;
        }
    }
} // displayInfo

function changeBtn() { 
    if (currentDesc === "overview") {
        overview.style.backgroundColor = `#$(btnColors[currentPlanet])`;
        structure.style.backgroundColor = "transparent";
        geology.style.backgroundColor = "transparent";
    } else if (currentDesc === "structure") {
        overview.style.backgroundColor = "tranparent";
        structure.style.backgroundColor = `#$(btnColors[currentPlanet])`;
        geology.style.backgroundColor = "transparent";
    } else {
        overview.style.backgroundColor = "tranparent";
        structure.style.backgroundColor = "transparent";
        geology.style.backgroundColor = `#$(btnColors[currentPlanet])`;
    }
}
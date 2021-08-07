const deletebtn = document.querySelector('#delete');
const burgerIcon = document.querySelector('#burger');
const navLinks = document.querySelector('#nav-links');
const dropDown = document.querySelector('#dropdown');
const AddTag = document.querySelector('#addTag');
const addRepo = document.querySelector('#addRepo');
const body = document.querySelector('body');

const webD = document.querySelector('#webD');
const actwebD = document.querySelector('#ACTwebD');

const softwareD = document.querySelector('#softwareD');
const actsoftwareD = document.querySelector('#ACTsoftwareD');

const gameD = document.querySelector('#gameD');
const actgameD = document.querySelector('#ACTgameD');

const Beginner = document.querySelector('#Beginner')
const actBeginner = document.querySelector('#ACTBeginner');

burgerIcon.addEventListener('click', function(){
    console.log("Changed Active");
    burgerIcon.classList.toggle('is-active');
    navLinks.classList.toggle('is-active');
});

dropDown.addEventListener('click', function(){
    console.log("Changed Active");
    dropDown.classList.toggle('is-active');
});

//------------------------dont look under here------------------
webD.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actwebD.classList.toggle("is-hidden");
    actwebD.classList.toggle("fadeIn");
});

softwareD.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actsoftwareD.classList.toggle("is-hidden");
    actsoftwareD.classList.toggle("fadeIn");
});

gameD.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actgameD.classList.toggle("is-hidden");
    actgameD.classList.toggle("fadeIn");
});


Beginner.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actBeginner.classList.toggle("is-hidden");
    actBeginner.classList.toggle("fadeIn");
});
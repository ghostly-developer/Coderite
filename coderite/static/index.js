const deletebtn = document.querySelector('#delete');
const burgerIcon = document.querySelector('#burger');
const navLinks = document.querySelector('#nav-links');
const dropDown = document.querySelector('#dropdown');
const AddTag = document.querySelector('#addTag');
const addRepo = document.querySelector('#addRepo');
const body = document.querySelector('body');

const webD = document.querySelector('#webD');
const actwebD = document.querySelector('#ACTwebD');

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


webD.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actwebD.classList.toggle("is-hidden");
});

Beginner.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actBeginner.classList.toggle("is-hidden");
    actBeginner.classList.add("fadeIn");
});
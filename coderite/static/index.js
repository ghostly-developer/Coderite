const deletebtn = document.querySelector('#delete');
const burgerIcon = document.querySelector('#burger');
const navLinks = document.querySelector('#nav-links');
const dropDown = document.querySelector('#dropdown');
const AddTag = document.querySelector('#addTag');
const addRepo = document.querySelector('#addRepo');
const body = document.querySelector('body');

const webD = document.querySelector('#webD');


burgerIcon.addEventListener('click', function(){
    console.log("Changed Active");
    burgerIcon.classList.toggle('is-active');
    navLinks.classList.toggle('is-active');
});

dropDown.addEventListener('click', function(){
    console.log("Changed Active");
    dropDown.classList.toggle('is-active');
});


deletebtn.addEventListener('click', function(){
    console.log("Add Tag De-active");
    AddTag.classList.toggle("is-hidden");
});

webD.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    webD.classList.toggle("is-active");
});
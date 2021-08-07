const deletebtn = document.querySelector('#delete');
const burgerIcon = document.querySelector('#burger');
const navLinks = document.querySelector('#nav-links');
const dropDown = document.querySelector('#dropdown');
const AddTBtn = document.querySelector('#addTBtn');
const AddTag = document.querySelector('#addTag');
const addRepo = document.querySelector('#addRepo');
const body = document.querySelector('body');
const allBtn = document.querySelectorAll('#allBtn');


burgerIcon.addEventListener('click', function(){
    console.log("Changed Active");
    burgerIcon.classList.toggle('is-active');
    navLinks.classList.toggle('is-active');
});

dropDown.addEventListener('click', function(){
    console.log("Changed Active");
    dropDown.classList.toggle('is-active');
});

addTBtn.addEventListener('click', function(){
    console.log("Add Tag Active")
    AddTag.classList.toggle("is-hidden");
});

deletebtn.addEventListener('click', function(){
    console.log("Add Tag De-active");
    AddTag.classList.toggle("is-hidden");
});
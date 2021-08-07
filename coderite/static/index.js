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

const OSD = document.querySelector('#OSD');
const actOSD = document.querySelector('#ACTOSD');

const penT = document.querySelector('#penT');
const actpenT = document.querySelector('#ACTpenT');

const Beginner = document.querySelector('#Beginner')
const actBeginner = document.querySelector('#ACTBeginner');

const Intermediate = document.querySelector('#Intermediate')
const actIntermediate = document.querySelector('#ACTIntermediate');

const Expert = document.querySelector('#Expert')
const actExpert = document.querySelector('#ACTExpert');

const CPP = document.querySelector('#CPP')
const actCPP = document.querySelector('#ACTCPP');

const JS = document.querySelector('#JS')
const actJS = document.querySelector('#ACTJS');

const CSharp = document.querySelector('#CSharp')
const actCSharp = document.querySelector('#ACTCSharp');

const PY = document.querySelector('#PY')
const actPY = document.querySelector('#ACTPY');

const GOL = document.querySelector('#GOL')
const actGOL = document.querySelector('#ACTGOL');

const HTMLCSS = document.querySelector('#HTMLCSS')
const actHTMLCSS = document.querySelector('#ACTHTMLCSS');

const PHP = document.querySelector('#PHP')
const actPHP = document.querySelector('#ACTPHP');

const JAVA = document.querySelector('#JAVA')
const actJAVA = document.querySelector('#ACTJAVA');

const SWI = document.querySelector('#SWI')
const actSWI = document.querySelector('#ACTSWI');

const ASM86 = document.querySelector('#ASM86')
const actASM86 = document.querySelector('#ACTASM86');

const ASM64 = document.querySelector('#ASM64')
const actASM64 = document.querySelector('#ACTASM64');

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

OSD.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actOSD.classList.toggle("is-hidden");
    actOSD.classList.toggle("fadeIn");
});

penT.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actpenT.classList.toggle("is-hidden");
    actpenT.classList.toggle("fadeIn");
});

Beginner.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actBeginner.classList.toggle("is-hidden");
    actBeginner.classList.toggle("fadeIn");
});

Intermediate.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actIntermediate.classList.toggle("is-hidden");
    actIntermediate.classList.toggle("fadeIn");
});

Expert.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actExpert.classList.toggle("is-hidden");
    actExpert.classList.toggle("fadeIn");
});

//-----------------------LANGUAGES--------------------------------------------------------

CPP.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actCPP.classList.toggle("is-hidden");
    actCPP.classList.toggle("fadeIn");
});

JS.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actJS.classList.toggle("is-hidden");
    actJS.classList.toggle("fadeIn");
});

CSharp.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actCSharp.classList.toggle("is-hidden");
    actCSharp.classList.toggle("fadeIn");
});

Expert.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actExpert.classList.toggle("is-hidden");
    actExpert.classList.toggle("fadeIn");
});

PY.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actPY.classList.toggle("is-hidden");
    actPY.classList.toggle("fadeIn");
});

GOL.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actGOL.classList.toggle("is-hidden");
    actGOL.classList.toggle("fadeIn");
});

HTMLCSS.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actHTMLCSS.classList.toggle("is-hidden");
    actHTMLCSS.classList.toggle("fadeIn");
});

PHP.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actPHP.classList.toggle("is-hidden");
    actPHP.classList.toggle("fadeIn");
});

JAVA.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actJAVA.classList.toggle("is-hidden");
    actJAVA.classList.toggle("fadeIn");
});

SWI.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actSWI.classList.toggle("is-hidden");
    actSWI.classList.toggle("fadeIn");
});

ASM86.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actASM86.classList.toggle("is-hidden");
    actASM86.classList.toggle("fadeIn");
});

ASM64.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    actASM64.classList.toggle("is-hidden");
    actASM64.classList.toggle("fadeIn");
});
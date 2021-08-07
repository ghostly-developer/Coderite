const deletebtn = document.querySelector('#delete');
const burgerIcon = document.querySelector('#burger');
const navLinks = document.querySelector('#nav-links');
const dropDown = document.querySelector('#dropdown');
const AddTag = document.querySelector('#addTag');
const addRepo = document.querySelector('#addRepo');
const body = document.querySelector('body');
const resetTag = document.querySelector('#resetTag')

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

const RUBY = document.querySelector('#RUBY')
const actRUBY = document.querySelector('#ACTRUBY');

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
    webD.classList.toggle("has-background-danger-dark");
    webD.classList.toggle("has-text-white");
    actwebD.classList.toggle("is-hidden");
    actwebD.classList.add("fadeIn");
    
});

softwareD.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    softwareD.classList.toggle("has-background-danger-dark");
    softwareD.classList.toggle("has-text-white");
    actsoftwareD.classList.toggle("is-hidden");
    actsoftwareD.classList.add("fadeIn");
});

gameD.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    gameD.classList.toggle("has-background-danger-dark");
    gameD.classList.toggle("has-text-white");
    actgameD.classList.toggle("is-hidden");
    actgameD.classList.add("fadeIn");
});

OSD.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    OSD.classList.toggle("has-background-danger-dark");
    OSD.classList.toggle("has-text-white");
    actOSD.classList.toggle("is-hidden");
    actOSD.classList.add("fadeIn");
});

penT.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    penT.classList.toggle("has-background-danger-dark");
    penT.classList.toggle("has-text-white");
    actpenT.classList.toggle("is-hidden");
    actpenT.classList.add("fadeIn");
});

Beginner.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    Beginner.classList.toggle("has-background-link-dark");
    Beginner.classList.toggle("has-text-white");
    actBeginner.classList.toggle("is-hidden");
    actBeginner.classList.add("fadeIn");
});

Intermediate.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    Intermediate.classList.toggle("has-background-link-dark");
    Intermediate.classList.toggle("has-text-white");
    actIntermediate.classList.toggle("is-hidden");
    actIntermediate.classList.add("fadeIn");
});

Expert.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    Expert.classList.toggle("has-background-link-dark");
    Expert.classList.toggle("has-text-white");
    actExpert.classList.toggle("is-hidden");
    actExpert.classList.add("fadeIn");
});

//-----------------------LANGUAGES--------------------------------------------------------

CPP.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    CPP.classList.toggle("has-background-info-dark");
    CPP.classList.toggle("has-text-white");
    actCPP.classList.toggle("is-hidden");
    actCPP.classList.add("fadeIn");
});

JS.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    JS.classList.toggle("has-background-info-dark");
    JS.classList.toggle("has-text-white");
    actJS.classList.toggle("is-hidden");
    actJS.classList.add("fadeIn");
});

CSharp.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    CSharp.classList.toggle("has-background-info-dark");
    CSharp.classList.toggle("has-text-white");
    actCSharp.classList.toggle("is-hidden");
    actCSharp.classList.add("fadeIn");
});

PY.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    PY.classList.toggle("has-background-info-dark");
    PY.classList.toggle("has-text-white");
    actPY.classList.toggle("is-hidden");
    actPY.classList.add("fadeIn");
});

GOL.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    GOL.classList.toggle("has-background-info-dark");
    GOL.classList.toggle("has-text-white");
    actGOL.classList.toggle("is-hidden");
    actGOL.classList.add("fadeIn");
});

HTMLCSS.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    HTMLCSS.classList.toggle("has-background-info-dark");
    HTMLCSS.classList.toggle("has-text-white");
    actHTMLCSS.classList.toggle("is-hidden");
    actHTMLCSS.classList.add("fadeIn");
});

PHP.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    PHP.classList.toggle("has-background-info-dark");
    PHP.classList.toggle("has-text-white");
    actPHP.classList.toggle("is-hidden");
    actPHP.classList.add("fadeIn");
});

JAVA.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    JAVA.classList.toggle("has-background-info-dark");
    JAVA.classList.toggle("has-text-white");
    actJAVA.classList.toggle("is-hidden");
    actJAVA.classList.add("fadeIn");
});

RUBY.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    RUBY.classList.toggle("has-background-info-dark");
    RUBY.classList.toggle("has-text-white");
    actRUBY.classList.toggle("is-hidden");
    actRUBY.classList.add("fadeIn");
});

SWI.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    SWI.classList.toggle("has-background-info-dark");
    SWI.classList.toggle("has-text-white");
    actSWI.classList.toggle("is-hidden");
    actSWI.classList.add("fadeIn");
});

ASM86.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    ASM86.classList.toggle("has-background-info-dark");
    ASM86.classList.toggle("has-text-white");
    actASM86.classList.toggle("is-hidden");
    actASM86.classList.add("fadeIn");
});

ASM64.addEventListener('click', function(){
    console.log("They should invent radio-functioning buttons");
    ASM64.classList.toggle("has-background-info-dark");
    ASM64.classList.toggle("has-text-white");
    actASM64.classList.toggle("is-hidden");
    actASM64.classList.add("fadeIn");
});



//----------------RESET---------------------------------
resetTag.addEventListener('click', function(){
    console.log("ALL TAGS RESET");

    //--------------ACTIVE TAG RESET---------------
    actwebD.classList.add("is-hidden");
    actsoftwareD.classList.add("is-hidden");
    actgameD.classList.add("is-hidden");
    actOSD.classList.add("is-hidden");
    actpenT.classList.add("is-hidden");
    actBeginner.classList.add("is-hidden");
    actIntermediate.classList.add("is-hidden");
    actExpert.classList.add("is-hidden");
    actCPP.classList.add("is-hidden");
    actJS.classList.add("is-hidden");
    actCSharp.classList.add("is-hidden");
    actPY.classList.add("is-hidden");
    actGOL.classList.add("is-hidden");
    actHTMLCSS.classList.add("is-hidden");
    actPHP.classList.add("is-hidden");
    actJAVA.classList.add("is-hidden");
    actRUBY.classList.add("is-hidden");
    actSWI.classList.add("is-hidden");
    actASM86.classList.add("is-hidden");
    actASM64.classList.add("is-hidden");


    //-------------Selected Styles Reset Pt.1------------------
    webD.classList.remove("has-background-danger-dark");
    softwareD.classList.remove("has-background-danger-dark");
    gameD.classList.remove("has-background-danger-dark");
    OSD.classList.remove("has-background-danger-dark");
    penT.classList.remove("has-background-danger-dark");

    Beginner.classList.remove("has-background-link-dark");
    Intermediate.classList.remove("has-background-link-dark");
    Expert.classList.remove("has-background-link-dark");

    CPP.classList.remove("has-background-info-dark");
    JS.classList.remove("has-background-info-dark");
    CSharp.classList.remove("has-background-info-dark");
    PY.classList.remove("has-background-info-dark");
    GOL.classList.remove("has-background-info-dark");
    HTMLCSS.classList.remove("has-background-info-dark");
    PHP.classList.remove("has-background-info-dark");
    JAVA.classList.remove("has-background-info-dark");
    RUBY.classList.remove("has-background-info-dark");
    SWI.classList.remove("has-background-info-dark");
    ASM86.classList.remove("has-background-info-dark");
    ASM64.classList.remove("has-background-info-dark");

    //-------------Selected Styles Reset Pt.2------------------
    webD.classList.remove("has-text-white");
    softwareD.classList.remove("has-text-white");
    gameD.classList.remove("has-text-white");
    OSD.classList.remove("has-text-white");
    penT.classList.remove("has-text-white");

    Beginner.classList.remove("has-text-white");
    Intermediate.classList.remove("has-text-white");
    Expert.classList.remove("has-text-white");
    
    CPP.classList.remove("has-text-white");
    JS.classList.remove("has-text-white");
    CSharp.classList.remove("has-text-white");
    PY.classList.remove("has-text-white");
    GOL.classList.remove("has-text-white");
    HTMLCSS.classList.remove("has-text-white");
    PHP.classList.remove("has-text-white");
    JAVA.classList.remove("has-text-white");
    RUBY.classList.remove("has-text-white");
    SWI.classList.remove("has-text-white");
    ASM86.classList.remove("has-text-white");
    ASM64.classList.remove("has-text-white");

});
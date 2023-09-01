const whoIam = document.getElementById('whoIamContent');
const whatICanGive = document.getElementById('whatICanGiveContent');
const cv = document.getElementById('cvContent');
const myProject = document.getElementById('myProjectContent');
const carouselOnly = document.getElementById('carouselOnly');
const kontakt = document.getElementById('kontaktContent');

function WhoIam() {
    clearAll();
    whoIam.classList.remove("d-none");
    whoIam.classList.add("d-inline");
};

function WhatICanGive() {
    clearAll();
    whatICanGive.classList.remove("d-none");
    whatICanGive.classList.add("d-inline");
};

function Cv() {
    clearAll();
    window.open("https://www.canva.com/design/DAFsQK5aa4E/51RHTyigXAwWCyqQk5PUjQ/view?utm_content=DAFsQK5aa4E&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink");
    document.getElementById("textScript").style.fontFamily= 'Caveat';
    document.getElementById("textScript").style.fontSize= '30px';
    cv.classList.remove("d-none");
    cv.classList.add("d-inline");
};

function MyProject() {
    clearAll();
    myProject.classList.add("active");
    carouselOnly.classList.remove("d-none");
};

function Kontakt() {
    clearAll();
    kontakt.classList.remove("d-none");
    kontakt.classList.add("d-inline");
};

function clearAll() {
    whoIam.classList.add("d-none");
    whatICanGive.classList.add("d-none");
    cv.classList.add("d-none");
    myProject.classList.remove("active");
    carouselOnly.classList.add("d-none");
    kontakt.classList.add("d-none");
    document.getElementById("textScript").style.fontFamily= 'Bricolage Grotesque', 'sans-serif';
    document.getElementById("textScript").style.fontSize= '22px';
}

document.getElementById('whoIam').addEventListener('click',WhoIam);
document.getElementById('whatICanGive').addEventListener('click',WhatICanGive);
document.getElementById('cv').addEventListener('click',Cv);
document.getElementById('myProject').addEventListener('click',MyProject);
document.getElementById('kontakt').addEventListener('click',Kontakt);
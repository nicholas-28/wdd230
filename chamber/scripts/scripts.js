function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

const datefieldUK = document.querySelector(".date");

const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);



datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


const date = new Date();

let currentYear = date.getFullYear();

let homeYear = document.querySelector('#year');

homeYear.innerHTML = currentYear;


let lastModification = document.lastModified;

let lastUpdated = document.getElementById('lastModified');
lastUpdated.innerHTML = `Last Modification: ${document.lastModified}`;

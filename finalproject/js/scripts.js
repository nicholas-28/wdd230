function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;


let lastModification = document.lastModified;

let lastUpdated = document.getElementById('lastModified');
lastUpdated.innerHTML = `Last Modification: ${document.lastModified}`;

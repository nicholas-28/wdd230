const requestURL = "https://nicholas-28.github.io/wdd230/chamber/json/data.json"
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const companies = jsonObject['companies'];
        companies.forEach(displayCompanies);
    });

function displayCompanies(company) {
    let card = document.createElement('section');
    let image = document.createElement('img');
    let name = document.createElement('h1');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let web = document.createElement('a');
    let membership = document.createElement('p');

    name.textContent = company.name;
    address.textContent =`📍${company.address}`;
    phone.textContent = `☎️ ${company.phone}`;
    web.textContent = `🌐 ${company.name} site`;
    membership.textContent = `👥 ${company.membership}`;

    web.setAttribute('href', company.url);
    image.setAttribute('src', company.image);
    image.setAttribute('alt', `Logo of ${company.name}`);
    image.setAttribute('loading', 'lazy');

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(web);
    card.appendChild(membership);

    document.querySelector('article.discovery').appendChild(card);
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");


gridbutton.addEventListener("click", () => {
	display.classList.add("grid-disc");
	display.classList.remove("list-disc");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list-disc");
	display.classList.remove("grid-disc");
}

const requestURL = "https://nicholas-28.github.io/wdd230/chamber/json/data.json"
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
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
    address.textContent = company.address;
    phone.textContent = company.phone;
    web.textContent = company.url;
    membership.textContent = company.membership;

    image.setAttribute('src', company.image);
    image.setAttribute('alt', `Logo of ${company.name}`);
    image.setAttribute('loading', 'lazy');

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(web);
    card.appendChild(membership);

    document.querySelector('div.cards').appendChild(card);
}
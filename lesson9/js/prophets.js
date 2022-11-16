const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
})
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);      
});

function displayProphets(prophet) {
    let card = document.createElement('section');
    let portrait = document.createElement('img');
    let name = document.createElement('h2');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');

    name.textContent = `${prophet.name} ${prophet.lastname}`;

    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    
    let order = getOrderEnd(prophet);

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${order} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(name);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);


    document.querySelector('div.cards').appendChild(card);
}

let getOrderEnd = (prophet) => {
    let orderEnd;
    if (prophet.order == 1){
        orderEnd = "st";
    } else if (prophet.order == 2) {
        orderEnd = "nd";
    } else if (prophet.order == 3) {
        orderEnd = "rd";
    }else {
        orderEnd = "th"
    }
    
    return (prophet.order + orderEnd)


}
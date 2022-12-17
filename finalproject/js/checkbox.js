const requestURL = "https://nicholas-28.github.io/wdd230/finalproject/json/fruits.json";
const checkbox = document.querySelector('.checkbox');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const fruits = jsonObject['fruits'];
        console.log(fruits)
        fruits.forEach(displayFruits);
    });

function displayFruits(fruit) {
    const fruits = fruit.name;
    const card = document.createElement('section');
    card.innerHTML = `
    <input type="checkbox" id="${fruits}" name="fruits" value="${fruits}">
    <label for="${fruits}">${fruits}</label><br>`;

    document.querySelector('.checkbox').appendChild(card);
    
}

const requestURL = "https://nicholas-28.github.io/wdd230/finalproject/json/fruits.json";
const div1 = document.querySelector('#select1');

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
    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    let option3 = document.createElement('option');

    option1.textContent= fruit.name;
    option1.setAttribute('value', fruit.name);
    document.querySelector('#select1').appendChild(option1);


    option2.textContent= fruit.name;
    option2.setAttribute('value', fruit.name);
    document.querySelector('#select2').appendChild(option2);


    option3.textContent= fruit.name;
    option3.setAttribute('value', fruit.name);
    document.querySelector('#select3').appendChild(option3);
}



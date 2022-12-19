const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';


let fruit1 = document.querySelector('#select1');
let fruit2 = document.querySelector('#select2');
let fruit3 = document.querySelector('#select3');
let form = document.querySelector('#mixform');

var data = [];
let counter = 0;

function findElement(arr, propValue) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i].name == propValue)
            return arr[i];

}
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const fruits = jsonObject;
        console.log(fruits)
        data = fruits;
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


form.addEventListener('submit', (event) => {

    counter = window.localStorage.getItem("mixcounter");
    const date = new Date;
    event.preventDefault();
    values1 = findElement(data, form.elements[3].value);
    values2 = findElement(data, form.elements[4].value);
    values3 = findElement(data, form.elements[5].value);

    alert("You have successfuly placed an order!" +
        "\nFirst Name: " + form.elements[0].value
        + "\nEmail: " + form.elements[1].value
        + "\nPhone: " + form.elements[2].value
        + "\nFruit 1: " + form.elements[3].value
        + "\nFruit 2: " + form.elements[4].value
        + "\nFruit 3: " + form.elements[5].value
        + "\nInstructions: " + form.elements[6].value
        +"\nOrder date: " + date.toUTCString() 
        + "\nThe total amount of:"
        + "\nCarbohydrates: " + (values1.nutritions.carbohydrates + values2.nutritions.carbohydrates + values3.nutritions.carbohydrates).toFixed(2) +"g"
        + "\nProtein: " + (values1.nutritions.protein + values2.nutritions.protein + values3.nutritions.protein).toFixed(2) +"g"
        + "\nFat: " + (values1.nutritions.fat + values2.nutritions.fat + values3.nutritions.fat).toFixed(2) +"g"
        + "\nSugar: " + (values1.nutritions.sugar + values2.nutritions.sugar + values3.nutritions.sugar).toFixed(2) +"g"
        + "\nCalories: " + (values1.nutritions.calories + values2.nutritions.calories + values3.nutritions.calories).toFixed(2) +"g"
    );
    form.reset();
    counter++;
    window.localStorage.setItem("mixcounter", counter);
});



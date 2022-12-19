const drinks = document.querySelector(".total_drinks");
let counter = Number(window.localStorage.getItem("mixcounter"));
drinks.innerHTML = counter;
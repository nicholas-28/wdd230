let d = new Date();

let day = d.getDate();
let month = d.getMonth() + 1;
let year = d.getFullYear();

if (day < 10) {
    day = "0" + day;
}
if (month < 10) {
    month = "0" + month;
}

document.getElementById("date").value = day + "/" + month + "/" + year;

let hours = d.getHours();
let mins = d.getMinutes();
let seconds = d.getSeconds();

if (hours < 10) {
    hours = "0" + hours; 
}
if (mins < 10) {
    mins = "0" + mins;
}

document.getElementById("time").value = hours + ":" + mins + ":" + seconds;

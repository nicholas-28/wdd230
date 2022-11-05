

const visitNum = document.querySelector(".visit-num");
const paragraph = document.querySelector(".visit p");

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;

let lastVisit = Number(window.localStorage.getItem("lastVisit"));
console.log(lastVisit)
const d = new Date();
const time = d.getTime();
console.log(time)
const dif = (time - lastVisit);
console.log(dif)


const difSeconds = Math.round(dif/1000);
const difMinutes = Math.round(dif/minute);
const difHours = Math.round(dif/hour);
const difDays = Math.round(dif/day);
let timeText = "Days since last visit: " + difDays;  
visitNum.textContent = timeText;


if (lastVisit === 0) {
    paragraph.textContent = `This is your first visit!`;
	
} 
else {
    visitNum.textContent = timeText;
	
}


localStorage.setItem("lastVisit", time);

const day1 = document.querySelector('#day1');
const day1Temp = document.querySelector('#day1_temp');
const day2 = document.querySelector('#day2');
const day2Temp = document.querySelector('#day2_temp');
const day3 = document.querySelector('#day3');
const day3Temp = document.querySelector('#day3_temp');
const url2 = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=992d5080d5389496bd0a7225f376c28e';

async function apiFetch() {
    try {
      const response2 = await fetch(url2);
      if (response2.ok) {
        const data2 = await response2.json();
        console.log(data2); // this is for testing the call
        displayTemp(data2);
      } else {
          throw Error(await response2.text());
      }
    } catch (error) {
        console.log(error);
    }
  }




var d = new Date();
var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",];


function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }


}




document.getElementById("day1").innerHTML = weekday[CheckDay(0)];
document.getElementById("day2").innerHTML = weekday[CheckDay(1)];
document.getElementById("day3").innerHTML = weekday[CheckDay(2)];

weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";
function displayTemp(data) {

document.getElementById("day1_temp").innerHTML = Math.round(data.list[0].main.temp - 273.15, -2) + "°";
document.getElementById("day2_temp").innerHTML = Math.round(data.list[1].main.temp - 273.15, -2) + "°";
document.getElementById("day3_temp").innerHTML = Math.round(data.list[2].main.temp - 273.15, -2) + "°";
}
apiFetch();
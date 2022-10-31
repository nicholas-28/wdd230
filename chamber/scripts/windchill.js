const temp = document.getElementById('temperature').value;
const windSpd = document.getElementById('windspeed').value;

const windChillFahrenheit = (temperature, windSpeed) => {
    result = 35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature * windSpeed ** 0.16;
    return Math.round(result);
}

const windChill = windChillFahrenheit(temp, windSpd);

if (temp <= 50 && windSpd > 3) {
    document.getElementById('windchill').textContent = windChill;
} else {
    document.getElementById('windchill').textContent = "N/A";
}
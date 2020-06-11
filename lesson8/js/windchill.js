// Calculates windchill based on the other data in the weather summary
let windSpeed = document.getElementById("windSpeed").textContent;
let temp = document.getElementById("temp").textContent;
document.getElementById("windChill").innerHTML = "N/A";

function calcWindChill(temp, windSpeed)
{
    return (35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16)));
}

if (temp <= 50 && windSpeed > 3)
{
    document.getElementById("windChill").innerHTML = calcWindChill(temp, windSpeed).toPrecision(2) + "&#8457;";
}
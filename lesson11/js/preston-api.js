// Recieving Weather Summary Data
const weatherapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=3d24da718e3087a672a2f05aa9ca642c";

fetch(weatherapiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        document.getElementById('currentWeather').textContent = jsObject.weather[0].description;
        document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('humidityLevel').textContent = jsObject.main.humidity;
        document.getElementById('windSpeed').textContent = jsObject.wind.speed.toFixed(0);

    });


// Recieving 5 Day Forecast Data    
const forecastapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=3d24da718e3087a672a2f05aa9ca642c";

fetch(forecastapiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 0;

        fivedayforecast.forEach(forecast => {

            let d = new Date(forecast.dt_txt);
            let image = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;

            document.getElementById(`temperature${day + 1}`).textContent = forecast.main.temp.toFixed(0);
            document.getElementById(`day${day + 1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`weatherIcon${day + 1}`).setAttribute('src', image);

            day++;
        });

    });


//
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {

        const towns = jsonObject['towns'];
        towns.filter(town => (town.name == 'Preston')).forEach(town => {

            let townInfo = document.createElement('div');
            let h3 = document.createElement('h3');
            let townEvents = document.createElement('p');

            h3.textContent = 'Upcoming Events'
            townEvents.innerHTML = `${town.events[0]}<br>${town.events[1]}<br>${town.events[2]}`;
            townInfo.appendChild(h3);
            townInfo.appendChild(townEvents);

            document.querySelector('article.events').appendChild(townInfo);
        });
    });
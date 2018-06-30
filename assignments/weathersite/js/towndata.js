// Connection to the API
let weatherRequest = new XMLHttpRequest();
let apiURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    // console.log(weatherData);
    
    document.getElementById('city1-name').innerHTML = weatherData.towns[0].name;
    document.getElementById('city1-motto').innerHTML = weatherData.towns[0].motto;
    document.getElementById('city1-founded').innerHTML = weatherData.towns[0].yearFounded;
    document.getElementById('city1-population').innerHTML = weatherData.towns[0].currentPopulation;
    document.getElementById('city1-rainfall').innerHTML = weatherData.towns[0].averageRainfall;
    
    document.getElementById('city2-name').innerHTML = weatherData.towns[1].name;
    document.getElementById('city2-motto').innerHTML = weatherData.towns[1].motto;
    document.getElementById('city2-founded').innerHTML = weatherData.towns[1].yearFounded;
    document.getElementById('city2-population').innerHTML = weatherData.towns[1].currentPopulation;
    document.getElementById('city2-rainfall').innerHTML = weatherData.towns[1].averageRainfall;
    
    document.getElementById('city3-name').innerHTML = weatherData.towns[3].name;
    document.getElementById('city3-motto').innerHTML = weatherData.towns[3].motto;
    document.getElementById('city3-founded').innerHTML = weatherData.towns[3].yearFounded;
    document.getElementById('city3-population').innerHTML = weatherData.towns[3].currentPopulation;
    document.getElementById('city3-rainfall').innerHTML = weatherData.towns[3].averageRainfall;

// Pulls events list for Franklin
    var franklinEvents = weatherData.towns[0].events;
    
    var ul = document.createElement('ul');

    document.getElementById('franklin-events').appendChild(ul);

    franklinEvents.forEach(function (eventList) {
        var li = document.createElement('li');
        ul.appendChild(li);

        li.innerHTML += eventList;
    });
    
// Pulls events list for Greenville
    var greenvilleEvents = weatherData.towns[1].events;
    
    var ul = document.createElement('ul');

    document.getElementById('greenville-events').appendChild(ul);

    greenvilleEvents.forEach(function (eventList) {
        var li = document.createElement('li');
        ul.appendChild(li);

        li.innerHTML += eventList;
    });
    
// Pulls events list for Springfield
    var springfieldEvents = weatherData.towns[3].events;
    
    var ul = document.createElement('ul');

    document.getElementById('springfield-events').appendChild(ul);

    springfieldEvents.forEach(function (eventList) {
        var li = document.createElement('li');
        ul.appendChild(li);

        li.innerHTML += eventList;
    });
    
}
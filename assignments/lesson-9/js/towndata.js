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
    
    let imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    document.getElementById('weatherimage').src = imagesrc;
}
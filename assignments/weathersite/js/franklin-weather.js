// Connection to the API
let weatherRequest = new XMLHttpRequest();
let apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=9e1b6326ff6b658261eddfcff5e8b204';
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherRequest);
    
    document.getElementById('summary').innerHTML = weatherData.weather[0].description;
    document.getElementById('mainTemp').innerHTML = weatherData.main.temp.toFixed(0);
    document.getElementById('currentTemp').innerHTML = weatherData.main.temp.toFixed(0);
    
    document.getElementById('humidity').innerHTML = weatherData.main.humidity;
    document.getElementById('windSpeed').innerHTML = weatherData.wind.speed.toFixed(0);
    document.getElementById('windDirection').innerHTML = weatherData.wind.deg.toFixed(0);

    
// Set up custom icons based on description from API    
    if (weatherData.weather[0].description === "scattered clouds") {
        let imagesrc = 'images/cloudy.svg';
        document.getElementById('weatherimage').src = imagesrc;
    } else if (weatherData.weather[0].description === "broken clouds") {
        let imagesrc = 'images/cloudy.svg';
        document.getElementById('weatherimage').src = imagesrc;
    } else if (weatherData.weather[0].description === "few clouds") {
        let imagesrc = 'images/partly-cloudy.svg';
        document.getElementById('weatherimage').src = imagesrc;
    } else if (weatherData.weather[0].description === "clear sky") {
        let imagesrc = 'images/sunny.svg';
        document.getElementById('weatherimage').src = imagesrc;
    } else if (weatherData.weather[0].description === "thunderstorm") {
        let imagesrc = 'images/thunderstorms.svg';
        document.getElementById('weatherimage').src = imagesrc;
    } else if (weatherData.weather[0].description === "rain") {
        let imagesrc = 'images/rainy.svg';
        document.getElementById('weatherimage').src = imagesrc;
    } else if (weatherData.weather[0].description === "light rain") {
        let imagesrc = 'images/rainy.svg';
        document.getElementById('weatherimage').src = imagesrc;
    } else if (weatherData.weather[0].description === "moderate rain") {
        let imagesrc = 'images/rainy.svg';
        document.getElementById('weatherimage').src = imagesrc;
    } else if (weatherData.weather[0].description === "shower rain") {
        let imagesrc = 'images/rainy.svg';
        document.getElementById('weatherimage').src = imagesrc;
    } else if (weatherData.weather[0].description === "snow") {
        let imagesrc = 'images/snow.svg';
        document.getElementById('weatherimage').src = imagesrc;
    } else if (weatherData.weather[0].description === "light snow") {
        let imagesrc = 'images/snow.svg';
        document.getElementById('weatherimage').src = imagesrc;
    } else if (weatherData.weather[0].description === "heavy snow") {
        let imagesrc = 'images/snow.svg';
        document.getElementById('weatherimage').src = imagesrc;
    } else if (weatherData.weather[0].description === "shower snow") {
        let imagesrc = 'images/snow.svg';
        document.getElementById('weatherimage').src = imagesrc;
    }

// Determine wind chill factor
    
    var wcTemp = weatherData.main.temp.toFixed(0);
    var s = parseFloat(document.getElementById("windSpeed").innerHTML);
    var t = wcTemp / 2;

    var wcf = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16);
    
    if (weatherData.main.temp > 45) {
        document.getElementById("WCF").innerHTML = "<em>(Not Available above 45&deg;F)</em>";
    } else {
        document.getElementById("WCF").innerHTML = wcf.toFixed(0);
    }

}

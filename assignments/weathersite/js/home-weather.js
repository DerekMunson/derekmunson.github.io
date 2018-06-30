// Franklin Data
let weatherRequestFranklin = new XMLHttpRequest();
let FranklinURL = 'https://api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=9e1b6326ff6b658261eddfcff5e8b204';
weatherRequestFranklin.open('GET', FranklinURL, true);
weatherRequestFranklin.send();

weatherRequestFranklin.onload = function () {
    let weatherData = JSON.parse(weatherRequestFranklin.responseText);
    console.log(weatherRequestFranklin);
    
    document.getElementById('mainFranklinTemp').innerHTML = weatherData.main.temp.toFixed(0);
   
}

// Greenville Data
let weatherRequestGreenville = new XMLHttpRequest();
let GreenvilleURL = 'https://api.openweathermap.org/data/2.5/weather?id=4580543&units=imperial&APPID=9e1b6326ff6b658261eddfcff5e8b204';
weatherRequestGreenville.open('GET', GreenvilleURL, true);
weatherRequestGreenville.send();

weatherRequestGreenville.onload = function () {
    let weatherData = JSON.parse(weatherRequestGreenville.responseText);
    console.log(weatherRequestGreenville);
    
    document.getElementById('mainGreenvilleTemp').innerHTML = weatherData.main.temp.toFixed(0);
   
}

// Springfield Data
let weatherRequestSpringfield = new XMLHttpRequest();
let SpringfieldURL = 'https://api.openweathermap.org/data/2.5/weather?id=4250542&units=imperial&APPID=9e1b6326ff6b658261eddfcff5e8b204';
weatherRequestSpringfield.open('GET', SpringfieldURL, true);
weatherRequestSpringfield.send();

weatherRequestSpringfield.onload = function () {
    let weatherData = JSON.parse(weatherRequestSpringfield.responseText);
    console.log(weatherRequestSpringfield);
    
    document.getElementById('mainSpringfieldTemp').innerHTML = weatherData.main.temp.toFixed(0);
   
}
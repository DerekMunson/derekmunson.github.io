var HighTemp = parseFloat(document.getElementById("highTemp").innerHTML);
var LowTemp = parseFloat(document.getElementById("lowTemp").innerHTML);
var s = parseFloat(document.getElementById("windSpeed").innerHTML);
var t = (HighTemp + LowTemp) / 2;

var wcf = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16);

document.getElementById("WCF").innerHTML = wcf.toFixed(0);
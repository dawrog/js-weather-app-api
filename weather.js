var APPID = "d6c47c791927d46646402148554b908d";
var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;


function update(weather) {
    icon.src = "imgs/codes/" + weather.code + ".png"
    humidity.innerHTML = weather.humidity;
    wind.innerHtml = weather.wind;
    direction.innerHTML = weather.direction;
    loc.innerHTML = weather.location;
    temp.innerHTML = weather.temp;
}

window.onload = function () {
  temp = document.getElementById("temperature");
  loc = document.getElementById("location");
  icon = document.getElementById("icon");
  humidity = document.getElementById("humidity");
  wind = document.getElementById("wind");
  direction = document.getElementById("direction");

  if(navigator.geolocation){
  var showPosition = function(position){
      updateByGeo(position.coords.latitude, position.coords.longitude);
  }
  navigator.geolocation.getCurrentPosition(showPosition);
    } else {
       var zip = window.prompt("Could not discover your location. What is your zip code?");
      updateByZip(zip);
    }

}

function updateByGeo(lat, lon){
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
  "lat=" + lat +
  "&lon=" + lon +
  "&APPID=" + APPID;
    sendRequest(url);    
}

function updateByZip(zip){
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
  "zip=" + zip +
  "&APPID=" + APPID;
    sendRequest(url);
}


function sendRequest(url){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
      var weather = {};
      weather.code = data.weather[0].id;
      weather.humidity = data.main.humidity;
      weather.wind = data.wind.speed;
      /* NEW */
      weather.direction = degreesToDirection(data.wind.deg)
      weather.location = data.name;
      /* NEW */
      weather.temp = K2C(data.main.temp);   
      update(weather);
  }
};

    xmlhttp.open("GET", url, true);
    xmlhttp.send();    
}

function degreesToDirection(degrees) {
    var range = 360/16;
    var low = 360 - range/2;
    var high = (low + range) %  360;
    var angles = [ "N", "NE", "NNE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    for( i in angles ){
        if( degrees >= low && degrees < high )
            return angles[i];

        low = (low +  range) % 360;
        high = (high + range) % 360;
    }
    return "N";
}


function K2C(k) {
    return Math.round(k - 273.15);
}

  /*var weather = {};
  weather.wind = 3.5;
  weather.direction = "N";
  weather.humidity = 35;
  weather.loc = "Boston";
  weather.temp = "45";
  weather.icon = 200;

  update(weather);*/

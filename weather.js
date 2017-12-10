var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;


function update(weather) {
    humidity.innerHTML = weather.humidity;
    wind.innerHTML = weather.wind;
    direction.innerHTML = weather.direction;
    loc.innerHTML = weather.location;
    temp.innerHTML = weather.temp;
    icon.src = "imgs/codes/" + weather.icon + ".png"
    console.log(icon.src);
}

  window.onload = function () {
  temp = document.getElementById("temperature");
  loc = document.getElementById("location");
  icon = document.getElementById("icon");
  humidity = document.getElementById("humidity");
  wind = document.getElementById("wind");
  direction = document.getElementById("direction");

  var weather = {};
  weather.wind = 3.5;
  weather.direction = "N";
  weather.humidity = 35;
  weather.location = "Sosnowiec";
  weather.temp = "0";
  weather.icon = "200";
  
  update(weather);
} 


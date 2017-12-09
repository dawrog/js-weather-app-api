var loc;
var temp;
var humidity;
var wind;
var direction;
var icon;

function update(weather) {
    $("#location").html(weather.humidity);
    $("#temperature").html(weather.humidity);
    $("#humidity").html(weather.humidity);
    $("#wind").html(weather.humidity);
    $("#direction").html(weather.humidity);
    $("#icon").html(weather.humidity);
}

$(document).ready(function() {
    
    location = $( "#location" );
    temp = $( "#temperature" );
    humidity = $( "#humidity" );
    wind = $( "#wind" );
    direction = $( "#direction" );
    icon = $( "#icon" );
});

var weather = {};
weather.loc = "Sosnowiec"; 
weather.temp = "0";
weather.humidity = 20;
weather.wind = 2.2;
weather.direction = "W";
weather.icon = 200;

update(weather);


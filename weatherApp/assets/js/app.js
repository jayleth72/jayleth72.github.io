var temperature;
var windDirection;
var windSpeed;
var skyCondition;
var icon;
var toggleButtonState;
var APPID = "c82a16cfcf2ae5b27ad35fd49e61eda5";
var loc;
var unitSelector;
var tempKelvin;
var sunrise;
var sunset;

window.onload = function () {

  temperature = document.getElementById("temperature");
  windDirection = document.getElementById("windDirection");
  windSpeed = document.getElementById("windSpeed");
  skyCondition = document.getElementById("skyCondition");
  toggleButtonState = document.getElementById("toggleUnits");
  icon = document.getElementById("icon");
  loc = document.getElementById("loc");
  unitSelector = document.querySelector('input[name=select_units]:checked').value;

var city;
var countryCode;

  jQuery.ajax( {
  url: '//freegeoip.net/json/',
  type: 'POST',
  dataType: 'jsonp',
  success: function(location) {
    // example where I update content on the page.
    city = location.city;

    countryCode=location.country_code;
    //show weather by location
    getWeatherByCity(city, countryCode);
  }
} );


};

function updateWeather (weather) {
  temperature.innerHTML = (unitSelector == "celcius") ? kelvinToCelcius(weather.temperature) : kelvinToFahrenheit(weather.temperature);

  windDirection.innerHTML = degreesToDirection(weather.windDirection);
  windSpeed.innerHTML =  weather.windSpeed;
  skyCondition.innerHTML = cloudPercentToCloudDescription(weather.skyCondition/100);
  icon.src = "http://openweathermap.org/img/w/" + weather.icon + ".png";
  loc.innerHTML = weather.loc;

};

function getWeatherByCity (city, countryCode) {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + countryCode + "&APPID=" + APPID;

  sendRequest(url);
};

function sendRequest(url) {

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET", url, true);

    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {

            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            weather.iconSRC = data.weather[0].icon;

            weather.temperature = data.main.temp;
            tempKelvin = data.main.temp;
            weather.windSpeed = data.wind.speed;
            weather.windDirection = data.wind.deg;
            weather.skyCondition = data.clouds.all;
            weather.icon = data.weather[0].icon;
            weather.loc = data.name;
            sunrise = data.sys.sunrise;
            sunset = data.sys.sunset
            updateWeather(weather);

        }

      };

     xmlhttp.send();

};

function kelvinToCelcius (kelvin) {

  return Math.round(kelvin - 273.15) + "&deg C";
};

function kelvinToFahrenheit (kelvin) {

  return Math.round(kelvin * (9/5) - 459.67) + "&deg F";
};

function updateUnits (units) {
  unitSelector = units.value;

 if (unitSelector == 'celcius')
   temperature.innerHTML = kelvinToCelcius(tempKelvin) ;
 else
   temperature.innerHTML = kelvinToFahrenheit (tempKelvin) ;
};

function degreesToDirection(degrees) {
  var range = 360/16;
  var low = 360 - range/2;
  var high = (low + range) % 360;
  var angles = ['N', 'NNE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  var i;
  for(i in angles) {

    if (degrees >= low && degrees < high) {
        return angles[i];
    }
    low = (low + range) % 360;
    high = (high + range) % 360;
  }
  return "N";
};

function cloudPercentToCloudDescription (cloudPercent) {
  var cloudDescr = "No clouds";

 if ((new Date).getTime() >= sunrise && (new Date).getTime() < sunset) {
    if (cloudPercent <= 1/8)
      cloudDescr = "Sunny";
    else if(cloudPercent > 1/8 && cloudPercent <= 3/8)
      cloudDescr = "Mostly sunny";
    else if(cloudPercent > 3/8 && cloudPercent <= 5/8)
      cloudDescr = "Partly sunny";
    else if(cloudPercent > 5/8 && cloudPercent <= 7/8)
      cloudDescr = "Mostly cloudy";
    else
      cloudDescr = "Cloudy";
  }
  else {
     if (cloudPercent <= 1/8)
      cloudDescr = "Clear";
    else if(cloudPercent > 1/8 && cloudPercent <= 3/8)
      cloudDescr = "Mostly clear";
    else if(cloudPercent > 3/8 && cloudPercent <= 5/8)
      cloudDescr = "Partly cloudy";
    else if(cloudPercent > 5/8 && cloudPercent <= 7/8)
      cloudDescr = "Mostly cloudy";
    else
      cloudDescr = "Cloudy";
  }
  return cloudDescr;
};


function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  console.log(position.coords.accuracy);
  updateWeatherByPosition(position.coords.latitude, position.coords.longitude);
}

function updateWeatherByPosition(lat, lon) {
  var url = "http://api.openweathermap.org/data/2.5/weather?" +
  "lat=" + lat +
  "&lon=" + lon +
  "&APPID=" + APPID;
  sendRequest(url);
}

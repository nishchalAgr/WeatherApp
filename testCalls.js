const fetch = require('node-fetch');

//'http://api.openweathermap.org/data/2.5/forecast?q=London,GB&APPID=ac738f7c8adf0cb9063b41e939d28bd7&units=metric'

function getAPICall(){
    var endpoint = 'http://api.openweathermap.org/data/2.5/forecast';
    var APPID = 'ac738f7c8adf0cb9063b41e939d28bd7';
    var city = 'London,GB';
    var units = 'metric';
    endpoint = endpoint + '?q=' + city + '&APPID=' + APPID + '&units=' + units;
    return endpoint;
}

function getWeather(){
    fetch(getAPICall())
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){
            console.log("Humidity: " + myJson.list[0].main.humidity);
            return myJson;
        });     
}

getWeather();
var express = require('express');
var app = express();
var request = require('request');
var path = require('path');

var SerialPort = require('serialport');
// var port = new SerialPort('COM6', {
//   baudRate: 9600
// })

app.get('/LightOn', function(req, res){
  res.send("LightOn");
});

app.get('/LightOff', function(req, res){
 // port.write('L');
  res.send("LightOff");
});

app.get('/ShowWeather', function(req,res){
  var ApiKey = "76454f405c8f38da3c473e8a2d4048f7";
  request("http://api.openweathermap.org/data/2.5/weather?" + "q=pune&mode=xml&units=imperial&APPID=" + ApiKey, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  res.send(body);
});
 // res.sendFile(path.join(__dirname, '../Client', 'Weather.html'));
});

app.get('/GetWeather', function(req,res){
  res.sendFile(path.join(__dirname, '../Client', 'Weather.html'));
  
    // var xhttp = new XMLHttpRequest();
    //     xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?" + "q=pune&mode=xml&units=imperial&APPID=" + ApiKey, false);
    //     xhttp.setRequestHeader("Content-type", "application/json");
    //     xhttp.send();
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../Client', 'LightControl.html'));
});

app.listen(3000);

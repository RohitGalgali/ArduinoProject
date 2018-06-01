var express = require('express');
var app = express();


var SerialPort = require('serialport');
var port = new SerialPort('COM6', {
  baudRate: 9600
})

app.get('/LightOn', function(req, res){
  port.write('H');
  res.send("LightOn");
});

app.get('/LightOff', function(req, res){
  port.write('L');
  res.send("LightOff");
});

app.listen(3000);
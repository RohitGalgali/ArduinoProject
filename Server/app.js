var express = require('express');
var app = express();

var path = require('path');

var SerialPort = require('serialport');
// var port = new SerialPort('COM6', {
//   baudRate: 9600
// })

app.get('/LightOn', function(req, res){
  //port.write('H');
  res.send("LightOn");
});

app.get('/LightOff', function(req, res){
 // port.write('L');
  res.send("LightOff");
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../Client', 'LightControl.html'));
});

app.listen(3000);

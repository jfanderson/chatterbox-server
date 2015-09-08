var express = require('express');
var messages = require("./messages.js");

var app = express();

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

app.options('/classes/messages', function(req, res) {
  //headers['Allow'] = "POST,GET,PUT,OPTIONS";
  res.status(200);
  res.set(headers);
  res.set("Allow", "POST,GET,PUT,OPTIONS");
  res.send();
});

app.get('/classes/messages', function(req, res) {
  // var headers['Content-Type'] = "application/json"
  // res.writeHead(statusCode, headers);
  var m = messages.getMessages();
  debugger;
  res.set(headers);
  res.status(200).send(messages.getMessages());
});

app.post('classes/messages', function(req, res) {
  var msg = "";
  
  req.on('data', function(data) {
    msg += data;  
  });
  req.on('end', function() {
    messages.addMessage(JSON.parse(msg));
  });

  res.set(headers);
  res.status(201).send();
});

app.get('/', function (req, res) {
  res.set(headers);
  res.send('Hello World!');
});

app.get('*', function(req, res){
  res.set(headers);
  res.status(404).send('Not Found');
});
// var server = app.listen(3000, function () {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);
// });

var ip = "127.0.0.1";
var port = 3000;
var server = app.listen(port, ip);
console.log('Example app listening at http://%s:%s', ip, port);

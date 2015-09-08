var fs = require('fs');

// fs.open('./messageLog.txt', 'r+');



// message handler
var messages = {results: []};
var id = 0;
var addMessage = function(message) {
  // console.log("Adding: " + message.username + message.message);
  message["objectId"]= id++;
  fs.appendFile('./messageLog.txt', '\n' + JSON.stringify(message));
  messages.results.unshift( message );
};

var getMessages = function(message) {
  var msg = "";
  fs.readFile('./messageLog.txt', 'utf8', function (err, data) { 
    if (err) throw err;
    msg = data
    messages.results = data.split('\n')
  });
  // messages.results = msg.split('\n');
  // console.log("Test: " + JSON.stringify(messages));
  return JSON.stringify(messages);  
}

module.exports.addMessage = addMessage;
module.exports.getMessages = getMessages;
var fs = require('fs');

// message handler
var messages = {results: []};
var id = 0;
var addMessage = function(message) {
  message["objectId"]= createObjectId(message);

  fs.appendFile('./messageLog.txt', '\n' + JSON.stringify(message));
  messages.results.unshift( message );
};

var getMessages = function(message) {
  var data = fs.readFileSync('./messageLog.txt', 'utf8');

  messages.results = data.split('\n').map(function(item) {
    if (item)
      return JSON.parse(item);
  });
  // messages.results = msg.split('\n');
  // console.log("Test: " + JSON.stringify(messages));
  // debugger;
  return JSON.stringify(messages);  
  // var x = JSON.stringify(messages);
  // debugger;
}
var createObjectId = function (obj) {

  return Date.now() % 100000;
}
module.exports.addMessage = addMessage;
module.exports.getMessages = getMessages;

// getMessages();
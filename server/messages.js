// message handler
var messages = [];

var addMessage = function(message) {
  // console.log("Adding: " + message.username + message.message);
  messages.push(message);
};

var retrieveMessages = function(message) {
  return messages;  
}

module.exports.addMessage = addMessage;
module.exports.retrieveMessages = retrieveMessages;
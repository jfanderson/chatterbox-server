// message handler
var messages = {results: []};
var id = 0;
var addMessage = function(message) {
  // console.log("Adding: " + message.username + message.message);
  message["objectId"]= id++;
  messages.results.unshift( message );
};

var getMessages = function(message) {
  return JSON.stringify(messages);  
}

module.exports.addMessage = addMessage;
module.exports.getMessages = getMessages;
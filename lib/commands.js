var path = require('path'),
    cmp = require('compare.js'),
    _ = require('underscore');

var commands = function (req, res, next) {
  if (cmp.eq(req.method, 'GET') && cmp.eq(req.url, '/commands/Command.js')) {
    res.sendfile(path.join(__dirname, 'client/Command.js'));
    return;
  }

  if (cmp.eq(req.method, 'POST') && cmp.eq(req.url, '/commands')) {
    // Get the command from the body.
    var receivedCommand = req.body;

    // Verify that the received command matches the command interface. If not, return a '400 Bad Request'.
    if(!cmp.lts({ id: '', type: '', payload: {} }, receivedCommand)) {
      return res.send(400);
    }

    // Verify that the received command matches one of the registered commands. If not, return a '400 Bad
    // Request'.
    if(array.indexOf(receivedCommand.type)) {
      return res.send(400);
    }

    // Call the callback to store the command using the command bus.
    var commandHasBeenStored = commands.storeCommand(receivedCommand);

    // If the command has been stored by the command bus successfully, send '202 Accepted'; otherwise,
    // send '503 Service Unavailable' to the client.
    return res.send(commandHasBeenStored ? 202 : 503);
  };

  return next();
};

commands.registeredCommands = [];

commands.storeCommand = function () {};

module.exports = function (unregisteredCommands, storeCommandCallback) {
  for(var i = 0; i < unregisteredCommands.length; i++) {
    commands.registeredCommands.push(unregisteredCommands[i]);
  }

  commands.storeCommand = storeCommandCallback;

  return commands;
};
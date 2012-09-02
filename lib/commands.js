var path = require('path');

var commands = function (req, res, next) {
  if (req.url === '/commands/Command.js') {
    res.sendfile(path.join(__dirname, 'client/Command.js'));
    return;
  }

  return next();
};

commands.registeredCommands = [];

module.exports = function (unregisteredCommands) {
  for(var i = 0; i < unregisteredCommands.length; i++) {
    commands.registeredCommands.push(unregisteredCommands[i]);
  }

  return commands;
};
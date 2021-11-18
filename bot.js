var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
let cases = require('./case')

// Configure logger settings

logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});

// Initialize Discord Bot

var bot = new Discord.Client({
    token: auth.token,
    autorun: true
 });
 
 bot.on('ready', function (evt) {
     logger.info('Connected');
     logger.info('Logged in as: ');
     logger.info(bot.username + ' – (' + bot.id + ')');
 });
 
 bot.on('message', function (user, userID, channelID, message, evt) {
 
     // Our bot needs to know if it will execute a command
      // It will listen for messages that will start with `!`

    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        args = args.splice(1);
        // console.log(cmd)
        
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            case 'siapa_kamu':
                bot.sendMessage({
                    to: channelID,
                    message: 'Baginda Tuan Raja Digit'
                })
            break;
            case 'entog-atau-entok':
                bot.sendMessage({
                    to: channelID,
                    message: 'Entog lahh'
                })
            break;
            case 'list':
                bot.sendMessage({
                    to: channelID,
                    message: 'ga ada list'
                })
            break;
            // Just add any case commands if you want to..
         }
     }
});
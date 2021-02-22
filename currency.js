var TelegramBot=require('node-telegram-bot-api');

var token='792673397:AAHAWoDvE0vzl5HxaxDrkYnPCgsEjOH-HUM';

var bot=new TelegramBot(token, {polling: true});

bot.on('message',function(msg){
var request = require('request');

var f = (msg.text).toUpperCase().split(",");

request('https://api.exchangeratesapi.io/latest?base='+f[0],function(err,response,body){
	//
    var c = JSON.parse(body)
    //var b = (msg.text).toUpperCase();
	 c.rates[f[1]]);
});

});
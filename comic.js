var TelegramBot = require('node-telegram-bot-api');

var token = '802581280:AAFy1OfChmPa0-wzWajd8f2E22Ub20f5NAk';

var bot = new TelegramBot(token, {polling: true});

bot.on('message',function(msg){
	if(msg.text == "hie")
    {
    	bot.sendMessage(msg.chat.id,"hello frnd! How can i help you?");
    }
     if(msg.text == "send me a comic")
    {
    	bot.sendMessage(msg.chat.id,"Yeah sure!enter the title");
    }

var request = require('request');
request('https://xkcd.com/614/info.0.json',function(err,response,body){
	 // if(msg.text == "hie")
  //   {
  //   	bot.sendMessage(msg.chat.id,"hello frnd! How can i help you?");
  //   }
  //    if(msg.text == "send me a comic")
  //   {
  //   	bot.sendMessage(msg.chat.id,"Yeah sure!enter the title");
  //   }
    var c = JSON.parse(body);
     if(msg.text == c.safe_title)
    {
    	bot.sendMessage(msg.chat.id,c.title);
    	bot.sendMessage(msg.chat.id,c.transcript);
    	bot.sendPhoto(msg.chat.id,"https://imgs.xkcd.com/comics/woodpecker.png");

    }
    if(msg.text == "hahahahaha...."){
    	bot.sendMessage(msg.chat.id,"My pleasure");
    }
   
    });
});
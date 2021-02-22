var TelegramBot=require('node-telegram-bot-api');

var token='917714653:AAFejTpKrg0P5qSbNJ42KDaONwhtEvE3Byk';

var bot=new TelegramBot(token, {polling: true});

bot.on('message',function(msg){

var request = require('request');
request('https://cricapi.com/api/matches?apikey=FS3td3Ei91P0VJQns6OiFagHrIn1',function(err,response,body){
	var c = JSON.parse(body);
	//console.log(c);
    //var b = (msg.text).toUpperCase();
    //var l = matches.length();
    //console.log(msg.text);
    if(msg.text.toLowerCase() == "hie")
    {
    	bot.sendMessage(msg.chat.id,"hello! How may i help you?");
    }
    if(msg.text == "May i know the types of matches")
    {
    	bot.sendMessage(msg.chat.id,"Sure!!"+"\nTest"+"\nFirst-class"+"\nTwenty20");
    }
    var ms=msg.text;
   for(var i=0;i<c.matches.length;i++){
    if(ms == c.matches[i].type){ 
    	bot.sendMessage(msg.chat.id,"date:"+c.matches[i].date + ',' + "\nmatchstartedornot:"+c.matches[i].matchStarted+','+"\nUnique_id:"+c.matches[i].unique_id);
    }
}
if(msg.text.toLowerCase() == "thankyou for the info")
    {
    	bot.sendMessage(msg.chat.id,"Your welcome");
    }

	//bot.sendMessage(msg.chat.id,"dates of matches: "+c.matches[i].date);//+"\n type of match: " +c.matches[l].type);
});
});

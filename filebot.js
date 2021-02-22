// var TelegramBot = require('node-telegram-bot-api');

// var token = '842236247:AAFZ9AqnNfZMiWw9N6P7RvnG_XuHjP09gAk';

// var bot = new TelegramBot(token, {polling: true});

// bot.on('message',function(msg){
// 	var l= require('fs');
// 	var s= l.readFileSync('first.txt');
// 	var x= s.toString();
// 	if(x.includes(msg.text)){
// 		bot.sendMessage(msg.chat.id, "hey boss this word is exists");
// 	}
// 	else
// 	{
// 		l.appendFile('first.txt',msg.text,function(err){
// 		      if (err) throw err;
// 		      bot.sendMessage(msg.chat.id, "added");
// 			console.log("saved!!");
// 		});
// 	}
// });

var TelegramBot=require('node-telegram-bot-api');

var token='950456232:AAF2L9r-PsL6LeAsA_tg1Bt4C_CSUOysaaY';

var bot=new TelegramBot(token, {polling: true});

bot.on('message',function(msg){

if(msg.text=="8317508480"){
	bot.sendPhoto(msg.chat.id,"https://image.shutterstock.com/image-vector/male-silhouette-avatar-profile-picture-260nw-199246382.jpg")
}

});
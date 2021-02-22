var TelegramBot = require('node-telegram-bot-api');

var token = '842236247:AAFZ9AqnNfZMiWw9N6P7RvnG_XuHjP09gAk';

var bot = new TelegramBot(token, {polling: true});

bot.on('message',function(msg){
	var l= require('fs');
	var s= l.readFileSync('first.txt');
	var x=s.toString();
	if(x.search(msg.text)){
		console.log(bot.sendMessage(msg.chat.id, "hey boss this word is exists"));
	}
	else
	{
		l.appendFile('first.txt',msg.text,function(err){
		      if (err) throw err;
			console.log("saved!!");
		});
	}
});
// console.log(msg.chat.first_name + ":" +msg.text);
	// if(msg.text=="hello" || msg.text=="hai" || msg.text == "hey"){
	// 	bot.sendMessage(msg.chat.id, "hello");
	// }
	// if(msg.text=="hie buddy"){
	// 	bot.sendMessage(msg.chat.id, "hie buddy");

	// }
	// if(msg.text=="How are you?"){
	// 	bot.sendMessage(msg.chat.id, "Fine");

	// }
	// if((msg.text).toLowerCase()=="what are you doing?"){
	// 	bot.sendMessage(msg.chat.id, "Nothing!!");

	// }
	// if((msg.text).toLowerCase()=="Ok then..bye!"){
	// 	bot.sendMessage(msg.chat.id, "K..Bye!!");

	// }
// 	if(x != msg.text){
// 		s.appendFile('first.txt', msg.txt, function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
// 	}
// 			else
// 		{
// 			console.log(bot.sendMessage(msg.chat.id, "hey boss this word is exists"));
// 		}
// }









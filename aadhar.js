var TelegramBot=require('node-telegram-bot-api');

var token='1053426583:AAElLbEI6MFpyhgDBDvTOzQa2aAKun3Pbr0';

var bot=new TelegramBot(token, {polling: true});
const mongojs = require('mongojs')
const db = mongojs('mongodb://mits:mits01@cluster0-shard-00-00-9kpnk.mongodb.net:27017/internship?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', ['data'])

bot.on('message',function(msg){

var m=msg.text;
var s=m.split(",");
var count=0;
var d={
aadhar:s[1]
    }
    db.data.find({},function(err,docs){
	if(msg.text == "all aadhar numbers"){
//bot.sendMessage(msg.chat.id,"your pan card number is");
for(var i=0;i<docs.length;i++){
bot.sendMessage(msg.chat.id,docs[i].aadhar);
}
}

})
if(s[0].toLowerCase()=="aadhar"){
db.data.find(d,function(err,docs){
for(var i=0;i<docs.length;i++)
{
if(s[1]==docs[i].aadhar){
count=1;
}
}
if(count==0){
db.data.insert(d,function(err,docs){
bot.sendMessage(msg.chat.id,"Insertion done!!");
});
}
else{
bot.sendMessage(msg.chat.id,"OOPs....!This data already exists");
}
   });
}
else{
// db.data.find({},function(err,docs){
// 	if(msg.text == "pan"){
// bot.sendMessage(msg.chat.id,"your pan card number is");
// for(var i=0;i<docs.length;i++){
// bot.sendMessage(msg.chat.id,docs[i].pan);
// }
// }

// })


}



});
// bot.on('message',function(msg){
// // 	var r={
// // 	name:"Roshni",
// // 	phoneno:"8639717290",
// // 	gender:"Female",
// // 	age:19,
// // 	panNo:"1234567890",
// // 	aadharNo:"220465520276"
// // }
// //db.data.insert(r, function(err,docs){
// //	console.log(err);
// //	console.log(docs);
// //});
// // var y = {
// //    panNo:"1234567890"
// // }
// // var s={
// 	// panno:"123456"
// // }
// // db.data.insert(s, function(err,docs){
// // 	console.log(err);
// // 	console.log(docs);
// // });
// var x = msg.text.toUpperCase();
// var ss=x.split(",");
// // var a={
// 	// panno:ss[1]
// // }
// db.data.find(a, function(err,docs){
// 	var s={
// 	panno:ss[1]
// }
// 	//console.log(err);
// for(var i=0;i<docs.length;i++){
// 	if(docs[i].panno == ss[1])
// 	{
// 		bot.sendMessage(msg.chat,id,"already exist")
// 	}
// 	else {
// 		db.data.insert(a, function(err,docs){
//  	//console.log(err);
//  	bot.sendMessage(msg.chat.id,"inserted");
// 	})
// }
// }
// })
// 	});

require('dotenv').config();
const linebot = require('linebot');

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

bot.on('message', function (event) {
  event.reply(event.message.text).then(function (data) {
    // sucess
    console.log('Success', data);
  }).catch(function (error) {
    // error
    console.log('Error', error);
  });
});

bot.listen('/linewebhook', 3001, function () {
  console.log(process.env.CHANNEL_ID);
  console.log('LineBot is running.');
});

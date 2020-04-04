const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TOKEN;
const bot = new TelegramBot(token, {polling: true});

// Listen for any kind of message in chat
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message.' + chatId);
});

function myFunc() {
  console.log('ping');
}
// make a ping to check if service is alive :)
setInterval(myFunc, 10000);

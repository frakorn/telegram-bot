const TelegramBot = require('node-telegram-bot-api');
const token = process.env.token;
const bot = new TelegramBot(token, {polling: true});

// YOUR CODE STARTS HERE

// Listen for any kind of message in chat
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message.' + chatId);
});


function myFunc(arg) {
  console.log(`arg was => ${arg}`);
}

setInterval(myFunc, 10000, 'ping');

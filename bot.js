const TelegramBot = require('node-telegram-bot-api');
const token = '1142532414:AAHWeBbWz9TMoNPbQSKib6u_goV9aqBZUrw';
const bot = new TelegramBot(token, {polling: true});

// YOUR CODE STARTS HERE

// Listen for any kind of message in chat
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message.' + chatId);
});



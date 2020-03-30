const TelegramBot = require('node-telegram-bot-api');

// tokenId
const token = '1142532414:AAHWeBbWz9TMoNPbQSKib6u_goV9aqBZUrw';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/audio/, function(msg, match) {
    bot.sendMessage(msg.chat.id, "audio, human!");
    bot.sendAudio(msg.chat.id, 'audio/sample.mp3');
});

bot.onText(/\/pic/, function(msg, match) {
    const url = 'https://telegram.org/img/t_logo.png';
    bot.sendPhoto(msg.chat.id, url);
});



// Listen for any kind of message in chat
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message.' + chatId);
});








const axios =  require('axios');
const TelegramBot = require('node-telegram-bot-api');


// replace the value below with the Telegram token you receive from @BotFather
const token = '1003353651:AAGTVKCyfXvnMkOQfvKOcKwWqEUk2lgSph8';
 
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
 
// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
    let newTweet = {
        content: msg.text,
        date: new Date().toISOString(),
        userName: '@'+msg.from.username,
    }
    const url = `https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet/`;
    
       
       return axios.post(url, {tweet: newTweet})
        
  // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Received your message');

});

const token = PropertiesService.getScriptProperties().getProperty("token");
const ss = SpreadsheetApp.openById('1J6znBamHIriFVNApeLT9bXYbo3oqTW-AZZNMZsq0ltQ');
const bot = new Bot(token);

// Matches "/start [whatever]"
bot.onText(/\/start (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/forwardMessage/, msg => {
  const chatId = msg.chat.id;
  bot.forwardMessage(chatId, chatId, msg.message_id)
})

bot.onText(/\/copyMessage/, msg => {
  const chatId = msg.chat.id;
  bot.copyMessage(chatId, chatId, msg.message_id)
})

bot.onText(/\/sendPhoto/, msg => {
  const chatId = msg.chat.id;
  const photo = 'https://i.picsum.photos/id/877/536/354.jpg?hmac=tqrq5WwuJDNkbeEglTj8i_RZZzUCq93iOGCuXZVY2Kw';
  bot.sendPhoto(chatId, photo)
})

bot.onText(/\/sendAudio/, msg => {
  const chatId = msg.chat.id;
  const audio = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
  bot.sendAudio(chatId, audio)
})

bot.onText(/\/sendDice/, msg => {
  const chatId = msg.chat.id;
  bot.sendDice(chatId)
})

bot.onText(/\/sendDocument/, msg => {
  const chatId = msg.chat.id;
  const document = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
  bot.sendDocument(chatId, document)
})

bot.onText(/\/sendSticker/, msg => {
  const chatId = msg.chat.id;
  const sticker = 'https://www.gstatic.com/webp/gallery/1.webp';
  bot.sendSticker(chatId, sticker)
})

bot.onText(/\/sendVideo/, msg => {
  const chatId = msg.chat.id;
  const video = 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4';
  bot.sendVideo(chatId, video)
})

bot.onText(/\/sendAnimation/, msg => {
  const chatId = msg.chat.id;
  const animation = 'http://techslides.com/demos/sample-videos/small.mp4';
  bot.sendAnimation(chatId, animation)
})

bot.onText(/\/sendVideoNote/, msg => {
  const chatId = msg.chat.id;
  const video = 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4';
  bot.sendVideoNote(chatId, video)
})

bot.onText(/\/sendVoice/, msg => {
  const chatId = msg.chat.id;
  const audio = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
  bot.sendVoice(chatId, audio)
})

bot.onText(/\/sendChatAction/, msg => {
  const chatId = msg.chat.id;
  const action = 'typing';
  bot.sendChatAction(chatId, action)
})

bot.onText(/\/banChatMember/, msg => {
  const chatId = msg.chat.id;
  const userId = '605001425';
  bot.banChatMember(chatId, userId)
})

bot.onText(/\/unbanChatMember/, msg => {
  const chatId = msg.chat.id;
  const userId = '605001425';
  bot.unbanChatMember(chatId, userId)
})

bot.onText(/\/restrictChatMember/, msg => {
  const chatId = msg.chat.id;
  const userId = '605001425';
  bot.restrictChatMember(chatId, userId)
})

bot.onText(/\/promoteChatMember/, msg => {
  const chatId = msg.chat.id;
  const userId = '605001425';
  bot.promoteChatMember(chatId, userId)
})

bot.onText(/\/setChatAdministratorCustomTitle/, msg => {
  const chatId = msg.chat.id;
  const userId = msg.chatId.id;
  const customTitle = 'Admin';
  bot.setChatAdministratorCustomTitle(chatId, userId, customTitle)
})

bot.onText(/\/sendLocation/, msg => {
  const chatId = msg.chat.id;
  const latitude = 65;
  const longitude = 87;
  bot.sendLocation(chatId, latitude, longitude)
})

bot.onText(/\/sendVenue/, msg => {
  const chatId = msg.chat.id;
  const latitude = 65;
  const longitude = 87;
  const title = 'test venue';
  const address = 'test address'
  bot.sendVenue(chatId, latitude, longitude, title, address)
})

bot.onText(/\/sendContact/, msg => {
  const chatId = msg.chat.id;
  const phoneNumber = '8089931063';
  const firstName = 'ashad';
  bot.sendContact(chatId, phoneNumber, firstName)
})

bot.onText(/\/sendPoll/, msg => {
  const chatId = msg.chat.id;
  const question = 'Are you okay baby?';
  const options = ['Yes', 'No'];
  bot.sendPoll(chatId, question, options)
})

bot.onText(/\/stopPoll/, msg => {
  const chatId = msg.chat.id;
  const pollId = '6158763719829487620';
  bot.stopPoll(chatId, pollId)
})

bot.onText(/\/getChat/, msg => {
  const chatId = msg.chat.id;
  const chat = bot.getChat(chatId);
  bot.sendMessage(chatId, JSON.stringify(chat))
})

bot.onText(/\/deleteMessage/, msg => {
  const chatId = msg.chat.id;
  const messageId = msg.message_id;
  bot.deleteMessage(chatId, messageId);
})


// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  // Logger.log(msg)

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});

function doPost(e) {
  const postData = e.postData.contents;
  var update = JSON.parse(postData);
  var formattedData = JSON.stringify(update, undefined, 4)
  addLog_(formattedData)

  if (e.postData.type != "application/json") { return null };

  //bot code
  // if (update.message.text) {
  //   return bot.sendMessage(update.message.from.id, 'This bot is still alive')
  // }

  bot.processUpdate(update);

  return null
}

function test() {
  const update = {
    "update_id": 115770280,
    "message": {
      "message_id": 1,
      "from": {
        "id": 625310795,
        "is_bot": false,
        "first_name": "e-lab",
        "last_name": "innovations",
        "username": "elab_innovations",
        "language_code": "en"
      },
      "chat": {
        "id": 625310795,
        "first_name": "e-lab",
        "last_name": "innovations",
        "username": "elab_innovations",
        "type": "private"
      },
      "date": 1630239771,
      "text": "/start",
      "entities": [
        {
          "offset": 0,
          "length": 6,
          "type": "bot_command"
        }
      ]
    }
  }

  if (update.message.text) {
    //return bot.sendMessage(update.message.from.id, 'This bot is still alive')

    bot.processUpdate(update);
  }

  return false;

}

const testLog = () => {
  // Logger.log(bot.getFile('AgACAgUAAxkBAAPhYS71N0NVsFHpSr5GW1V_1s_HQq8AAoetMRuNWBFVCR7aDFAO4LoBAAMCAAN5AAMgBA'))
  // Logger.log(bot.getFileLink('AgACAgUAAxkBAAPhYS71N0NVsFHpSr5GW1V_1s_HQq8AAoetMRuNWBFVCR7aDFAO4LoBAAMCAAN5AAMgBA'))
  
}


const addLog_ = (data) => {
  var logs = ss.getSheetByName('Logs');
  logs.insertRowBefore(2);
  logs.getRange(2, 1, 1, 2).setValues([[new Date(), data]]);
}
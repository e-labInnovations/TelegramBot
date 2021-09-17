## Classes

<dl>
<dt><a href="#Bot">Bot</a></dt>
<dd><p>Bot</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#createBot">createBot(token, [options])</a></dt>
<dd></dd>
</dl>

<a name="Bot"></a>

## Bot
Bot

**Kind**: global class  
**See**: https://core.telegram.org/bots/api  

* [Bot](#Bot)
    * [new Bot(token, [options])](#new_Bot_new)
    * _instance_
        * [.on(event, listener)](#Bot+on)
        * [.emit(event)](#Bot+emit) ⇒ <code>Boolean</code>
        * [.getMe([options])](#Bot+getMe) ⇒ <code>Object</code>
        * [.logOut([options])](#Bot+logOut) ⇒ <code>Object</code>
        * [.close([options])](#Bot+close) ⇒ <code>Object</code>
        * [.setWebHook(url, [options])](#Bot+setWebHook) ⇒ <code>Object</code>
        * [.deleteWebHook([options])](#Bot+deleteWebHook) ⇒ <code>Object</code>
        * [.getWebHookInfo([options])](#Bot+getWebHookInfo) ⇒ <code>Object</code>
        * [.processUpdate(update)](#Bot+processUpdate)
        * [.sendMessage(chatId, text, [options])](#Bot+sendMessage) ⇒ <code>Object</code>
        * [.answerInlineQuery(inlineQueryId, results, [options])](#Bot+answerInlineQuery) ⇒ <code>Object</code>
        * [.forwardMessage(chatId, fromChatId, messageId, [options])](#Bot+forwardMessage) ⇒ <code>Object</code>
        * [.copyMessage(chatId, fromChatId, messageId, [options])](#Bot+copyMessage) ⇒ <code>Object</code>
        * [.sendPhoto(chatId, photo, [options])](#Bot+sendPhoto) ⇒ <code>Object</code>
        * [.sendAudio(chatId, audio, [options])](#Bot+sendAudio) ⇒ <code>Object</code>
        * [.sendDice(chatId, [options])](#Bot+sendDice) ⇒ <code>Object</code>
        * [.sendDocument(chatId, doc, [options])](#Bot+sendDocument) ⇒ <code>Object</code>
        * [.sendSticker(chatId, sticker, [options])](#Bot+sendSticker) ⇒ <code>Object</code>
        * [.sendVideo(chatId, video, [options])](#Bot+sendVideo) ⇒ <code>Object</code>
        * [.sendAnimation(chatId, animation, [options])](#Bot+sendAnimation) ⇒ <code>Object</code>
        * [.sendVideoNote(chatId, videoNote, [options])](#Bot+sendVideoNote) ⇒ <code>Object</code>
        * [.sendVoice(chatId, voice, [options])](#Bot+sendVoice) ⇒ <code>Object</code>
        * [.sendChatAction(chatId, action, [options])](#Bot+sendChatAction) ⇒ <code>Object</code>
        * [.banChatMember(chatId, userId, [options])](#Bot+banChatMember) ⇒ <code>Object</code>
        * [.unbanChatMember(chatId, userId, [options])](#Bot+unbanChatMember) ⇒ <code>Object</code>
        * [.restrictChatMember(chatId, userId, [options])](#Bot+restrictChatMember) ⇒ <code>Object</code>
        * [.promoteChatMember(chatId, userId, [options])](#Bot+promoteChatMember) ⇒ <code>Object</code>
        * [.setChatAdministratorCustomTitle(chatId, userId, customTitle, [options])](#Bot+setChatAdministratorCustomTitle) ⇒ <code>Object</code>
        * [.setChatPermissions(chatId, chatPermissions, [options])](#Bot+setChatPermissions) ⇒ <code>Object</code>
        * [.exportChatInviteLink(chatId, [options])](#Bot+exportChatInviteLink) ⇒ <code>Object</code>
        * [.createChatInviteLink(chatId, [options])](#Bot+createChatInviteLink) ⇒ <code>Object</code>
        * [.editChatInviteLink(chatId, inviteLink, [options])](#Bot+editChatInviteLink) ⇒ <code>Object</code>
        * [.revokeChatInviteLink(chatId, [options])](#Bot+revokeChatInviteLink) ⇒ <code>Object</code>
        * [.setChatPhoto(chatId, photo, [options])](#Bot+setChatPhoto) ⇒ <code>Object</code>
        * [.deleteChatPhoto(chatId, [options])](#Bot+deleteChatPhoto) ⇒ <code>Object</code>
        * [.setChatTitle(chatId, title, [options])](#Bot+setChatTitle) ⇒ <code>Object</code>
        * [.setChatDescription(chatId, description, [options])](#Bot+setChatDescription) ⇒ <code>Object</code>
        * [.pinChatMessage(chatId, messageId, [options])](#Bot+pinChatMessage) ⇒ <code>Object</code>
        * [.unpinChatMessage(chatId, [options])](#Bot+unpinChatMessage) ⇒ <code>Object</code>
        * [.unpinAllChatMessages(chatId, [options])](#Bot+unpinAllChatMessages) ⇒ <code>Object</code>
        * [.answerCallbackQuery(callbackQueryId, [options])](#Bot+answerCallbackQuery) ⇒ <code>Object</code>
        * [.setMyCommands(commands, [options])](#Bot+setMyCommands) ⇒ <code>Object</code>
        * [.getMyCommands([options])](#Bot+getMyCommands) ⇒ <code>Object</code>
        * [.deleteMyCommands([options])](#Bot+deleteMyCommands) ⇒ <code>Object</code>
        * [.editMessageText(text, [options])](#Bot+editMessageText) ⇒ <code>Object</code>
        * [.editMessageCaption(caption, [options])](#Bot+editMessageCaption) ⇒ <code>Object</code>
        * [.editMessageMedia(media, [options])](#Bot+editMessageMedia) ⇒ <code>Object</code>
        * [.editMessageReplyMarkup(replyMarkup, [options])](#Bot+editMessageReplyMarkup) ⇒ <code>Object</code>
        * [.getUserProfilePhotos(userId, [options])](#Bot+getUserProfilePhotos) ⇒ <code>Object</code>
        * [.sendLocation(chatId, latitude, longitude, [options])](#Bot+sendLocation) ⇒ <code>Object</code>
        * [.stopMessageLiveLocation([options])](#Bot+stopMessageLiveLocation) ⇒ <code>Object</code>
        * [.sendVenue(chatId, latitude, longitude, title, address, [options])](#Bot+sendVenue) ⇒ <code>Object</code>
        * [.sendContact(chatId, phoneNumber, firstName, [options])](#Bot+sendContact) ⇒ <code>Object</code>
        * [.sendPoll(chatId, question, pollOptions, [options])](#Bot+sendPoll) ⇒ <code>Object</code>
        * [.stopPoll(chatId, pollId, [options])](#Bot+stopPoll) ⇒ <code>Object</code>
        * [.getFile(fileId, [options])](#Bot+getFile) ⇒ <code>Object</code>
        * [.getFileLink(fileId, [options])](#Bot+getFileLink) ⇒ <code>Object</code>
        * [.onText(regexp, callback)](#Bot+onText)
        * [.removeTextListener(regexp)](#Bot+removeTextListener) ⇒ <code>Object</code>
        * [.clearTextListeners()](#Bot+clearTextListeners)
        * [.onReplyToMessage(chatId, messageId, callback)](#Bot+onReplyToMessage) ⇒ <code>Number</code>
        * [.removeReplyListener(replyListenerId)](#Bot+removeReplyListener) ⇒ <code>Object</code>
        * [.clearReplyListeners()](#Bot+clearReplyListeners)
        * [.getChat(chatId, [options])](#Bot+getChat) ⇒ <code>Object</code>
        * [.getChatAdministrators(chatId, [options])](#Bot+getChatAdministrators) ⇒ <code>Object</code>
        * [.getChatMemberCount(chatId, [options])](#Bot+getChatMemberCount) ⇒ <code>Object</code>
        * [.getChatMember(chatId, userId, [options])](#Bot+getChatMember) ⇒ <code>Object</code>
        * [.leaveChat(chatId, [options])](#Bot+leaveChat) ⇒ <code>Object</code>
        * [.setChatStickerSet(chatId, stickerSetName, [options])](#Bot+setChatStickerSet) ⇒ <code>Object</code>
        * [.deleteChatStickerSet(chatId, [options])](#Bot+deleteChatStickerSet) ⇒ <code>Object</code>
        * [.sendGame(chatId, gameShortName, [options])](#Bot+sendGame) ⇒ <code>Object</code>
        * [.setGameScore(userId, score, [options])](#Bot+setGameScore) ⇒ <code>Object</code>
        * [.getGameHighScores(userId, [options])](#Bot+getGameHighScores) ⇒ <code>Object</code>
        * [.deleteMessage(chatId, messageId, [options])](#Bot+deleteMessage) ⇒ <code>Object</code>
        * [.sendInvoice(chatId, title, description, payload, providerToken, startParameter, currency, prices, [options])](#Bot+sendInvoice) ⇒ <code>Object</code>
        * [.answerShippingQuery(shippingQueryId, ok, [options])](#Bot+answerShippingQuery) ⇒ <code>Object</code>
        * [.answerPreCheckoutQuery(preCheckoutQueryId, ok, [options])](#Bot+answerPreCheckoutQuery) ⇒ <code>Object</code>
        * [.getStickerSet(name, [options])](#Bot+getStickerSet) ⇒ <code>Object</code>
        * [.uploadStickerFile(userId, pngSticker, [options], [fileOptions])](#Bot+uploadStickerFile) ⇒ <code>Object</code>
        * [.createNewStickerSet(userId, name, title, pngSticker, emojis, [options], [fileOptions])](#Bot+createNewStickerSet) ⇒ <code>Object</code>
        * [.addStickerToSet(userId, name, pngSticker, emojis, [options], [fileOptions])](#Bot+addStickerToSet) ⇒ <code>Object</code>
        * [.setStickerPositionInSet(sticker, position, [options])](#Bot+setStickerPositionInSet) ⇒ <code>Object</code>
        * [.deleteStickerFromSet(sticker, [options])](#Bot+deleteStickerFromSet) ⇒ <code>Object</code>
    * _static_
        * [.messageTypes](#Bot.messageTypes) : <code>Array.&lt;String&gt;</code>

<a name="new_Bot_new"></a>

### new Bot(token, [options])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| token | <code>String</code> |  | Bot Token |
| [options] | <code>Object</code> |  |  |
| [options.baseApiUrl] | <code>String</code> | <code>&quot;https://api.telegram.org&quot;</code> | API Base URl; useful for proxying and testing |
| [options.onlyFirstMatch] | <code>Boolean</code> | <code>false</code> | Set to true to stop after first match. Otherwise, all regexps are executed |

<a name="Bot+on"></a>

### bot.on(event, listener)
Add listener for the specified [event](https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#events).
This is the usual `emitter.on()` method.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**

- [Available events](https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#events)
- https://nodejs.org/api/events.html#events_emitter_on_eventname_listener


| Param | Type |
| --- | --- |
| event | <code>String</code> | 
| listener | <code>function</code> | 

<a name="Bot+emit"></a>

### bot.emit(event) ⇒ <code>Boolean</code>
Calls each of the listeners registered for a given event.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Returns**: <code>Boolean</code> - `true` if the event had listeners, else `false`.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>String</code> \| <code>Symbol</code> | The event name. |

<a name="Bot+getMe"></a>

### bot.getMe([options]) ⇒ <code>Object</code>
Returns basic information about the bot in payload of a `User` object.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#getme  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+logOut"></a>

### bot.logOut([options]) ⇒ <code>Object</code>
This method log out your bot from the cloud Bot API server before launching the bot locally.
You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates.
After a successful call, you will not be able to log in again using the same token for 10 minutes.
Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#logout  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+close"></a>

### bot.close([options]) ⇒ <code>Object</code>
This method close the bot instance before moving it payload one local server to another.
This method will return error 429 in the first 10 minutes after the bot is launched.
Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#close  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+setWebHook"></a>

### bot.setWebHook(url, [options]) ⇒ <code>Object</code>
Specify an url to receive incoming updates via an outgoing webHook.
This method has an [older, compatible signature][setWebHook-v0.25.0]
that is being deprecated.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#setwebhook  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | URL where Telegram will make HTTP Post. Leave empty to delete webHook. |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+deleteWebHook"></a>

### bot.deleteWebHook([options]) ⇒ <code>Object</code>
Use this method to remove webhook integration if you decide to
switch back to getUpdates. Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#deletewebhook  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+getWebHookInfo"></a>

### bot.getWebHookInfo([options]) ⇒ <code>Object</code>
Use this method to get current webhook status.
On success, returns a [WebhookInfo](https://core.telegram.org/bots/api#webhookinfo) object.
If the bot is using getUpdates, will return an object with the
url field empty.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#getwebhookinfo  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+processUpdate"></a>

### bot.processUpdate(update)
Process an update; emitting the proper events and executing regexp
callbacks. This method is useful should you be using a different
way to fetch updates, other than those provided by TelegramBot.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#update  

| Param | Type |
| --- | --- |
| update | <code>Object</code> | 

<a name="Bot+sendMessage"></a>

### bot.sendMessage(chatId, text, [options]) ⇒ <code>Object</code>
Send text message.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#sendmessage  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| text | <code>String</code> | Text of the message to be sent |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+answerInlineQuery"></a>

### bot.answerInlineQuery(inlineQueryId, results, [options]) ⇒ <code>Object</code>
Send answers to an inline query.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#answerinlinequery  

| Param | Type | Description |
| --- | --- | --- |
| inlineQueryId | <code>String</code> | Unique identifier of the query |
| results | <code>Array.&lt;InlineQueryResult&gt;</code> | An array of results for the inline query |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+forwardMessage"></a>

### bot.forwardMessage(chatId, fromChatId, messageId, [options]) ⇒ <code>Object</code>
Forward messages of any kind.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#forwardmessage  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| fromChatId | <code>Number</code> \| <code>String</code> | Unique identifier for the chat where the original message was sent |
| messageId | <code>Number</code> \| <code>String</code> | Unique message identifier |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+copyMessage"></a>

### bot.copyMessage(chatId, fromChatId, messageId, [options]) ⇒ <code>Object</code>
Copy messages of any kind.
The method is analogous to the method forwardMessages, but the copied message doesn't
have a link to the original message.
Returns the MessageId of the sent message on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#copymessage  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| fromChatId | <code>Number</code> \| <code>String</code> | Unique identifier for the chat where the original message was sent |
| messageId | <code>Number</code> \| <code>String</code> | Unique message identifier |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+sendPhoto"></a>

### bot.sendPhoto(chatId, photo, [options]) ⇒ <code>Object</code>
Send photo

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#sendphoto  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| photo | <code>String</code> \| <code>stream.Stream</code> \| <code>Buffer</code> | A file path or a Stream. Can also be a `file_id` previously uploaded |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+sendAudio"></a>

### bot.sendAudio(chatId, audio, [options]) ⇒ <code>Object</code>
Send audio

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**

- https://core.telegram.org/bots/api#sendaudio
- https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#sending-files


| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| audio | <code>String</code> \| <code>stream.Stream</code> \| <code>Buffer</code> | A file path, Stream or Buffer. Can also be a `file_id` previously uploaded. |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+sendDice"></a>

### bot.sendDice(chatId, [options]) ⇒ <code>Object</code>
Send Dice
Use this method to send a dice.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#senddice  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+sendDocument"></a>

### bot.sendDocument(chatId, doc, [options]) ⇒ <code>Object</code>
Send Document

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#sendDocument  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| doc | <code>String</code> \| <code>stream.Stream</code> \| <code>Buffer</code> | A file path, Stream or Buffer. Can also be a `file_id` previously uploaded. |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+sendSticker"></a>

### bot.sendSticker(chatId, sticker, [options]) ⇒ <code>Object</code>
Send .webp stickers.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#sendsticker  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| sticker | <code>String</code> \| <code>stream.Stream</code> \| <code>Buffer</code> | A file path, Stream or Buffer. Can also be a `file_id` previously uploaded. Stickers are WebP format files. |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+sendVideo"></a>

### bot.sendVideo(chatId, video, [options]) ⇒ <code>Object</code>
Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as Document).

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#sendvideo  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| video | <code>String</code> \| <code>stream.Stream</code> \| <code>Buffer</code> | A file path or Stream. Can also be a `file_id` previously uploaded. |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+sendAnimation"></a>

### bot.sendAnimation(chatId, animation, [options]) ⇒ <code>Object</code>
Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound).

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#sending-files  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| animation | <code>String</code> \| <code>stream.Stream</code> \| <code>Buffer</code> | A file path, Stream or Buffer. Can also be a `file_id` previously uploaded. |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+sendVideoNote"></a>

### bot.sendVideoNote(chatId, videoNote, [options]) ⇒ <code>Object</code>
Use this method to send rounded square videos of upto 1 minute long.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Info**: The length parameter is actually optional. However, the API (at time of writing) requires you to always provide it until it is fixed.  
**See**: https://core.telegram.org/bots/api#sendvideonote  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| videoNote | <code>String</code> \| <code>stream.Stream</code> \| <code>Buffer</code> | A file path or Stream. Can also be a `file_id` previously uploaded. |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+sendVoice"></a>

### bot.sendVoice(chatId, voice, [options]) ⇒ <code>Object</code>
Send voice

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#sendvoice  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| voice | <code>String</code> \| <code>stream.Stream</code> \| <code>Buffer</code> | A file path, Stream or Buffer. Can also be a `file_id` previously uploaded. |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+sendChatAction"></a>

### bot.sendChatAction(chatId, action, [options]) ⇒ <code>Object</code>
Send chat action.
`typing` for text messages,
`upload_photo` for photos, `record_video` or `upload_video` for videos,
`record_voice` or `upload_voice` for audio files, `upload_document` for general files,
`find_location` for location data.

**Kind**: instance method of [<code>Bot</code>](#Bot)  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| action | <code>String</code> | Type of action to broadcast. |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+banChatMember"></a>

### bot.banChatMember(chatId, userId, [options]) ⇒ <code>Object</code>
Use this method to ban a user in a group, a supergroup or a channel.
In the case of supergroups and channels, the user will not be able to
return to the chat on their own using invite links, etc., unless unbanned first..
The bot must be an administrator in the group for this to work.
Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#banchatmember  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the target group or username of the target supergroup |
| userId | <code>Number</code> | Unique identifier of the target user |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+unbanChatMember"></a>

### bot.unbanChatMember(chatId, userId, [options]) ⇒ <code>Object</code>
Use this method to unban a previously kicked user in a supergroup.
The user will not return to the group automatically, but will be
able to join via link, etc. The bot must be an administrator in
the group for this to work. Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#unbanchatmember  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the target group or username of the target supergroup |
| userId | <code>Number</code> | Unique identifier of the target user |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+restrictChatMember"></a>

### bot.restrictChatMember(chatId, userId, [options]) ⇒ <code>Object</code>
Use this method to restrict a user in a supergroup.
The bot must be an administrator in the supergroup for this to work
and must have the appropriate admin rights. Pass True for all boolean parameters
to lift restrictions from a user. Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#restrictchatmember  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the target chat or username of the target supergroup |
| userId | <code>Number</code> | Unique identifier of the target user |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+promoteChatMember"></a>

### bot.promoteChatMember(chatId, userId, [options]) ⇒ <code>Object</code>
Use this method to promote or demote a user in a supergroup or a channel.
The bot must be an administrator in the chat for this to work
and must have the appropriate admin rights. Pass False for all boolean parameters to demote a user.
Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#promotechatmember  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the target chat or username of the target supergroup |
| userId | <code>Number</code> |  |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+setChatAdministratorCustomTitle"></a>

### bot.setChatAdministratorCustomTitle(chatId, userId, customTitle, [options]) ⇒ <code>Object</code>
Use this method to set a custom title for an administrator in a supergroup promoted by the bot.
Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#setchatadministratorcustomtitle  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| userId | <code>Number</code> | Unique identifier of the target user |
| customTitle | <code>String</code> | New custom title for the administrator; 0-16 characters, emoji are not allowed |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+setChatPermissions"></a>

### bot.setChatPermissions(chatId, chatPermissions, [options]) ⇒ <code>Object</code>
Use this method to set default chat permissions for all members.
The bot must be an administrator in the group or a supergroup for this to
work and must have the can_restrict_members admin rights.
Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#setchatpermissions  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| chatPermissions | <code>Array</code> | New default chat permissions |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+exportChatInviteLink"></a>

### bot.exportChatInviteLink(chatId, [options]) ⇒ <code>Object</code>
Use this method to export an invite link to a supergroup or a channel.
The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
Returns exported invite link as String on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#exportchatinvitelink  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the target chat or username of the target supergroup |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+createChatInviteLink"></a>

### bot.createChatInviteLink(chatId, [options]) ⇒ <code>Object</code>
Use this method to create an additional invite link for a chat.
The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
Returns the new invite link as ChatInviteLink object.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Returns**: <code>Object</code> - ChatInviteLink  
**See**: https://core.telegram.org/bots/api#createchatinvitelink  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the target chat or username of the target supergroup |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+editChatInviteLink"></a>

### bot.editChatInviteLink(chatId, inviteLink, [options]) ⇒ <code>Object</code>
Use this method to edit a non-primary invite link created by the bot.
The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
Returns the edited invite link as a ChatInviteLink object.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Returns**: <code>Object</code> - ChatInviteLink  
**See**: https://core.telegram.org/bots/api#editchatinvitelink  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the target chat or username of the target supergroup |
| inviteLink | <code>String</code> | Text with the invite link to edit |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+revokeChatInviteLink"></a>

### bot.revokeChatInviteLink(chatId, [options]) ⇒ <code>Object</code>
Use this method to revoke an invite link created by the bot.
Note: If the primary link is revoked, a new link is automatically generated
The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
Returns the revoked invite link as ChatInviteLink object.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Returns**: <code>Object</code> - ChatInviteLink  
**See**: https://core.telegram.org/bots/api#revokechatinvitelink  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the target chat or username of the target supergroup |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+setChatPhoto"></a>

### bot.setChatPhoto(chatId, photo, [options]) ⇒ <code>Object</code>
Use this method to set a new profile photo for the chat. Photos can't be changed for private chats.
The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#setchatphoto  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| photo | <code>stream.Stream</code> \| <code>Buffer</code> | A file path or a Stream. |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+deleteChatPhoto"></a>

### bot.deleteChatPhoto(chatId, [options]) ⇒ <code>Object</code>
Use this method to delete a chat photo. Photos can't be changed for private chats.
The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#deletechatphoto  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+setChatTitle"></a>

### bot.setChatTitle(chatId, title, [options]) ⇒ <code>Object</code>
Use this method to change the title of a chat. Titles can't be changed for private chats.
The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#setchattitle  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| title | <code>String</code> | New chat title, 1-255 characters |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+setChatDescription"></a>

### bot.setChatDescription(chatId, description, [options]) ⇒ <code>Object</code>
Use this method to change the description of a supergroup or a channel.
The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#setchatdescription  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| description | <code>String</code> | New chat title, 1-255 characters |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+pinChatMessage"></a>

### bot.pinChatMessage(chatId, messageId, [options]) ⇒ <code>Object</code>
Use this method to pin a message in a supergroup.
The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#pinchatmessage  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| messageId | <code>Number</code> | Identifier of a message to pin |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+unpinChatMessage"></a>

### bot.unpinChatMessage(chatId, [options]) ⇒ <code>Object</code>
Use this method to unpin a message in a supergroup chat.
The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#unpinchatmessage  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+unpinAllChatMessages"></a>

### bot.unpinAllChatMessages(chatId, [options]) ⇒ <code>Object</code>
Use this method to clear the list of pinned messages in a chat
The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#unpinallchatmessages  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+answerCallbackQuery"></a>

### bot.answerCallbackQuery(callbackQueryId, [options]) ⇒ <code>Object</code>
Use this method to send answers to callback queries sent from
inline keyboards. The answer will be displayed to the user as
a notification at the top of the chat screen or as an alert.
On success, True is returned.

This method has **older, compatible signatures ([1][answerCallbackQuery-v0.27.1])([2][answerCallbackQuery-v0.29.0])**
that are being deprecated.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#answercallbackquery  

| Param | Type | Description |
| --- | --- | --- |
| callbackQueryId | <code>String</code> | Unique identifier for the query to be answered |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+setMyCommands"></a>

### bot.setMyCommands(commands, [options]) ⇒ <code>Object</code>
Returns True on success.
Use this method to change the list of the bot's commands.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#setmycommands  

| Param | Type | Description |
| --- | --- | --- |
| commands | <code>Array</code> | Poll options, between 2-10 options |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+getMyCommands"></a>

### bot.getMyCommands([options]) ⇒ <code>Object</code>
Returns Array of BotCommand on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#getmycommands  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+deleteMyCommands"></a>

### bot.deleteMyCommands([options]) ⇒ <code>Object</code>
Returns True on success.
Use this method to delete the list of the bot's commands for the given scope and user language.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#deletemycommands  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+editMessageText"></a>

### bot.editMessageText(text, [options]) ⇒ <code>Object</code>
Use this method to edit text messages sent by the bot or via
the bot (for inline bots). On success, the edited Message is
returned.

Note that you must provide one of chat_id, message_id, or
inline_message_id in your request.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#editmessagetext  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | New text of the message |
| [options] | <code>Object</code> | Additional Telegram query options (provide either one of chat_id, message_id, or inline_message_id here) |

<a name="Bot+editMessageCaption"></a>

### bot.editMessageCaption(caption, [options]) ⇒ <code>Object</code>
Use this method to edit captions of messages sent by the
bot or via the bot (for inline bots). On success, the
edited Message is returned.

Note that you must provide one of chat_id, message_id, or
inline_message_id in your request.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#editmessagecaption  

| Param | Type | Description |
| --- | --- | --- |
| caption | <code>String</code> | New caption of the message |
| [options] | <code>Object</code> | Additional Telegram query options (provide either one of chat_id, message_id, or inline_message_id here) |

<a name="Bot+editMessageMedia"></a>

### bot.editMessageMedia(media, [options]) ⇒ <code>Object</code>
Use this method to edit audio, document, photo, or video messages.
If a message is a part of a message album, then it can be edited only to a photo or a video.
Otherwise, message type can be changed arbitrarily. When inline message is edited, new file can't be uploaded.
Use previously uploaded file via its file_id or specify a URL.
On success, the edited Message is returned.

Note that you must provide one of chat_id, message_id, or
inline_message_id in your request.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#editmessagemedia  

| Param | Type | Description |
| --- | --- | --- |
| media | <code>Object</code> | A JSON-serialized object for a new media content of the message |
| [options] | <code>Object</code> | Additional Telegram query options (provide either one of chat_id, message_id, or inline_message_id here) |

<a name="Bot+editMessageReplyMarkup"></a>

### bot.editMessageReplyMarkup(replyMarkup, [options]) ⇒ <code>Object</code>
Use this method to edit only the reply markup of messages
sent by the bot or via the bot (for inline bots).
On success, the edited Message is returned.

Note that you must provide one of chat_id, message_id, or
inline_message_id in your request.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#editmessagetext  

| Param | Type | Description |
| --- | --- | --- |
| replyMarkup | <code>Object</code> | A JSON-serialized object for an inline keyboard. |
| [options] | <code>Object</code> | Additional Telegram query options (provide either one of chat_id, message_id, or inline_message_id here) |

<a name="Bot+getUserProfilePhotos"></a>

### bot.getUserProfilePhotos(userId, [options]) ⇒ <code>Object</code>
Use this method to get a list of profile pictures for a user.
Returns a [UserProfilePhotos](https://core.telegram.org/bots/api#userprofilephotos) object.
This method has an [older, compatible signature][getUserProfilePhotos-v0.25.0]
that is being deprecated.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#getuserprofilephotos  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>Number</code> | Unique identifier of the target user |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+sendLocation"></a>

### bot.sendLocation(chatId, latitude, longitude, [options]) ⇒ <code>Object</code>
Send location.
Use this method to send point on the map.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#sendlocation  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| latitude | <code>Float</code> | Latitude of location |
| longitude | <code>Float</code> | Longitude of location |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+stopMessageLiveLocation"></a>

### bot.stopMessageLiveLocation([options]) ⇒ <code>Object</code>
Use this method to stop updating a live location message sent by
the bot or via the bot (for inline bots) before live_period expires.

Note that you must provide one of chat_id, message_id, or
inline_message_id in your request.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#stopmessagelivelocation  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Additional Telegram query options (provide either one of chat_id, message_id, or inline_message_id here) |

<a name="Bot+sendVenue"></a>

### bot.sendVenue(chatId, latitude, longitude, title, address, [options]) ⇒ <code>Object</code>
Send venue.
Use this method to send information about a venue.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#sendvenue  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| latitude | <code>Float</code> | Latitude of location |
| longitude | <code>Float</code> | Longitude of location |
| title | <code>String</code> | Name of the venue |
| address | <code>String</code> | Address of the venue |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+sendContact"></a>

### bot.sendContact(chatId, phoneNumber, firstName, [options]) ⇒ <code>Object</code>
Send contact.
Use this method to send phone contacts.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#sendcontact  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| phoneNumber | <code>String</code> | Contact's phone number |
| firstName | <code>String</code> | Contact's first name |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+sendPoll"></a>

### bot.sendPoll(chatId, question, pollOptions, [options]) ⇒ <code>Object</code>
Send poll.
Use this method to send a native poll.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#sendpoll  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the group/channel |
| question | <code>String</code> | Poll question, 255 char limit |
| pollOptions | <code>Array</code> | Poll options, between 2-10 options |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+stopPoll"></a>

### bot.stopPoll(chatId, pollId, [options]) ⇒ <code>Object</code>
Stop poll.
Use this method to stop a native poll.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#stoppoll  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the group/channel |
| pollId | <code>Number</code> | Identifier of the original message with the poll |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+getFile"></a>

### bot.getFile(fileId, [options]) ⇒ <code>Object</code>
Get file.
Use this method to get basic info about a file and prepare it for downloading.
Attention: link will be valid for 1 hour.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#getfile  

| Param | Type | Description |
| --- | --- | --- |
| fileId | <code>String</code> | File identifier to get info about |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+getFileLink"></a>

### bot.getFileLink(fileId, [options]) ⇒ <code>Object</code>
Get link for file.
Use this method to get link for file for subsequent use.
Attention: link will be valid for 1 hour.

This method is a sugar extension of the (getFile)[#getfilefileid] method,
which returns just path to file on remote server (you will have to manually build full uri after that).

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Returns**: <code>Object</code> - promise Promise which will have *fileURI* in resolve callback  
**See**: https://core.telegram.org/bots/api#getfile  

| Param | Type | Description |
| --- | --- | --- |
| fileId | <code>String</code> | File identifier to get info about |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+onText"></a>

### bot.onText(regexp, callback)
Register a RegExp to test against an incomming text message.

**Kind**: instance method of [<code>Bot</code>](#Bot)  

| Param | Type | Description |
| --- | --- | --- |
| regexp | <code>RegExp</code> | RegExp to be executed with `exec`. |
| callback | <code>function</code> | Callback will be called with 2 parameters, the `msg` and the result of executing `regexp.exec` on message text. |

<a name="Bot+removeTextListener"></a>

### bot.removeTextListener(regexp) ⇒ <code>Object</code>
Remove a listener registered with `onText()`.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Returns**: <code>Object</code> - deletedListener The removed reply listener if
  found. This object has `regexp` and `callback`
  properties. If not found, returns `null`.  

| Param | Type | Description |
| --- | --- | --- |
| regexp | <code>RegExp</code> | RegExp used previously in `onText()` |

<a name="Bot+clearTextListeners"></a>

### bot.clearTextListeners()
Remove all listeners registered with `onText()`.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
<a name="Bot+onReplyToMessage"></a>

### bot.onReplyToMessage(chatId, messageId, callback) ⇒ <code>Number</code>
Register a reply to wait for a message response.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Returns**: <code>Number</code> - id                    The ID of the inserted reply listener.  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | The chat id where the message cames from. |
| messageId | <code>Number</code> \| <code>String</code> | The message id to be replied. |
| callback | <code>function</code> | Callback will be called with the reply  message. |

<a name="Bot+removeReplyListener"></a>

### bot.removeReplyListener(replyListenerId) ⇒ <code>Object</code>
Removes a reply that has been prev. registered for a message response.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Returns**: <code>Object</code> - deletedListener      The removed reply listener if
  found. This object has `id`, `chatId`, `messageId` and `callback`
  properties. If not found, returns `null`.  

| Param | Type | Description |
| --- | --- | --- |
| replyListenerId | <code>Number</code> | The ID of the reply listener. |

<a name="Bot+clearReplyListeners"></a>

### bot.clearReplyListeners()
Removes all replies that have been prev. registered for a message response.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
<a name="Bot+getChat"></a>

### bot.getChat(chatId, [options]) ⇒ <code>Object</code>
Use this method to get up to date information about the chat
(current name of the user for one-on-one conversations, current
username of a user, group or channel, etc.).

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#getchat  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the target chat or username of the target supergroup or channel |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+getChatAdministrators"></a>

### bot.getChatAdministrators(chatId, [options]) ⇒ <code>Object</code>
Returns the administrators in a chat in form of an Array of `ChatMember` objects.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#getchatadministrators  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the target group or username of the target supergroup |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+getChatMemberCount"></a>

### bot.getChatMemberCount(chatId, [options]) ⇒ <code>Object</code>
Use this method to get the number of members in a chat.
Returns Int on success

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#getchatmembercount  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the target group or username of the target supergroup |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+getChatMember"></a>

### bot.getChatMember(chatId, userId, [options]) ⇒ <code>Object</code>
Use this method to get information about a member of a chat.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#getchatmember  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the target group or username of the target supergroup |
| userId | <code>Number</code> | Unique identifier of the target user |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+leaveChat"></a>

### bot.leaveChat(chatId, [options]) ⇒ <code>Object</code>
Leave a group, supergroup or channel.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#leavechat  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername) |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+setChatStickerSet"></a>

### bot.setChatStickerSet(chatId, stickerSetName, [options]) ⇒ <code>Object</code>
Use this method to set a new group sticker set for a supergroup.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#setchatstickerset  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername) |
| stickerSetName | <code>String</code> | Name of the sticker set to be set as the group sticker set |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+deleteChatStickerSet"></a>

### bot.deleteChatStickerSet(chatId, [options]) ⇒ <code>Object</code>
Use this method to delete a group sticker set from a supergroup.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#deletechatstickerset  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername) |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+sendGame"></a>

### bot.sendGame(chatId, gameShortName, [options]) ⇒ <code>Object</code>
Use this method to send a game.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#sendgame  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| gameShortName | <code>String</code> | name of the game to be sent. |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+setGameScore"></a>

### bot.setGameScore(userId, score, [options]) ⇒ <code>Object</code>
Use this method to set the score of the specified user in a game.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#setgamescore  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>Number</code> | Unique identifier of the target user |
| score | <code>Number</code> | New score value. |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+getGameHighScores"></a>

### bot.getGameHighScores(userId, [options]) ⇒ <code>Object</code>
Use this method to get data for high score table.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#getgamehighscores  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>Number</code> | Unique identifier of the target user |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+deleteMessage"></a>

### bot.deleteMessage(chatId, messageId, [options]) ⇒ <code>Object</code>
Use this method to delete a message.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#deletemessage  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier of the target chat |
| messageId | <code>Number</code> | Unique identifier of the target message |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+sendInvoice"></a>

### bot.sendInvoice(chatId, title, description, payload, providerToken, startParameter, currency, prices, [options]) ⇒ <code>Object</code>
Send invoice.
Use this method to send an invoice.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#sendinvoice  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> \| <code>String</code> | Unique identifier for the message recipient |
| title | <code>String</code> | Product name |
| description | <code>String</code> | product description |
| payload | <code>String</code> | Bot defined invoice payload |
| providerToken | <code>String</code> | Payments provider token |
| startParameter | <code>String</code> | Deep-linking parameter |
| currency | <code>String</code> | Three-letter ISO 4217 currency code |
| prices | <code>Array</code> | Breakdown of prices |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+answerShippingQuery"></a>

### bot.answerShippingQuery(shippingQueryId, ok, [options]) ⇒ <code>Object</code>
Answer shipping query..
Use this method to reply to shipping queries.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#answershippingquery  

| Param | Type | Description |
| --- | --- | --- |
| shippingQueryId | <code>String</code> | Unique identifier for the query to be answered |
| ok | <code>Boolean</code> | Specify if delivery of the product is possible |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+answerPreCheckoutQuery"></a>

### bot.answerPreCheckoutQuery(preCheckoutQueryId, ok, [options]) ⇒ <code>Object</code>
Answer pre-checkout query.
Use this method to confirm shipping of a product.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#answerprecheckoutquery  

| Param | Type | Description |
| --- | --- | --- |
| preCheckoutQueryId | <code>String</code> | Unique identifier for the query to be answered |
| ok | <code>Boolean</code> | Specify if every order details are ok |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+getStickerSet"></a>

### bot.getStickerSet(name, [options]) ⇒ <code>Object</code>
Use this method to get a sticker set. On success, a [StickerSet](https://core.telegram.org/bots/api#stickerset) object is returned.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#getstickerset  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Name of the sticker set |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+uploadStickerFile"></a>

### bot.uploadStickerFile(userId, pngSticker, [options], [fileOptions]) ⇒ <code>Object</code>
Use this method to upload a .png file with a sticker for later use in *createNewStickerSet* and *addStickerToSet* methods (can be used multiple
times). Returns the uploaded [File](https://core.telegram.org/bots/api#file) on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#uploadstickerfile  

| Param | Type | Description |
| --- | --- | --- |
| userId | <code>Number</code> | User identifier of sticker file owner |
| pngSticker | <code>String</code> \| <code>stream.Stream</code> \| <code>Buffer</code> | A file path or a Stream. Can also be a `file_id` previously uploaded. **Png** image with the  sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. |
| [options] | <code>Object</code> | Additional Telegram query options |
| [fileOptions] | <code>Object</code> | Optional file related meta-data |

<a name="Bot+createNewStickerSet"></a>

### bot.createNewStickerSet(userId, name, title, pngSticker, emojis, [options], [fileOptions]) ⇒ <code>Object</code>
Use this method to create new sticker set owned by a user.
The bot will be able to edit the created sticker set.
Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#createnewstickerset  
**Todo**

- [ ] Add tests for this method!


| Param | Type | Description |
| --- | --- | --- |
| userId | <code>Number</code> | User identifier of created sticker set owner |
| name | <code>String</code> | Short name of sticker set, to be used in `t.me/addstickers/` URLs (e.g., *animals*) |
| title | <code>String</code> | Sticker set title, 1-64 characters |
| pngSticker | <code>String</code> \| <code>stream.Stream</code> \| <code>Buffer</code> | Png image with the sticker, must be up to 512 kilobytes in size,  dimensions must not exceed 512px, and either width or height must be exactly 512px. |
| emojis | <code>String</code> | One or more emoji corresponding to the sticker |
| [options] | <code>Object</code> | Additional Telegram query options |
| [fileOptions] | <code>Object</code> | Optional file related meta-data |

<a name="Bot+addStickerToSet"></a>

### bot.addStickerToSet(userId, name, pngSticker, emojis, [options], [fileOptions]) ⇒ <code>Object</code>
Use this method to add a new sticker to a set created by the bot.
Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#addstickertoset  
**Todo**

- [ ] Add tests for this method!


| Param | Type | Description |
| --- | --- | --- |
| userId | <code>Number</code> | User identifier of sticker set owner |
| name | <code>String</code> | Sticker set name |
| pngSticker | <code>String</code> \| <code>stream.Stream</code> \| <code>Buffer</code> | Png image with the sticker, must be up to 512 kilobytes in size,  dimensions must not exceed 512px, and either width or height must be exactly 512px |
| emojis | <code>String</code> | One or more emoji corresponding to the sticker |
| [options] | <code>Object</code> | Additional Telegram query options |
| [fileOptions] | <code>Object</code> | Optional file related meta-data |

<a name="Bot+setStickerPositionInSet"></a>

### bot.setStickerPositionInSet(sticker, position, [options]) ⇒ <code>Object</code>
Use this method to move a sticker in a set created by the bot to a specific position.
Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#setstickerpositioninset  
**Todo**

- [ ] Add tests for this method!


| Param | Type | Description |
| --- | --- | --- |
| sticker | <code>String</code> | File identifier of the sticker |
| position | <code>Number</code> | New sticker position in the set, zero-based |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot+deleteStickerFromSet"></a>

### bot.deleteStickerFromSet(sticker, [options]) ⇒ <code>Object</code>
Use this method to delete a sticker from a set created by the bot.
Returns True on success.

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**See**: https://core.telegram.org/bots/api#deletestickerfromset  
**Todo**

- [ ] Add tests for this method!


| Param | Type | Description |
| --- | --- | --- |
| sticker | <code>String</code> | File identifier of the sticker |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="Bot.messageTypes"></a>

### Bot.messageTypes : <code>Array.&lt;String&gt;</code>
The types of message updates the library handles.

**Kind**: static property of [<code>Bot</code>](#Bot)  
<a name="createBot"></a>

## createBot(token, [options])
**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| token | <code>String</code> |  | Bot Token |
| [options] | <code>Object</code> |  |  |
| [options.baseApiUrl] | <code>String</code> | <code>&quot;https://api.telegram.org&quot;</code> | API Base URl; useful for proxying and testing |
| [options.onlyFirstMatch] | <code>Boolean</code> | <code>false</code> | Set to true to stop after first match. Otherwise, all regexps are executed |


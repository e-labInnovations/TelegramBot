(function (host, expose) {
   var module = { exports: {} };
   var exports = module.exports;
   /****** code begin *********/
const _messageTypes = [
    'text',
    'animation',
    'audio',
    'channel_chat_created',
    'contact',
    'delete_chat_photo',
    'dice',
    'document',
    'game',
    'group_chat_created',
    'invoice',
    'left_chat_member',
    'location',
    'migrate_from_chat_id',
    'migrate_to_chat_id',
    'new_chat_members',
    'new_chat_photo',
    'new_chat_title',
    'passport_data',
    'photo',
    'pinned_message',
    'poll',
    'sticker',
    'successful_payment',
    'supergroup_chat_created',
    'video',
    'video_note',
    'voice',
    'voice_chat_started',
    'voice_chat_ended',
    'voice_chat_participants_invited',
    'voice_chat_scheduled',
    'message_auto_delete_timer_changed',
    'chat_invite_link',
    'chat_member_updated'
];
const _deprecatedMessageTypes = [
    'new_chat_participant', 'left_chat_participant'
];




/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events_() { }

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    Events_.prototype = Object.create(null);

    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events_().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
class EE {
    constructor(fn, context, once) {
        this.fn = fn;
        this.context = context;
        this.once = once || false;
    }
}




/**
 * JSON-serialize data. If the provided data is already a String,
 * return it as is.
 * @private
 * @param  {*} data
 * @return {String}
 */
function stringify_(data) {
    if (typeof data === 'string') {
        return data;
    }
    return JSON.stringify(data);
}


class Bot {
    /**
     * The types of message updates the library handles.
     * @type {String[]}
     */
    static get messageTypes() {
        return _messageTypes;
    }

    /**
     * @class Bot
     * @constructor
     * @param {String} token Bot Token
     * @param {Object} [options]
     * @param {String} [options.baseApiUrl="https://api.telegram.org"] API Base URl; useful for proxying and testing
     * @param {Boolean} [options.onlyFirstMatch=false] Set to true to stop after first match. Otherwise, all regexps are executed
     * @see https://core.telegram.org/bots/api
     */
    constructor(token, options = {}) {
        this.token = token;
        this.options = options;
        this.options.baseApiUrl = options.baseApiUrl || 'https://api.telegram.org';
        this._textRegexpCallbacks = [];
        this._replyListenerId = 0;
        this._replyListeners = [];
        this._events = new Events_();
        this._eventsCount = 0;
    }

    /**
     * Add listener for the specified [event](https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#events).
     * This is the usual `emitter.on()` method.
     * @param  {String} event
     * @param  {Function} listener
     * @see {@link https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#events|Available events}
     * @see https://nodejs.org/api/events.html#events_emitter_on_eventname_listener
     */
    on(event, listener) {
        if (_deprecatedMessageTypes.indexOf(event) !== -1) {
            //deprecate(`Events ${_deprecatedMessageTypes.join(',')} are deprecated. See the updated list of events: ${url}`);
        }

        if (typeof listener !== 'function') {
            throw new TypeError('The listener must be a function');
        }

        var listener = new EE(listener, undefined || this, false)
            , evt = prefix ? prefix + event : event;

        if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
        else if (!this._events[evt].listener) this._events[evt].push(listener);
        else this._events[evt] = [this._events[evt], listener];

        return this;
    }

    /**
    * Calls each of the listeners registered for a given event.
    *
    * @param {(String|Symbol)} event The event name.
    * @returns {Boolean} `true` if the event had listeners, else `false`.
    * @public
    */
    emit(event, a1, a2, a3, a4, a5) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt])
            return false;
        var listeners = this._events[evt], len = arguments.length, args, i;
        if (listeners.fn) {
            if (listeners.once)
                this.removeListener(event, listeners.fn, undefined, true);
            switch (len) {
                case 1: return listeners.fn.call(listeners.context), true;
                case 2: return listeners.fn.call(listeners.context, a1), true;
                case 3: return listeners.fn.call(listeners.context, a1, a2), true;
                case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
                case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
                case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
            }
            for (i = 1, args = new Array(len - 1); i < len; i++) {
                args[i - 1] = arguments[i];
            }
            listeners.fn.apply(listeners.context, args);
        }
        else {
            var length = listeners.length, j;
            for (i = 0; i < length; i++) {
                if (listeners[i].once)
                    this.removeListener(event, listeners[i].fn, undefined, true);
                switch (len) {
                    case 1:
                        listeners[i].fn.call(listeners[i].context);
                        break;
                    case 2:
                        listeners[i].fn.call(listeners[i].context, a1);
                        break;
                    case 3:
                        listeners[i].fn.call(listeners[i].context, a1, a2);
                        break;
                    case 4:
                        listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                        break;
                    default:
                        if (!args)
                            for (j = 1, args = new Array(len - 1); j < len; j++) {
                                args[j - 1] = arguments[j];
                            }
                        listeners[i].fn.apply(listeners[i].context, args);
                }
            }
        }
        return true;
    }

    /**
     * Fix 'reply_markup' parameter by making it JSON-serialized, as
     * required by the Telegram Bot API
     * @param {Object} obj Object; either 'form' or 'qs'
     * @private
     * @see https://core.telegram.org/bots/api#sendmessage
     */
    _fixReplyMarkup(obj) {
        const replyMarkup = obj.reply_markup;
        if (replyMarkup && typeof replyMarkup !== 'string') {
            obj.reply_markup = stringify_(replyMarkup);
        }
    }

    /**
     * Make request against the API
     * @param  {String} method API endpoint
     * @param  {Object} data
     * @private
     * @return {Object}
     */
    _request(_path, options = {}) {
        if (!this.token) {
            //respond an error
        }

        options.payload = stringify_(options.payload);
        options.method = 'POST';
        options.contentType = 'application/json';

        Logger.log(options)
        var response = UrlFetchApp.fetch('https://api.telegram.org/bot' + this.token + '/' + _path, options);
        if (response.getResponseCode() == 200) {
            return JSON.parse(response.getContentText());
        }
        return false;
    }

    /**
     * Returns basic information about the bot in payload of a `User` object.
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#getme
     */
    getMe(payload = {}) {
        return this._request('getMe', { payload });
    }

    /**
     * This method log out your bot from the cloud Bot API server before launching the bot locally.
     * You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates.
     * After a successful call, you will not be able to log in again using the same token for 10 minutes.
     * Returns True on success.
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#logout
     */
    logOut(payload = {}) {
        return this._request('logOut', { payload });
    }

    /**
     * This method close the bot instance before moving it payload one local server to another.
     * This method will return error 429 in the first 10 minutes after the bot is launched.
     * Returns True on success.
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#close
     */
    close(payload = {}) {
        return this._request('close', { payload });
    }

    /**
     * Specify an url to receive incoming updates via an outgoing webHook.
     * This method has an [older, compatible signature][setWebHook-v0.25.0]
     * that is being deprecated.
     *
     * @param  {String} url URL where Telegram will make HTTP Post. Leave empty to
     * delete webHook.
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#setwebhook
     */
    setWebHook(url, payload = {},) {
        payload.url = url;
        return this._request('setWebHook', { payload });
    }

    /**
     * Use this method to remove webhook integration if you decide to
     * switch back to getUpdates. Returns True on success.
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#deletewebhook
     */
    deleteWebHook(payload = {}) {
        return this._request('deleteWebhook', { payload });
    }

    /**
     * Use this method to get current webhook status.
     * On success, returns a [WebhookInfo](https://core.telegram.org/bots/api#webhookinfo) object.
     * If the bot is using getUpdates, will return an object with the
     * url field empty.
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#getwebhookinfo
     */
    getWebHookInfo(payload = {}) {
        return this._request('getWebhookInfo', { payload });
    }

    /**
     * Process an update; emitting the proper events and executing regexp
     * callbacks. This method is useful should you be using a different
     * way to fetch updates, other than those provided by TelegramBot.
     * @param  {Object} update
     * @see https://core.telegram.org/bots/api#update
     */
    processUpdate(update) {
        // debug('Process Update %j', update);
        const message = update.message;
        const editedMessage = update.edited_message;
        const channelPost = update.channel_post;
        const editedChannelPost = update.edited_channel_post;
        const inlineQuery = update.inline_query;
        const chosenInlineResult = update.chosen_inline_result;
        const callbackQuery = update.callback_query;
        const shippingQuery = update.shipping_query;
        const preCheckoutQuery = update.pre_checkout_query;
        const poll = update.poll;
        const pollAnswer = update.poll_answer;
        const chatMember = update.chat_member;
        const myChatMember = update.my_chat_member;

        if (message) {
            //debug('Process Update message %j', message);
            const metadata = {};
            metadata.type = Bot.messageTypes.find((messageType) => {
                return message[messageType];
            });
            this.emit('message', message, metadata);
            if (metadata.type) {
                //debug('Emitting %s: %j', metadata.type, message);
                this.emit(metadata.type, message, metadata);
            }
            if (message.text) {
                //debug('Text message');0
                this._textRegexpCallbacks.some(reg => {
                    //debug('Matching %s with %s', message.text, reg.regexp);
                    const result = reg.regexp.exec(message.text);
                    if (!result) {
                        return false;
                    }
                    // reset index so we start at the beginning of the regex each time
                    reg.regexp.lastIndex = 0;
                    //debug('Matches %s', reg.regexp);
                    reg.callback(message, result);
                    // returning truthy value exits .some
                    return this.options.onlyFirstMatch;
                });
            }
            if (message.reply_to_message) {
                // Only callbacks waiting for this message
                this._replyListeners.forEach(reply => {
                    // Message from the same chat
                    if (reply.chatId === message.chat.id) {
                        // Responding to that message
                        if (reply.messageId === message.reply_to_message.message_id) {
                            // Resolve the promise
                            reply.callback(message);
                        }
                    }
                });
            }
        } else if (editedMessage) {
            //debug('Process Update edited_message %j', editedMessage);
            this.emit('edited_message', editedMessage);
            if (editedMessage.text) {
                this.emit('edited_message_text', editedMessage);
            }
            if (editedMessage.caption) {
                this.emit('edited_message_caption', editedMessage);
            }
        } else if (channelPost) {
            //debug('Process Update channel_post %j', channelPost);
            this.emit('channel_post', channelPost);
        } else if (editedChannelPost) {
            //debug('Process Update edited_channel_post %j', editedChannelPost);
            this.emit('edited_channel_post', editedChannelPost);
            if (editedChannelPost.text) {
                this.emit('edited_channel_post_text', editedChannelPost);
            }
            if (editedChannelPost.caption) {
                this.emit('edited_channel_post_caption', editedChannelPost);
            }
        } else if (inlineQuery) {
            //debug('Process Update inline_query %j', inlineQuery);
            this.emit('inline_query', inlineQuery);
        } else if (chosenInlineResult) {
            //debug('Process Update chosen_inline_result %j', chosenInlineResult);
            this.emit('chosen_inline_result', chosenInlineResult);
        } else if (callbackQuery) {
            //debug('Process Update callback_query %j', callbackQuery);
            this.emit('callback_query', callbackQuery);
        } else if (shippingQuery) {
            //debug('Process Update shipping_query %j', shippingQuery);
            this.emit('shipping_query', shippingQuery);
        } else if (preCheckoutQuery) {
            //debug('Process Update pre_checkout_query %j', preCheckoutQuery);
            this.emit('pre_checkout_query', preCheckoutQuery);
        } else if (poll) {
            //debug('Process Update poll %j', poll);
            this.emit('poll', poll);
        } else if (pollAnswer) {
            //debug('Process Update poll_answer %j', pollAnswer);
            this.emit('poll_answer', pollAnswer);
        } else if (chatMember) {
            //debug('Process Update chat_member %j', chatMember);
            this.emit('chat_member', chatMember);
        } else if (myChatMember) {
            //debug('Process Update my_chat_member %j', myChatMember);
            this.emit('my_chat_member', myChatMember);
        }
    }

    /**
     * Send text message.
     * @param  {Number|String} chatId Unique identifier for the message recipient
     * @param  {String} text Text of the message to be sent
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#sendmessage
     */
    sendMessage(chatId, text, payload = {}) {
        payload.chat_id = chatId;
        payload.text = text;
        return this._request('sendMessage', { payload });
    }

    /**
     * Send answers to an inline query.
     * @param  {String} inlineQueryId Unique identifier of the query
     * @param  {InlineQueryResult[]} results An array of results for the inline query
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#answerinlinequery
     */
    answerInlineQuery(inlineQueryId, results, payload = {}) {
        payload.inline_query_id = inlineQueryId;
        payload.results = stringify_(results);
        return this._request('answerInlineQuery', { payload });
    }

    /**
     * Forward messages of any kind.
     * @param  {Number|String} chatId     Unique identifier for the message recipient
     * @param  {Number|String} fromChatId Unique identifier for the chat where the
     * original message was sent
     * @param  {Number|String} messageId  Unique message identifier
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#forwardmessage
     */
    forwardMessage(chatId, fromChatId, messageId, payload = {}) {
        payload.chat_id = chatId;
        payload.from_chat_id = fromChatId;
        payload.message_id = messageId;
        return this._request('forwardMessage', { payload });
    }

    /**
     * Copy messages of any kind.
     * The method is analogous to the method forwardMessages, but the copied message doesn't
     * have a link to the original message.
     * Returns the MessageId of the sent message on success.
     * @param  {Number|String} chatId     Unique identifier for the message recipient
     * @param  {Number|String} fromChatId Unique identifier for the chat where the
     * original message was sent
     * @param  {Number|String} messageId  Unique message identifier
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#copymessage
     */
    copyMessage(chatId, fromChatId, messageId, payload = {}) {
        payload.chat_id = chatId;
        payload.from_chat_id = fromChatId;
        payload.message_id = messageId;
        return this._request('copyMessage', { payload });
    }

    /**
     * Send photo
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {String|stream.Stream|Buffer} photo A file path or a Stream. Can
     * also be a `file_id` previously uploaded
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#sendphoto
     */
    sendPhoto(chatId, photo, payload = {}) {
        payload.chat_id = chatId;
        payload.photo = photo;
        return this._request('sendPhoto', { payload });
    }

    /**
     * Send audio
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {String|stream.Stream|Buffer} audio A file path, Stream or Buffer.
     * Can also be a `file_id` previously uploaded.
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#sendaudio
     * @see https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#sending-files
     */
    sendAudio(chatId, audio, payload = {}) {
        payload.chat_id = chatId;
        payload.audio = audio;
        return this._request('sendAudio', { payload });
    }

    /**
     * Send Dice
     * Use this method to send a dice.
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#senddice
     */
    sendDice(chatId, payload = {}) {
        payload.chat_id = chatId;
        return this._request('sendDice', { payload });
    }

    /**
     * Send Document
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {String|stream.Stream|Buffer} doc A file path, Stream or Buffer.
     * Can also be a `file_id` previously uploaded.
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#sendDocument
     */
    sendDocument(chatId, doc, payload = {}) {
        payload.chat_id = chatId;
        payload.document = doc;
        return this._request('sendDocument', { payload });
    }

    /**
     * Send .webp stickers.
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {String|stream.Stream|Buffer} sticker A file path, Stream or Buffer.
     * Can also be a `file_id` previously uploaded. Stickers are WebP format files.
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#sendsticker
     */
    sendSticker(chatId, sticker, payload = {}) {
        payload.chat_id = chatId;
        payload.sticker = sticker;
        return this._request('sendSticker', { payload });
    }

    /**
     * Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as Document).
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {String|stream.Stream|Buffer} video A file path or Stream.
     * Can also be a `file_id` previously uploaded.
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#sendvideo
     */
    sendVideo(chatId, video, payload = {}) {
        payload.chat_id = chatId;
        payload.video = video;
        return this._request('sendVideo', { payload });
    }

    /**
     * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound).
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {String|stream.Stream|Buffer} animation A file path, Stream or Buffer.
     * Can also be a `file_id` previously uploaded.
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#sending-files
     */
    sendAnimation(chatId, animation, payload = {}) {
        payload.chat_id = chatId;
        payload.animation = animation;
        return this._request('sendAnimation', { payload });
    }

    /**
     * Use this method to send rounded square videos of upto 1 minute long.
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {String|stream.Stream|Buffer} videoNote A file path or Stream.
     * Can also be a `file_id` previously uploaded.
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @info The length parameter is actually optional. However, the API (at time of writing) requires you to always provide it until it is fixed.
     * @see https://core.telegram.org/bots/api#sendvideonote
     */
    sendVideoNote(chatId, videoNote, payload = {}) {
        payload.chat_id = chatId;
        payload.video_note = videoNote;
        return this._request('sendVideoNote', { payload });
    }

    /**
     * Send voice
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {String|stream.Stream|Buffer} voice A file path, Stream or Buffer.
     * Can also be a `file_id` previously uploaded.
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#sendvoice
     */
    sendVoice(chatId, voice, payload = {}) {
        payload.chat_id = chatId;
        payload.voice = voice;
        return this._request('sendVoice', { payload });
    }


    /**
     * Send chat action.
     * `typing` for text messages,
     * `upload_photo` for photos, `record_video` or `upload_video` for videos,
     * `record_voice` or `upload_voice` for audio files, `upload_document` for general files,
     * `find_location` for location data.
     *
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {String} action Type of action to broadcast.
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     */
    sendChatAction(chatId, action, payload = {}) {
        payload.chat_id = chatId;
        payload.action = action;
        return this._request('sendChatAction', { payload });
    }

    /**
    * Use this method to ban a user in a group, a supergroup or a channel.
    * In the case of supergroups and channels, the user will not be able to
    * return to the chat on their own using invite links, etc., unless unbanned first..
    * The bot must be an administrator in the group for this to work.
    * Returns True on success.
    *
    * @param  {Number|String} chatId  Unique identifier for the target group or username of the target supergroup
    * @param  {Number} userId  Unique identifier of the target user
    * @param  {Object} [options] Additional Telegram query options
    * @return {Object}
    * @see https://core.telegram.org/bots/api#banchatmember
    */
    banChatMember(chatId, userId, payload = {}) {
        payload.chat_id = chatId;
        payload.user_id = userId;
        return this._request('banChatMember', { payload });
    }

    /**
     * Use this method to unban a previously kicked user in a supergroup.
     * The user will not return to the group automatically, but will be
     * able to join via link, etc. The bot must be an administrator in
     * the group for this to work. Returns True on success.
     *
     * @param  {Number|String} chatId  Unique identifier for the target group or username of the target supergroup
     * @param  {Number} userId  Unique identifier of the target user
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#unbanchatmember
     */
    unbanChatMember(chatId, userId, payload = {}) {
        payload.chat_id = chatId;
        payload.user_id = userId;
        return this._request('unbanChatMember', { payload });
    }

    /**
     * Use this method to restrict a user in a supergroup.
     * The bot must be an administrator in the supergroup for this to work
     * and must have the appropriate admin rights. Pass True for all boolean parameters
     * to lift restrictions from a user. Returns True on success.
     *
     * @param  {Number|String} chatId Unique identifier for the target chat or username of the target supergroup
     * @param  {Number} userId Unique identifier of the target user
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#restrictchatmember
     */
    restrictChatMember(chatId, userId, payload = {}) {
        payload.chat_id = chatId;
        payload.user_id = userId;
        return this._request('restrictChatMember', { payload });
    }

    /**
     * Use this method to promote or demote a user in a supergroup or a channel.
     * The bot must be an administrator in the chat for this to work
     * and must have the appropriate admin rights. Pass False for all boolean parameters to demote a user.
     * Returns True on success.
     *
     * @param  {Number|String} chatId Unique identifier for the target chat or username of the target supergroup
     * @param  {Number} userId
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#promotechatmember
     */
    promoteChatMember(chatId, userId, payload = {}) {
        payload.chat_id = chatId;
        payload.user_id = userId;
        return this._request('promoteChatMember', { payload });
    }

    /**
     * Use this method to set a custom title for an administrator in a supergroup promoted by the bot.
     * Returns True on success.
     *
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {Number} userId Unique identifier of the target user
     * @param  {String} customTitle New custom title for the administrator; 0-16 characters, emoji are not allowed
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#setchatadministratorcustomtitle
     */
    setChatAdministratorCustomTitle(chatId, userId, customTitle, payload = {}) {
        payload.chat_id = chatId;
        payload.user_id = userId;
        payload.custom_title = customTitle;
        return this._request('setChatAdministratorCustomTitle', { payload });
    }

    /**
     * Use this method to set default chat permissions for all members.
     * The bot must be an administrator in the group or a supergroup for this to
     * work and must have the can_restrict_members admin rights.
     * Returns True on success.
     *
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {Array} chatPermissions New default chat permissions
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#setchatpermissions
     */
    setChatPermissions(chatId, chatPermissions, payload = {}) {
        payload.chat_id = chatId;
        payload.permissions = stringify_(chatPermissions);
        return this._request('setChatPermissions', { payload });
    }

    /**
     * Use this method to export an invite link to a supergroup or a channel.
     * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * Returns exported invite link as String on success.
     *
     * @param  {Number|String} chatId Unique identifier for the target chat or username of the target supergroup
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#exportchatinvitelink
     */
    exportChatInviteLink(chatId, payload = {}) {
        payload.chat_id = chatId;
        return this._request('exportChatInviteLink', { payload });
    }

    /**
     * Use this method to create an additional invite link for a chat.
     * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * Returns the new invite link as ChatInviteLink object.
     *
     * @param  {Number|String} chatId Unique identifier for the target chat or username of the target supergroup
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object} ChatInviteLink
     * @see https://core.telegram.org/bots/api#createchatinvitelink
     */
    createChatInviteLink(chatId, payload = {}) {
        payload.chat_id = chatId;
        return this._request('createChatInviteLink', { payload });
    }

    /**
     * Use this method to edit a non-primary invite link created by the bot.
     * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * Returns the edited invite link as a ChatInviteLink object.
     *
     * @param  {Number|String} chatId Unique identifier for the target chat or username of the target supergroup
     * @param  {String} inviteLink Text with the invite link to edit
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object} ChatInviteLink
     * @see https://core.telegram.org/bots/api#editchatinvitelink
     */
    editChatInviteLink(chatId, inviteLink, payload = {}) {
        payload.chat_id = chatId;
        payload.invite_link = inviteLink;
        return this._request('editChatInviteLink', { payload });
    }

    /**
     * Use this method to revoke an invite link created by the bot.
     * Note: If the primary link is revoked, a new link is automatically generated
     * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * Returns the revoked invite link as ChatInviteLink object.
     *
     * @param  {Number|String} chatId Unique identifier for the target chat or username of the target supergroup
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object} ChatInviteLink
     * @see https://core.telegram.org/bots/api#revokechatinvitelink
     */
    revokeChatInviteLink(chatId, inviteLink, payload = {}) {
        payload.chat_id = chatId;
        payload.invite_link = inviteLink;
        return this._request('revokeChatInviteLink', { payload });
    }


    /**
     * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats.
     * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * Returns True on success.
     *
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {stream.Stream|Buffer} photo A file path or a Stream.
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#setchatphoto
     */
    setChatPhoto(chatId, photo, payload = {}) {
        payload.chat_id = chatId;
        payload.photo = photo;
        return this._request('setChatPhoto', { payload });
    }

    /**
     * Use this method to delete a chat photo. Photos can't be changed for private chats.
     * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * Returns True on success.
     *
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#deletechatphoto
     */
    deleteChatPhoto(chatId, payload = {}) {
        payload.chat_id = chatId;
        return this._request('deleteChatPhoto', { payload });
    }

    /**
     * Use this method to change the title of a chat. Titles can't be changed for private chats.
     * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * Returns True on success.
     *
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {String} title New chat title, 1-255 characters
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#setchattitle
     */
    setChatTitle(chatId, title, payload = {}) {
        payload.chat_id = chatId;
        payload.title = title;
        return this._request('setChatTitle', { payload });
    }

    /**
     * Use this method to change the description of a supergroup or a channel.
     * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * Returns True on success.
     *
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {String} description New chat title, 1-255 characters
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#setchatdescription
     */
    setChatDescription(chatId, description, payload = {}) {
        payload.chat_id = chatId;
        payload.description = description;
        return this._request('setChatDescription', { payload });
    }

    /**
     * Use this method to pin a message in a supergroup.
     * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * Returns True on success.
     *
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {Number} messageId Identifier of a message to pin
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#pinchatmessage
     */
    pinChatMessage(chatId, messageId, payload = {}) {
        payload.chat_id = chatId;
        payload.message_id = messageId;
        return this._request('pinChatMessage', { payload });
    }

    /**
     * Use this method to unpin a message in a supergroup chat.
     * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
     * Returns True on success.
     *
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#unpinchatmessage
     */
    unpinChatMessage(chatId, payload = {}) {
        payload.chat_id = chatId;
        return this._request('unpinChatMessage', { payload });
    }

    /**
    * Use this method to clear the list of pinned messages in a chat
    * The bot must be an administrator in the chat for this to work and must have the appropriate admin rights.
    * Returns True on success.
    *
    * @param  {Number|String} chatId  Unique identifier for the message recipient
    * @param  {Object} [options] Additional Telegram query options
    * @return {Object}
    * @see https://core.telegram.org/bots/api#unpinallchatmessages
    */
    unpinAllChatMessages(chatId, payload = {}) {
        payload.chat_id = chatId;
        return this._request('unpinAllChatMessages', { payload });
    }

    /**
     * Use this method to send answers to callback queries sent from
     * inline keyboards. The answer will be displayed to the user as
     * a notification at the top of the chat screen or as an alert.
     * On success, True is returned.
     *
     * This method has **older, compatible signatures ([1][answerCallbackQuery-v0.27.1])([2][answerCallbackQuery-v0.29.0])**
     * that are being deprecated.
     *
     * @param  {String} callbackQueryId Unique identifier for the query to be answered
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#answercallbackquery
     */
    answerCallbackQuery(callbackQueryId, payload = {}) {
        /* The older method signature (in/before v0.27.1) was answerCallbackQuery(callbackQueryId, text, showAlert).
         * We need to ensure backwards-compatibility while maintaining
         * consistency of the method signatures throughout the library */
        if (typeof payload !== 'object') {
            /* eslint-disable no-param-reassign, prefer-rest-params */
            // deprecate('The method signature answerCallbackQuery(callbackQueryId, text, showAlert) has been deprecated since v0.27.1');
            payload = {
                callback_query_id: arguments[0],
                text: arguments[1],
                show_alert: arguments[2],
            };
            /* eslint-enable no-param-reassign, prefer-rest-params */
        }
        /* The older method signature (in/before v0.29.0) was answerCallbackQuery([options]).
         * We need to ensure backwards-compatibility while maintaining
         * consistency of the method signatures throughout the library. */
        if (typeof callbackQueryId === 'object') {
            /* eslint-disable no-param-reassign, prefer-rest-params */
            // deprecate('The method signature answerCallbackQuery([options]) has been deprecated since v0.29.0');
            payload = callbackQueryId;
            /* eslint-enable no-param-reassign, prefer-rest-params */
        } else {
            payload.callback_query_id = callbackQueryId;
        }
        return this._request('answerCallbackQuery', { payload });
    }

    /**
    * Returns True on success.
    * Use this method to change the list of the bot's commands.
    * @param  {Array} commands Poll options, between 2-10 options
    * @param  {Object} [options] Additional Telegram query options
    * @return {Object}
    * @see https://core.telegram.org/bots/api#setmycommands
    */
    setMyCommands(commands, payload = {}) {
        payload.commands = stringify_(commands);
        return this._request('setMyCommands', { payload });
    }

    /**
    * Returns Array of BotCommand on success.
    * @param  {Object} [options] Additional Telegram query options
    * @return {Object}
    * @see https://core.telegram.org/bots/api#getmycommands
    */
    getMyCommands(payload = {}) {
        return this._request('getMyCommands', { payload });
    }

    /**
    * Returns True on success.
    * Use this method to delete the list of the bot's commands for the given scope and user language.
    * @param  {Object} [options] Additional Telegram query options
    * @return {Object}
    * @see https://core.telegram.org/bots/api#deletemycommands
    */
    deleteMyCommands(payload = {}) {
        return this._request('deleteMyCommands', { payload });
    }

    /**
     * Use this method to edit text messages sent by the bot or via
     * the bot (for inline bots). On success, the edited Message is
     * returned.
     *
     * Note that you must provide one of chat_id, message_id, or
     * inline_message_id in your request.
     *
     * @param  {String} text  New text of the message
     * @param  {Object} [options] Additional Telegram query options (provide either one of chat_id, message_id, or inline_message_id here)
     * @return {Object}
     * @see https://core.telegram.org/bots/api#editmessagetext
     */
    editMessageText(text, payload = {}) {
        payload.text = text;
        return this._request('editMessageText', { payload });
    }

    /**
     * Use this method to edit captions of messages sent by the
     * bot or via the bot (for inline bots). On success, the
     * edited Message is returned.
     *
     * Note that you must provide one of chat_id, message_id, or
     * inline_message_id in your request.
     *
     * @param  {String} caption  New caption of the message
     * @param  {Object} [options] Additional Telegram query options (provide either one of chat_id, message_id, or inline_message_id here)
     * @return {Object}
     * @see https://core.telegram.org/bots/api#editmessagecaption
     */
    editMessageCaption(caption, payload = {}) {
        payload.caption = caption;
        return this._request('editMessageCaption', { payload });
    }

    /**
     * Use this method to edit audio, document, photo, or video messages.
     * If a message is a part of a message album, then it can be edited only to a photo or a video.
     * Otherwise, message type can be changed arbitrarily. When inline message is edited, new file can't be uploaded.
     * Use previously uploaded file via its file_id or specify a URL.
     * On success, the edited Message is returned.
     *
     * Note that you must provide one of chat_id, message_id, or
     * inline_message_id in your request.
     *
     * @param  {Object} media  A JSON-serialized object for a new media content of the message
     * @param  {Object} [options] Additional Telegram query options (provide either one of chat_id, message_id, or inline_message_id here)
     * @return {Object}
     * @see https://core.telegram.org/bots/api#editmessagemedia
     */
    editMessageMedia(media, payload = {}) {
        payload.media = stringify_(media);
        return this._request('editMessageMedia', { payload });
    }

    /**
     * Use this method to edit only the reply markup of messages
     * sent by the bot or via the bot (for inline bots).
     * On success, the edited Message is returned.
     *
     * Note that you must provide one of chat_id, message_id, or
     * inline_message_id in your request.
     *
     * @param  {Object} replyMarkup  A JSON-serialized object for an inline keyboard.
     * @param  {Object} [options] Additional Telegram query options (provide either one of chat_id, message_id, or inline_message_id here)
     * @return {Object}
     * @see https://core.telegram.org/bots/api#editmessagetext
     */
    editMessageReplyMarkup(replyMarkup, payload = {}) {
        payload.reply_markup = replyMarkup;
        return this._request('editMessageReplyMarkup', { payload });
    }

    /**
     * Use this method to get a list of profile pictures for a user.
     * Returns a [UserProfilePhotos](https://core.telegram.org/bots/api#userprofilephotos) object.
     * This method has an [older, compatible signature][getUserProfilePhotos-v0.25.0]
     * that is being deprecated.
     *
     * @param  {Number} userId  Unique identifier of the target user
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#getuserprofilephotos
     */
    getUserProfilePhotos(userId, payload = {}) {
        /* The older method signature was getUserProfilePhotos(userId, offset, limit).
         * We need to ensure backwards-compatibility while maintaining
         * consistency of the method signatures throughout the library */
        if (typeof payload !== 'object') {
            /* eslint-disable no-param-reassign, prefer-rest-params */
            // deprecate('The method signature getUserProfilePhotos(userId, offset, limit) has been deprecated since v0.25.0');
            payload = {
                offset: arguments[1],
                limit: arguments[2],
            };
            /* eslint-enable no-param-reassign, prefer-rest-params */
        }
        payload.user_id = userId;
        return this._request('getUserProfilePhotos', { payload });
    }

    /**
     * Send location.
     * Use this method to send point on the map.
     *
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {Float} latitude Latitude of location
     * @param  {Float} longitude Longitude of location
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#sendlocation
     */
    sendLocation(chatId, latitude, longitude, payload = {}) {
        payload.chat_id = chatId;
        payload.latitude = latitude;
        payload.longitude = longitude;
        return this._request('sendLocation', { payload });
    }

    /**
     * Use this method to stop updating a live location message sent by
     * the bot or via the bot (for inline bots) before live_period expires.
     *
     * Note that you must provide one of chat_id, message_id, or
     * inline_message_id in your request.
     *
     * @param  {Object} [options] Additional Telegram query options (provide either one of chat_id, message_id, or inline_message_id here)
     * @return {Object}
     * @see https://core.telegram.org/bots/api#stopmessagelivelocation
     */
    stopMessageLiveLocation(payload = {}) {
        return this._request('stopMessageLiveLocation', { payload });
    }

    /**
     * Send venue.
     * Use this method to send information about a venue.
     *
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {Float} latitude Latitude of location
     * @param  {Float} longitude Longitude of location
     * @param  {String} title Name of the venue
     * @param  {String} address Address of the venue
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#sendvenue
     */
    sendVenue(chatId, latitude, longitude, title, address, payload = {}) {
        payload.chat_id = chatId;
        payload.latitude = latitude;
        payload.longitude = longitude;
        payload.title = title;
        payload.address = address;
        return this._request('sendVenue', { payload });
    }

    /**
     * Send contact.
     * Use this method to send phone contacts.
     *
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {String} phoneNumber Contact's phone number
     * @param  {String} firstName Contact's first name
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#sendcontact
     */
    sendContact(chatId, phoneNumber, firstName, payload = {}) {
        payload.chat_id = chatId;
        payload.phone_number = phoneNumber;
        payload.first_name = firstName;
        return this._request('sendContact', { payload });
    }

    /**
     * Send poll.
     * Use this method to send a native poll.
     *
     * @param  {Number|String} chatId  Unique identifier for the group/channel
     * @param  {String} question Poll question, 255 char limit
     * @param  {Array} pollOptions Poll options, between 2-10 options
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#sendpoll
     */
    sendPoll(chatId, question, pollOptions, payload = {}) {
        payload.chat_id = chatId;
        payload.question = question;
        payload.options = stringify_(pollOptions);
        return this._request('sendPoll', { payload });
    }

    /**
     * Stop poll.
     * Use this method to stop a native poll.
     *
     * @param  {Number|String} chatId  Unique identifier for the group/channel
     * @param  {Number} pollId Identifier of the original message with the poll
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#stoppoll
     */
    stopPoll(chatId, pollId, payload = {}) {
        payload.chat_id = chatId;
        payload.message_id = pollId;
        return this._request('stopPoll', { payload });
    }

    /**
     * Get file.
     * Use this method to get basic info about a file and prepare it for downloading.
     * Attention: link will be valid for 1 hour.
     *
     * @param  {String} fileId  File identifier to get info about
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#getfile
     */
    getFile(fileId, payload = {}) {
        payload.file_id = fileId;
        return this._request('getFile', { payload });
    }

    /**
     * Get link for file.
     * Use this method to get link for file for subsequent use.
     * Attention: link will be valid for 1 hour.
     *
     * This method is a sugar extension of the (getFile)[#getfilefileid] method,
     * which returns just path to file on remote server (you will have to manually build full uri after that).
     *
     * @param  {String} fileId  File identifier to get info about
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object} promise Promise which will have *fileURI* in resolve callback
     * @see https://core.telegram.org/bots/api#getfile
     */
    getFileLink(fileId, payload = {}) {
        const resp = this.getFile(fileId, payload);
        return `${this.options.baseApiUrl}/file/bot${this.token}/${resp.result.file_path}`;
    }

    /**
     * Register a RegExp to test against an incomming text message.
     * @param  {RegExp}   regexp       RegExp to be executed with `exec`.
     * @param  {Function} callback     Callback will be called with 2 parameters,
     * the `msg` and the result of executing `regexp.exec` on message text.
     */
    onText(regexp, callback) {
        this._textRegexpCallbacks.push({ regexp, callback });
    }

    /**
     * Remove a listener registered with `onText()`.
     * @param  {RegExp} regexp RegExp used previously in `onText()`
     * @return {Object} deletedListener The removed reply listener if
     *   found. This object has `regexp` and `callback`
     *   properties. If not found, returns `null`.
     */
    removeTextListener(regexp) {
        const index = this._textRegexpCallbacks.findIndex((textListener) => {
            return String(textListener.regexp) === String(regexp);
        });
        if (index === -1) {
            return null;
        }
        return this._textRegexpCallbacks.splice(index, 1)[0];
    }

    /**
     * Remove all listeners registered with `onText()`.
     */
    clearTextListeners() {
        this._textRegexpCallbacks = [];
    }

    /**
     * Register a reply to wait for a message response.
     * @param  {Number|String}   chatId       The chat id where the message cames from.
     * @param  {Number|String}   messageId    The message id to be replied.
     * @param  {Function} callback     Callback will be called with the reply
     *  message.
     * @return {Number} id                    The ID of the inserted reply listener.
     */
    onReplyToMessage(chatId, messageId, callback) {
        const id = ++this._replyListenerId;
        this._replyListeners.push({
            id,
            chatId,
            messageId,
            callback
        });
        return id;
    }

    /**
     * Removes a reply that has been prev. registered for a message response.
     * @param   {Number} replyListenerId      The ID of the reply listener.
     * @return  {Object} deletedListener      The removed reply listener if
     *   found. This object has `id`, `chatId`, `messageId` and `callback`
     *   properties. If not found, returns `null`.
     */
    removeReplyListener(replyListenerId) {
        const index = this._replyListeners.findIndex((replyListener) => {
            return replyListener.id === replyListenerId;
        });
        if (index === -1) {
            return null;
        }
        return this._replyListeners.splice(index, 1)[0];
    }

    /**
     * Removes all replies that have been prev. registered for a message response.
     */
    clearReplyListeners() {
        this._replyListeners = [];
    }

    /**
     * Use this method to get up to date information about the chat
     * (current name of the user for one-on-one conversations, current
     * username of a user, group or channel, etc.).
     * @param  {Number|String} chatId Unique identifier for the target chat or username of the target supergroup or channel
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#getchat
     */
    getChat(chatId, payload = {}) {
        payload.chat_id = chatId;
        return this._request('getChat', { payload });
    }
    /**
     * Returns the administrators in a chat in form of an Array of `ChatMember` objects.
     * @param  {Number|String} chatId  Unique identifier for the target group or username of the target supergroup
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#getchatadministrators
     */
    getChatAdministrators(chatId, payload = {}) {
        payload.chat_id = chatId;
        return this._request('getChatAdministrators', { payload });
    }

    /**
     * Use this method to get the number of members in a chat.
     * Returns Int on success
     * @param  {Number|String} chatId  Unique identifier for the target group or username of the target supergroup
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#getchatmembercount
     */
    getChatMemberCount(chatId, payload = {}) {
        payload.chat_id = chatId;
        return this._request('getChatMemberCount', { payload });
    }

    /**
     * Use this method to get information about a member of a chat.
     * @param  {Number|String} chatId  Unique identifier for the target group or username of the target supergroup
     * @param  {Number} userId  Unique identifier of the target user
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#getchatmember
     */
    getChatMember(chatId, userId, payload = {}) {
        payload.chat_id = chatId;
        payload.user_id = userId;
        return this._request('getChatMember', { payload });
    }

    /**
     * Leave a group, supergroup or channel.
     * @param  {Number|String} chatId Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#leavechat
     */
    leaveChat(chatId, payload = {}) {
        payload.chat_id = chatId;
        return this._request('leaveChat', { payload });
    }
    /**
     * Use this method to set a new group sticker set for a supergroup.
     * @param  {Number|String} chatId Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)
     * @param  {String} stickerSetName Name of the sticker set to be set as the group sticker set
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#setchatstickerset
     */
    setChatStickerSet(chatId, stickerSetName, payload = {}) {
        payload.chat_id = chatId;
        payload.sticker_set_name = stickerSetName;
        return this._request('setChatStickerSet', { payload });
    }

    /**
     * Use this method to delete a group sticker set from a supergroup.
     * @param  {Number|String} chatId Unique identifier for the target group or username of the target supergroup (in the format @supergroupusername)
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#deletechatstickerset
     */
    deleteChatStickerSet(chatId, payload = {}) {
        payload.chat_id = chatId;
        return this._request('deleteChatStickerSet', { payload });
    }

    /**
     * Use this method to send a game.
     * @param  {Number|String} chatId Unique identifier for the message recipient
     * @param  {String} gameShortName name of the game to be sent.
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#sendgame
     */
    sendGame(chatId, gameShortName, payload = {}) {
        payload.chat_id = chatId;
        payload.game_short_name = gameShortName;
        return this._request('sendGame', { payload });
    }

    /**
     * Use this method to set the score of the specified user in a game.
     * @param  {Number} userId  Unique identifier of the target user
     * @param  {Number} score New score value.
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#setgamescore
     */
    setGameScore(userId, score, payload = {}) {
        payload.user_id = userId;
        payload.score = score;
        return this._request('setGameScore', { payload });
    }

    /**
     * Use this method to get data for high score table.
     * @param  {Number} userId  Unique identifier of the target user
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#getgamehighscores
     */
    getGameHighScores(userId, payload = {}) {
        payload.user_id = userId;
        return this._request('getGameHighScores', { payload });
    }

    /**
     * Use this method to delete a message.
     * @param  {Number|String} chatId  Unique identifier of the target chat
     * @param  {Number} messageId  Unique identifier of the target message
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#deletemessage
     */
    deleteMessage(chatId, messageId, payload = {}) {
        payload.chat_id = chatId;
        payload.message_id = messageId;
        return this._request('deleteMessage', { payload });
    }

    /**
     * Send invoice.
     * Use this method to send an invoice.
     *
     * @param  {Number|String} chatId  Unique identifier for the message recipient
     * @param  {String} title Product name
     * @param  {String} description product description
     * @param  {String} payload Bot defined invoice payload
     * @param  {String} providerToken Payments provider token
     * @param  {String} startParameter Deep-linking parameter
     * @param  {String} currency Three-letter ISO 4217 currency code
     * @param  {Array} prices Breakdown of prices
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#sendinvoice
     */
    sendInvoice(chatId, title, description, invoicePayload, providerToken, startParameter, currency, prices, payload = {}) {
        payload.chat_id = chatId;
        payload.title = title;
        payload.description = description;
        payload.payload = invoicePayload;
        payload.provider_token = providerToken;
        payload.start_parameter = startParameter;
        payload.currency = currency;
        payload.prices = stringify_(prices);
        payload.provider_data = stringify_(payload.provider_data);
        return this._request('sendInvoice', { payload });
    }

    /**
     * Answer shipping query..
     * Use this method to reply to shipping queries.
     *
     * @param  {String} shippingQueryId  Unique identifier for the query to be answered
     * @param  {Boolean} ok Specify if delivery of the product is possible
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#answershippingquery
     */
    answerShippingQuery(shippingQueryId, ok, payload = {}) {
        payload.shipping_query_id = shippingQueryId;
        payload.ok = ok;
        payload.shipping_options = stringify_(payload.shipping_options);
        return this._request('answerShippingQuery', { payload });
    }

    /**
     * Answer pre-checkout query.
     * Use this method to confirm shipping of a product.
     *
     * @param  {String} preCheckoutQueryId  Unique identifier for the query to be answered
     * @param  {Boolean} ok Specify if every order details are ok
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#answerprecheckoutquery
     */
    answerPreCheckoutQuery(preCheckoutQueryId, ok, payload = {}) {
        payload.pre_checkout_query_id = preCheckoutQueryId;
        payload.ok = ok;
        return this._request('answerPreCheckoutQuery', { payload });
    }

    /**
     * Use this method to get a sticker set. On success, a [StickerSet](https://core.telegram.org/bots/api#stickerset) object is returned.
     *
     * @param  {String} name Name of the sticker set
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#getstickerset
     */
    getStickerSet(name, payload = {}) {
        payload.name = name;
        return this._request('getStickerSet', { payload });
    }

    /**
     * Use this method to upload a .png file with a sticker for later use in *createNewStickerSet* and *addStickerToSet* methods (can be used multiple
     * times). Returns the uploaded [File](https://core.telegram.org/bots/api#file) on success.
     *
     * @param  {Number} userId User identifier of sticker file owner
     * @param  {String|stream.Stream|Buffer} pngSticker A file path or a Stream. Can also be a `file_id` previously uploaded. **Png** image with the
     *  sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px.
     * @param  {Object} [options] Additional Telegram query options
     * @param  {Object} [fileOptions] Optional file related meta-data
     * @return {Object}
     * @see https://core.telegram.org/bots/api#uploadstickerfile
     */
    uploadStickerFile(userId, pngSticker, payload = {}) {
        payload.user_id = userId;
        payload.png_sticker = pngSticker;
        return this._request('uploadStickerFile', { payload });
    }

    /**
     * Use this method to create new sticker set owned by a user.
     * The bot will be able to edit the created sticker set.
     * Returns True on success.
     *
     * @param  {Number} userId User identifier of created sticker set owner
     * @param  {String} name Short name of sticker set, to be used in `t.me/addstickers/` URLs (e.g., *animals*)
     * @param  {String} title Sticker set title, 1-64 characters
     * @param  {String|stream.Stream|Buffer} pngSticker Png image with the sticker, must be up to 512 kilobytes in size,
     *  dimensions must not exceed 512px, and either width or height must be exactly 512px.
     * @param  {String} emojis One or more emoji corresponding to the sticker
     * @param  {Object} [options] Additional Telegram query options
     * @param  {Object} [fileOptions] Optional file related meta-data
     * @return {Object}
     * @see https://core.telegram.org/bots/api#createnewstickerset
     * @todo Add tests for this method!
     */
    createNewStickerSet(userId, name, title, pngSticker, emojis, payload = {}) {
        payload.user_id = userId;
        payload.name = name;
        payload.title = title;
        payload.emojis = emojis;
        payload.mask_position = stringify_(options.mask_position);
        payload.png_sticker = pngSticker;
        return this._request('createNewStickerSet', { payload });
    }

    /**
     * Use this method to add a new sticker to a set created by the bot.
     * Returns True on success.
     *
     * @param  {Number} userId User identifier of sticker set owner
     * @param  {String} name Sticker set name
     * @param  {String|stream.Stream|Buffer} pngSticker Png image with the sticker, must be up to 512 kilobytes in size,
     *  dimensions must not exceed 512px, and either width or height must be exactly 512px
     * @param  {String} emojis One or more emoji corresponding to the sticker
     * @param  {Object} [options] Additional Telegram query options
     * @param  {Object} [fileOptions] Optional file related meta-data
     * @return {Object}
     * @see https://core.telegram.org/bots/api#addstickertoset
     * @todo Add tests for this method!
     */
    addStickerToSet(userId, name, pngSticker, emojis, payload = {}) {
        payload.user_id = userId;
        payload.name = name;
        payload.emojis = emojis;
        payload.mask_position = stringify_(options.mask_position);
        payload.png_sticker = pngSticker;
        return this._request('addStickerToSet', { payload });
    }

    /**
     * Use this method to move a sticker in a set created by the bot to a specific position.
     * Returns True on success.
     *
     * @param  {String} sticker File identifier of the sticker
     * @param  {Number} position New sticker position in the set, zero-based
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#setstickerpositioninset
     * @todo Add tests for this method!
     */
    setStickerPositionInSet(sticker, position, payload = {}) {
        payload.sticker = sticker;
        payload.position = position;
        return this._request('setStickerPositionInSet', { payload });
    }

    /**
     * Use this method to delete a sticker from a set created by the bot.
     * Returns True on success.
     *
     * @param  {String} sticker File identifier of the sticker
     * @param  {Object} [options] Additional Telegram query options
     * @return {Object}
     * @see https://core.telegram.org/bots/api#deletestickerfromset
     * @todo Add tests for this method!
     */
    deleteStickerFromSet(sticker, payload = {}) {
        payload.sticker = sticker;
        return this._request('deleteStickerFromSet', { payload });
    }

}

/**
 * @param {String} token Bot Token
 * @param {Object} [options]
 * @param {String} [options.baseApiUrl="https://api.telegram.org"] API Base URl; useful for proxying and testing
 * @param {Boolean} [options.onlyFirstMatch=false] Set to true to stop after first match. Otherwise, all regexps are executed
 */
function createBot(token, options) {
    return new Bot(token, options)
}

/**
 * Add functions to TelegramBot
 */
if (typeof module === "object") {
    module.exports = {
        createBot
    }
}
   /****** code end *********/
   ;(
function copy(src, target, obj) {
    obj[target] = obj[target] || {};
    if (src && typeof src === 'object') {
        for (var k in src) {
            if (src.hasOwnProperty(k)) {
                obj[target][k] = src[k];
            }
        }
    } else {
        obj[target] = src;
    }
}
   ).call(null, module.exports, expose, host);
}).call(this, this, "TelegramBot");
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventTemplates = {
    callCreate: `// https://abal.moe/Eris/docs/Client#event-callCreate
const BaseEvent = require("../utils/structures/BaseEvent");

module.exports = class CallCreateEvent extends BaseEvent {
  constructor() {
    super("callCreate");
  }

  async run(client, call) {

  }
}`,
    channelCreate: `// https://abal.moe/Eris/docs/Client#event-channelCreate
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class ChannelCreateEvent extends BaseEvent {
  constructor() {
    super("channelCreate");
  }
  
  async run(client, channel) {
    console.log(channel.name + " was created.");
  }
}`,
    channelDelete: `// https://abal.moe/Eris/docs/Client#event-channelDelete
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class ChannelDeleteEvent extends BaseEvent {
  constructor() {
    super("channelDelete");
  }
  
  async run(client, channel) {
    
  }
}
`,
    channelPinsUpdate: `// https://abal.moe/Eris/docs/Client#event-channelPinsUpdate
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class ChannelPinsUpdateEvent extends BaseEvent {
  constructor() {
    super("channelPinsUpdate");
  }
  
  async run(client, channel) {
    
  }
}`,
    channelUpdate: `// https://abal.moe/Eris/docs/Client#event-channelUpdate
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class ChannelUpdateEvent extends BaseEvent {
  constructor() {
    super("channelUpdate");
  }
  
  async run(client, oldChannel, newChannel) {
    
  }
}`,
    debug: `// https://abal.moe/Eris/docs/Client#event-debug
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class DebugEvent extends BaseEvent {
  constructor() {
    super("debug");
  }
  
  async run(client, info) {
    
  }
}`,
    emojiCreate: `// https://abal.moe/Eris/docs/Client#event-emojiCreate
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class EmojiCreateEvent extends BaseEvent {
  constructor() {
    super("emojiCreate");
  }
  
  async run(client, emoji) {
    
  }
}
`,
    emojiDelete: `// https://abal.moe/Eris/docs/Client#event-emojiDelete
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class EmojiDeleteEvent extends BaseEvent {
  constructor() {
    super("emojiDelete");
  }
  
  async run(client, emoji) {
    
  }
}`,
    emojiUpdate: `// https://abal.moe/Eris/docs/Client#event-emojiUpdate
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class EmojiUpdateEvent extends BaseEvent {
  constructor() {
    super("emojiUpdate");
  }
  
  async run(client, oldEmoji, newEmoji) {
    
  }
}`,
    error: `// https://abal.moe/Eris/docs/Client#event-error
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class ErrorEvent extends BaseEvent {
  constructor() {
    super("error");
  }
  
  async run(client, error) {
    
  }
}
`,
    guildBanAdd: `// https://abal.moe/Eris/docs/Client#event-guildBanAdd
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class GuildBanAddEvent extends BaseEvent {
  constructor() {
    super("guildBanAdd");
  }
  
  async run(client, guild, user) {
    
  }
}`,
    guildBanRemove: `// https://abal.moe/Eris/docs/Client#event-guildBanRemove
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class GuildBanRemoveEvent extends BaseEvent {
  constructor() {
    super("guildBanRemove");
  }
  
  async run(client, guild, user) {
    
  }
}`,
    guildCreate: `// https://abal.moe/Eris/docs/Client#event-guildCreate
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class GuildCreateEvent extends BaseEvent {
  constructor() {
    super("guildCreate");
  }
  
  async run(client, guild) {
    
  }
}`,
    guildDelete: `// https://abal.moe/Eris/docs/Client#event-guildDelete
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class GuildDeleteEvent extends BaseEvent {
  constructor() {
    super("guildDelete");
  }
  
  async run(client, guild) {
    
  }
}`,
    guildIntegrationsUpdate: `// https://abal.moe/Eris/docs/Client#event-guildIntegrationsUpdate
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class GuildIntegrationsUpdateEvent extends BaseEvent {
  constructor() {
    super("guildIntegrationsUpdate");
  }
  
  async run(client, guild) {
    
  }
}`,
    guildMemberAdd: `// https://abal.moe/Eris/docs/Client#event-guildMemberAdd
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super("guildMemberAdd");
  }
  
  async run(client, member) {
    
  }
}`,
    guildMemberRemove: `// https://abal.moe/Eris/docs/Client#event-guildMemberRemove
  const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class GuildMemberRemoveEvent extends BaseEvent {
  constructor() {
    super("guildMemberRemove");
  }
  
  async run(client, member) {
    
  }
}`,
    guildMembersChunk: `// https://abal.moe/Eris/docs/Client#event-guildMembersChunk
  const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class GuildMembersChunkEvent extends BaseEvent {
  constructor() {
    super("guildMembersChunk");
  }
  
  async run(client, members, guild) {
    
  }
}`,
    guildMemberSpeaking: `// https://abal.moe/Eris/docs/Client#event-guildMemberSpeaking
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class GuildMemberSpeakingEvent extends BaseEvent {
  constructor() {
    super("guildMemberSpeaking");
  }
  
  async run(client, member, speaking) {
    
  }
}`,
    guildMemberUpdate: `// https://abal.moe/Eris/docs/Client#event-guildMemberUpdate
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class GuildMemberUpdateEvent extends BaseEvent {
  constructor() {
    super("guildMemberUpdate");
  }
  
  async run(client, oldMember, newMember) {
    
  }
}`,
    guildUnavailable: `// https://abal.moe/Eris/docs/Client#event-guildUnavailable
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class GuildUnavailableEvent extends BaseEvent {
  constructor() {
    super("guildUnavailable");
  }
  
  async run(client, guild) {
    
  }
}`,
    guildUpdate: `// https://abal.moe/Eris/docs/Client#event-guildUpdate
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class GuildUpdateEvent extends BaseEvent {
  constructor() {
    super("guildUpdate");
  }
  
  async run(client, oldGuild, newGuild) {
    
  }
}`,
    invalidated: `// https://abal.moe/Eris/docs/Client#event-invalidated
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class InvalidatedEvent extends BaseEvent {
  constructor() {
    super("invalidated");
  }
  
  async run(client) {
    
  }
}`,
    inviteCreate: `// https://abal.moe/Eris/docs/Client#event-inviteCreate
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class InviteCreateEvent extends BaseEvent {
  constructor() {
    super("inviteCreate");
  }
  
  async run(client, invite) {
    
  }
}`,
    inviteDelete: `// https://abal.moe/Eris/docs/Client#event-inviteDelete
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class InviteDeleteEvent extends BaseEvent {
  constructor() {
    super("inviteDelete");
  }
  
  async run(client, invite) {
    
  }
}`,
    ready: `// const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super("ready");
  }
  
  async run(client) {
    console.log(client.user.tag + " has logged in.");
  }
}`,
    message: `// https://abal.moe/Eris/docs/Client#event-message
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super("message");
  }
  
  async run(client, message) {
    console.log(client.usert.tag + " has logged in.");
  }
}`,
    messageDelete: `// https://abal.moe/Eris/docs/Client#event-messageDelete
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class MessageDeleteEvent extends BaseEvent {
  constructor() {
    super("messageDelete");
  }
  
  async run(client, message) {
    
  }
}`,
    messageDeleteBulk: `// https://abal.moe/Eris/docs/Client#event-messageDeleteBulk
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class MessageDeleteBulkEvent extends BaseEvent {
  constructor() {
    super("messageDeleteBulk");
  }
  
  async run(client, messages) {
    
  }
}`,
    messageReactionAdd: `// https://abal.moe/Eris/docs/Client#event-messageReactionAdd
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class MessageReactionAddEvent extends BaseEvent {
  constructor() {
    super("messageReactionAdd");
  }
  
  async run(client, reaction, user) {
    
  }
}`,
    messageReactionRemove: `// https://abal.moe/Eris/docs/Client#event-messageReactionRemove
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class MessageReactionRemoveEvent extends BaseEvent {
  constructor() {
    super("messageReactionRemove");
  }
  
  async run(client, reaction, user) {
    
  }
}`,
    messageReactionRemoveAll: `// https://abal.moe/Eris/docs/Client#event-messageReactionRemoveAll
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class MessageReactionRemoveAllEvent extends BaseEvent {
  constructor() {
    super("ready");
  }
  
  async run(client, message) {
    
  }
}`,
    messageReactionRemoveEmoji: `// https://abal.moe/Eris/docs/Client#event-messageReactionRemoveEmoji
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class MessageReactionRemoveEmojiEvent extends BaseEvent {
  constructor() {
    super("messageReactionRemoveEmoji");
  }
  
  async run(client, reaction) {
    
  }
}`,
    messageUpdate: `// https://abal.moe/Eris/docs/Client#event-messageUpdate
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class MessageUpdateEvent extends BaseEvent {
  constructor() {
    super("messageUpdate");
  }
  
  async run(client, oldMessage, newMessage) {
    
  }
}`,
    presenceUpdate: `// https://abal.moe/Eris/docs/Client#event-presenceUpdate
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class PresenceUpdateEvent extends BaseEvent {
  constructor() {
    super("presenceUpdate");
  }
  
  async run(client, oldPresence, newPresence) {
    
  }
}`,
    rateLimit: `// https://abal.moe/Eris/docs/Client#event-rateLimit
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class RateLimitEvent extends BaseEvent {
  constructor() {
    super("rateLimit");
  }
  
  async run(client, rateLimitInfo) {
    
  }
}`,
    roleCreate: `// https://abal.moe/Eris/docs/Client#event-roleCreate
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class RoleCreateEvent extends BaseEvent {
  constructor() {
    super("roleCreate");
  }
  
  async run(client, role) {
    
  }
}`,
    roleDelete: `// https://abal.moe/Eris/docs/Client#event-roleDelete
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class RoleDeleteEvent extends BaseEvent {
  constructor() {
    super("roleDelete");
  }
  
  async run(client, role) {
    
  }
}`,
    roleUpdate: `// https://abal.moe/Eris/docs/Client#event-roleUpdate
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class RoleUpdateEvent extends BaseEvent {
  constructor() {
    super("roleUpdate");
  }
  
  async run(client, oldRole, newRole) {
    
  }
}`,
    shardDisconnect: `// https://abal.moe/Eris/docs/Client#event-emojiUpdate
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class ShardDisconnectEvent extends BaseEvent {
  constructor() {
    super("shardDisconnect");
  }
  
  async run(client, message) {
    
  }
}`,
    shardError: `// https://abal.moe/Eris/docs/Client#event-shardError
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class ShardErrorEvent extends BaseEvent {
  constructor() {
    super("shardError");
  }
  
  async run(client, message) {
    
  }
}`,
    shardReady: `// https://abal.moe/Eris/docs/Client#event-emojiUpdate
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class ShardReadyEvent extends BaseEvent {
  constructor() {
    super("shardReady");
  }
  
  async run(client, id, unavailableGuilds) {
    
  }
}`,
    shardReconnecting: `// https://abal.moe/Eris/docs/Client#event-shardReconnecting
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class ShardReconnectingEvent extends BaseEvent {
  constructor() {
    super("shardReconnecting");
  }
  
  async run(client, id) {
    
  }
}`,
    shardResume: `// https://abal.moe/Eris/docs/Client#event-shardResume
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class ShardResumeEvent extends BaseEvent {
  constructor() {
    super("shardResume");
  }
  
  async run(client, id, replayedEvents) {
    
  }
}`,
    typingStart: `// https://abal.moe/Eris/docs/Client#event-typingStart
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class TypingStartEvent extends BaseEvent {
  constructor() {
    super("typingStart");
  }
  
  async run(client, channel, user) {
    
  }
}`,
    userUpdate: `// https://abal.moe/Eris/docs/Client#event-userUpdate
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class UserUpdateEvent extends BaseEvent {
  constructor() {
    super("userUpdate");
  }
  
  async run(client, oldUser, newUser) {
    
  }
}`,
    voiceStateUpdate: `// https://abal.moe/Eris/docs/Client#event-voiceStateUpdate
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class VoiceStateUpdateEvent extends BaseEvent {
  constructor() {
    super("voiceStateUpdate");
  }
  
  async run(client, oldState, newState) {
    
  }
}`,
    warn: `// https://abal.moe/Eris/docs/Client#event-warn
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class WarnEvent extends BaseEvent {
  constructor() {
    super("warn");
  }
  
  async run(client, info) {
    
  }
}`,
    webhookUpdate: `// https://abal.moe/Eris/docs/Client#event-webhookUpdate
const BaseEvent = require("../utils/structures/BaseEvent");
module.exports = class WebhookUpdateEvent extends BaseEvent {
  constructor() {
    super("webhookUpdate");
  }
  
  async run(client, channel) {
    
  }
}`
};
exports.default = eventTemplates;
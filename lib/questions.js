"use strict";
const __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log_symbols_1 = __importDefault(require("log-symbols"));
exports.questions = [
    {
        type: "select",
        name: "option",
        message: "Welcome To GenEris! What Would You Like To Do First?",
        choices: [
            { title: "New", description: "Create A New Eris Project", value: "new" },
            { title: "Generate", description: "Generate A Command Or Event", value: "gen" }
        ]
    },
    {
        type: (prev) => (prev === "new" ? "text" : null),
        name: "data",
        message: "Enter The Name Of Your Discord Bot Project",
        validate: (value) => (value.length === 0 ? `${log_symbols_1.default.warning} Your Project Name Cannot Be Empty!` : true)
    },
    {
        type: (prev) => (prev === "gen" ? "select" : null),
        name: "data",
        message: "What Would You Like To Generate First?",
        choices: [
            { title: "Command", value: "command", description: "Generate A Command?" },
            { title: "Event", value: "event", description: "Generate An Event?" }
        ]
    }
];
exports.versionSelect = [
    {
        type: "select",
        name: "version",
        message: "Select A Version",
        choices: [
            { title: "Dev", value: "dev", description: "Install The Dev Version Of Eris V0.16" },
            { title: "Latest", value: "latest", description: "Install The Latest Version Eris V0.15.1" }
        ]
    }
];
exports.languageSelect = [
    {
        type: "select",
        name: "language",
        message: "Select A Language!",
        choices: [
            { title: "TypeScript", value: "ts" },
            { title: "JavaScript", value: "js" }
        ]
    }
];
exports.updateChoice = [
    {
        type: "select",
        name: "update",
        message: "Yes or No",
        choices: [
            { title: "Yes", value: "yes" },
            { title: "No", value: "no" }
        ]
    }
];
exports.getCredentials = [
    {
        type: "password",
        name: "token",
        message: "Enter Your Discord Bot Token",
        validate: (value) => (value.length === 0 ? "Cannot Be Empty" : true)
    },
    {
        type: "text",
        name: "prefix",
        message: "Enter Your Discord Bot's Prefix",
        validate: (value) => (value.length === 0 ? "Cannot Be Empty" : true)
    }
];
exports.templateGenerate = [
    {
        type: "text",
        name: "name",
        message: "Enter The Name Of The Command"
    },
    {
        type: "text",
        name: "category",
        message: "Enter Your Command's Category Name."
    }
];
exports.setupTypescript = {
    type: "confirm",
    name: "value",
    message: "Install TypeScript, ts-node, And Setup tsconfig.json? You'll Have To Do This Later If You Skip This.",
    initial: true
};
exports.eventGenerate = [
    {
        type: "autocompleteMultiselect",
        name: "events",
        message: "Which Event(s) Would You Like To Generate?",
        choices: [
            { title: "CALL_CREATE", value: "callCreate" },
            { title: "CALL_DELETE", value: "callDelete" },
            { title: "CALL_RING", value: "callRing" },
            { title: "CLL_UPDATE", value: "callUpdate" },
            { title: "CHANNEL_CREATE", value: "channelCreate" },
            { title: "CHANNEL_DELETE", value: "channelDelete" },
            { title: "CHANNEL_PIN_UPDATE", value: "channelPinUpdate" },
            { title: "CHANNEL_RECIPIENT_ADD", value: "channelRecipientAdd" },
            { title: "CHANNEL_RECIPIENT_REMOVE", value: "channelRecipientRemove" },
            { title: "CHANNEL_UPDATE", value: "channelUpdate" },
            { title: "CONNECT", value: "connect" },
            { title: "DEBUG", value: "debug" },
            { title: "DISCONNECT", value: "disconnect" },
            { title: "ERROR", value: "error" },
            { title: "FRIEND_SUGGESTION_CREATE", value: "friendSuggestionCreate" },
            { title: "FRIEND_SUGGESTION_DELETE", value: "friendSuggestionDelete" },
            { title: "GUILD_AVAILABLE", value: "guildAvailable" },
            { title: "GUILD_BAN_ADD", value: "guildBanAdd" },
            { title: "GUILD_BAN_REMOVE", value: "guildBanRemove" },
            { title: "GUILD_CREATE", value: "guildCreate" },
            { title: "GUILD_DELETE", value: "guildDelete" },
            { title: "GUILD_EMOJIS_UPDATE", value: "guildEmojisUpdate" },
            { title: "GUILD_MEMBER_ADD", value: "guildMemberAdd" },
            { title: "GUILD_MEMBER_CHUNK", value: "guildMemberChunk" },
            { title: "GUILD_MEMBER_REMOVE", value: "guildMemberRemove" },
            { title: "GUILD_MEMBER_UPDATE", value: "guildMemberUpdate" },
            { title: "GUILD_MEMBER_UPDATE", value: "guildMemberUpdate" },
            { title: "GUILD_ROLE_CRETE", value: "guildRoleCreate" },
            { title: "GUILD_ROLE_DELETE", value: "guildRoleDelete" },
            { title: "GUILD_ROLE_UPDARE", value: "guildRoleUpdate" },
            { title: "GUILD_UNAVAILABLE", value: "guildUnavailable" },
            { title: "GUILD_UPDATE", value: "guildUpdate" },
            { title: "HELLO", value: "hello" },
            { title: "INVITE_CREATE", value: "inviteCreate" },
            { title: "INVITE_DELETE", value: "inviteDelete" },
            { title: "MESSAGE_CREATE", value: "messageCreate" },
            { title: "MESSAGE_DELETE", value: "messageDelete" },
            { title: "MESSAGE_DELETE_BULK", value: "messageDeleteBulk" },
            { title: "MESSAGE_REACTION_ADD", value: "messageReactionAdd" },
            { title: "MESSAGE_REACTION_REMOVE", value: "messageReactionRemove" },
            { title: "MESSAGE_REACTION_REMOVE_ALL", value: "messageReactionRemoveAll" },
            { title: "MESSAGE_REACTION_REMOVE_EMOJI", value: "messageReactionRemoveEmoji" },
            { title: "MESSAGE_UPDATE", value: "messageUpdate" },
            { title: "PRESENCE_UPDATE", value: "presenceUpdate" },
            { title: "RAW_REST", value: "rawREST" },
            { title: "RAW_WS", value: "rawWS" },
            { title: "READY", value: "ready" },
            { title: "RELATIONSHIP_ADD", value: "relationshipAdd" },
            { title: "RELATIONSHIP_REMOVE", value: "relationshipRemove" },
            { title: "RELATIONSHIP_UPDATE", value: "relationshipUpdate" },
            { title: "SHARD_DISCONNECT", value: "shardDisconnect" },
            { title: "SHARD_PRE_READY", value: "shardPreReady" },
            { title: "SHARD_READY", value: "shardReady" },
            { title: "SHARD_RECONNECTING", value: "shardReconnecting" },
            { title: "SHARD_RESUME", value: "shardResume" },
            { title: "TYPING_START", value: "typingStart" },
            { title: "UNAVAILABLE_GUILD_CRETE", value: "unavailableGuildCreate" },
            { title: "UNKNOWN", value: "unknown" },
            { title: "USER_UPDATE", value: "userUpdate" },
            { title: "VOICE_CHANNEL_JOIN", value: "voiceChannelJoin" },
            { title: "VOICE_CHANNEL_LEAVE", value: "voiceChannelLeave" },
            { title: "VOICE_CHANNEL_SWITCH", value: "voiceChannelSwitch" },
            { title: "VOICE_STATE_UPDATE", value: "voiceStateUpdate" },
            { title: "WARN", value: "warn" },
            { title: "WEBHOOKS_UPDATE", value: "webhooksUpdate" }
        ],
        hint: "- Space To Select. Return To Submit."
    }
];
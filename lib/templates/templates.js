"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
function getEnvTemplate(token, prefix) {
    return `DISCORD_BOT_TOKEN=${token}\nDISCORD_BOT_PREFIX=${prefix}`;
}
exports.getEnvTemplate = getEnvTemplate;
function getMainFile() {
    return `require("dotenv").config();
const { Client } = require("eris");
const { registerCommands, registerEvents } = require("./utils/registry");
const client = new Client("Bot " + process.env.DISCORD_BOT_TOKEN);

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = process.env.DISCORD_BOT_PREFIX;
  await registerCommands(client, "../commands");
  await registerEvents(client, "../events");
  await client.connect();
})();\n
`;
}
exports.getMainFile = getMainFile;
function getMainFileTS() {
    return `import { config } from "dotenv";
config();
import { registerCommands, registerEvents } from "./utils/registry";
import DiscordClient from "./client/client";
const client = new DiscordClient("Bot " + process.env.DISCORD_BOT_TOKEN);

(async () => {
  client.prefix = process.env.DISCORD_BOT_PREFIX || client.prefix;
  await registerCommands(client, "../commands");
  await registerEvents(client, "../events");
  await client.connect();
})();\n
`;
}
exports.getMainFileTS = getMainFileTS;
function getTypescriptBotFile() {
    return `import { Client, ClientOptions } from "eris";
import BaseEvent from "../utils/structures/BaseEvent";
import BaseCommand from "../utils/structures/BaseCommand";

export default class DiscordClient extends Client {

  private _commands = new Map<string, BaseCommand>();
  private _events = new Map<string, BaseEvent>();
  private _prefix: string = "!";

  constructor(options?: ClientOptions) {
    super(options);
  }

  get commands(): Map<string, BaseCommand> { return this._commands; }
  get events(): Map<string, BaseEvent> { return this._events; }
  get prefix(): string { return this._prefix; }

  set prefix(prefix: string) { this._prefix = prefix; }

}
`;
}
exports.getTypescriptBotFile = getTypescriptBotFile;
function getRegistryFileTS() {
    return `
import path from "path";
import { promises as fs } from "fs";
import DiscordClient from "../client/client";

export async function registerCommands(client: DiscordClient, dir: string = "") {
  const filePath = path.join(__dirname, dir);
  const files = await fs.readdir(filePath);
  for (const file of files) {
    const stat = await fs.lstat(path.join(filePath, file));
    if (stat.isDirectory()) registerCommands(client, path.join(dir, file));
    if (file.endsWith(".js") || file.endsWith(".ts")) {
      const { default: Command } = await import(path.join(dir, file));
      const command = new Command();
      client.commands.set(command.getName(), command);
      command.getAliases().forEach((alias: string) => {
        client.commands.set(alias, command);
      });
    }
  }
}

export async function registerEvents(client: DiscordClient, dir: string = "") {
  const filePath = path.join(__dirname, dir);
  const files = await fs.readdir(filePath);
  for (const file of files) {
    const stat = await fs.lstat(path.join(filePath, file));
    if (stat.isDirectory()) registerEvents(client, path.join(dir, file));
    if (file.endsWith(".js") || file.endsWith(".ts")) {
      const { default: Event } = await import(path.join(dir, file));
      const event = new Event();
      client.events.set(event.getName(), event);
      client.on(event.getName(), event.run.bind(event, client));
    }
  }
}
`;
}
exports.getRegistryFileTS = getRegistryFileTS;
function getRegistryFile() {
    return `
const path = require("path");
const fs = require("fs").promises;
const BaseCommand = require("./structures/BaseCommand");
const BaseEvent = require("./structures/BaseEvent");

async function registerCommands(client, dir = "") {
  const filePath = path.join(__dirname, dir);
  const files = await fs.readdir(filePath);
  for (const file of files) {
    const stat = await fs.lstat(path.join(filePath, file));
    if (stat.isDirectory()) registerCommands(client, path.join(dir, file));
    if (file.endsWith(".js")) {
      const Command = require(path.join(filePath, file));
      if (Command.prototype instanceof BaseCommand) {
        const cmd = new Command();
        client.commands.set(cmd.name, cmd);
        cmd.aliases.forEach((alias) => {
          client.commands.set(alias, cmd);
        });
      }
    }
  }
}

async function registerEvents(client, dir = "") {
  const filePath = path.join(__dirname, dir);
  const files = await fs.readdir(filePath);
  for (const file of files) {
    const stat = await fs.lstat(path.join(filePath, file));
    if (stat.isDirectory()) registerEvents(client, path.join(dir, file));
    if (file.endsWith(".js")) {
      const Event = require(path.join(filePath, file));
      if (Event.prototype instanceof BaseEvent) {
        const event = new Event();
        client.events.set(event.name, event);
        client.on(event.name, event.run.bind(event, client));
      }
    }
  }
}

module.exports = { 
  registerCommands, 
  registerEvents,
};`;
}
exports.getRegistryFile = getRegistryFile;
function getBaseCommand() {
    return `module.exports = class BaseCommand {
  constructor(name, category, aliases) {
    this.name = name;
    this.category = category;
    this.aliases = aliases;
  }
}`;
}
exports.getBaseCommand = getBaseCommand;
function getBaseCommandTS() {
    return `
import { Message, TextableChannel } from "eris";
import DiscordClient from "../../client/client";

export default abstract class BaseCommand {
  constructor(private name: string, private category: string, private aliases: Array<string>) {}

  getName(): string { return this.name; }
  getCategory(): string { return this.category; }
  getAliases(): Array<string> { return this.aliases; }

  abstract async run(client: DiscordClient, message: Message<TextableChannel>, args: Array<string> | null): Promise<void>;
}`;
}
exports.getBaseCommandTS = getBaseCommandTS;
function getBaseEvent() {
    return `module.exports = class BaseEvent {
  constructor(name) {
    this.name = name;
  }
}`;
}
exports.getBaseEvent = getBaseEvent;
function getBaseEventTS() {
    return `
import DiscordClient from "../../client/client";

export default abstract class BaseEvent {
  constructor(private name: string) { }

  getName(): string { return this.name; }
  abstract run(client: DiscordClient, ...args: any): void;
}
`;
}
exports.getBaseEventTS = getBaseEventTS;
function getReadyEvent() {
    return `const BaseEvent = require("../../utils/structures/BaseEvent");

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super("ready");
  }
  async run (client) {
    console.log(client.user.tag + " has logged in.");
  }
}`;
}
exports.getReadyEvent = getReadyEvent;
function getReadyEventTS() {
    return `import BaseEvent from "../../utils/structures/BaseEvent";
import DiscordClient from "../../client/client";

export default class ReadyEvent extends BaseEvent {
  constructor() {
    super("ready");
  }
  async run (client: DiscordClient) {
    console.log("Bot has logged in.");
  }
}`;
}
exports.getReadyEventTS = getReadyEventTS;
function getMessageEvent() {
    return `const BaseEvent = require("../../utils/structures/BaseEvent");
const Eris = require("eris");

module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super("messageCreate");
  }
  
  /**
   * @param {Eris.Client} client
   * @param {Eris.Message<Eris.TextableChannel>} message
   */
  async run(client, message) {
    if (message.author.bot) return;
    if (message.content.startsWith(client.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
      .slice(client.prefix.length)
      .trim()
      .split(/\\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }
  }
}`;
}
exports.getMessageEvent = getMessageEvent;
function getMessageEventTS() {
    return `import BaseEvent from "../../utils/structures/BaseEvent";
import { Message } from "eris";
import DiscordClient from "../../client/client";

export default class MessageEvent extends BaseEvent {
  constructor() {
    super("messageCreate");
  }

  async run(client: DiscordClient, message: Message) {
    if (message.author.bot) return;
    if (message.content.startsWith(client.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
        .slice(client.prefix.length)
        .trim()
        .split(/\\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }
  }
}`;
}
exports.getMessageEventTS = getMessageEventTS;
function getPingCommand() {
    return `const BaseCommand = require("../../utils/structures/BaseCommand");
const Eris = require("eris")

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super("ping", "general", []);
  }

  /**
   * @param {Eris.Client} client
   * @param {Eris.Message<Eris.TextableChannel>} message
   * @param {Array<String>} args
   */
  async run(client, message, args) {
    message.channel.createMessage("Pong!");
  }
}`;
}
exports.getPingCommand = getPingCommand;
function getPingCommandTS() {
    return `import { Message, TextableChannel }, Eris from "eris";
import BaseCommand from "../../utils/structures/BaseCommand";
import DiscordClient from "../../client/client";

export default class PingCommand extends BaseCommand {
  constructor() {
    super("ping", "general", []);
  }

  async run(client: DiscordClient, message: Message<TextableChannel>, args: Array<String>) {
    message.channel.createMessage("Pong!");
  }
}`;
}
exports.getPingCommandTS = getPingCommandTS;
function getCommandTemplate(name, category) {
    return `const BaseCommand = require("../../utils/structures/BaseCommand");
const Eris = require("eris")

module.exports = class ${utils_1.capitalize(name)}Command extends BaseCommand {
  constructor() {
    super("${name}", "${category}", []);
  }

  /**
   * @param {Eris.Client} client
   * @param {Eris.Message<Eris.TextableChannel>} message
   * @param {Array<String>} args
   */
  async run(client, message, args) {
    message.channel.createMessage("${name} command works");
  }
}`;
}
exports.getCommandTemplate = getCommandTemplate;
function getCommandTemplateTS(name, category) {
    return `import { Message, TextableChannel }, Eris from "eris";
import BaseCommand from "../../utils/structures/BaseCommand";
import DiscordClient from "../../client/client";

export default class ${utils_1.capitalize(name)}Command extends BaseCommand {
  constructor() {
    super("${name}", "${category}", []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    message.channel.createMessage("${name} command works");
  }
}`;
}
exports.getCommandTemplateTS = getCommandTemplateTS;
exports.TSCONFIG = `
{
  "compilerOptions": {
    "target": "ES6",                          /* Specify ECMAScript target version: "ES3" (default), "ES5", "ES2015", "ES2016", "ES2017", "ES2018", "ES2019", "ES2020", or "ESNEXT". */
    "module": "commonjs",                     /* Specify module code generation: "none", "commonjs", "amd", "system", "umd", "es2015", "es2020", or "ESNext". */
    "outDir": "./build",                      /* Redirect output structure to the directory. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies "allowSyntheticDefaultImports". */
  }
}
`;
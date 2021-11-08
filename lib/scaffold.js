"use strict";
const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value); 
        }); 
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value)); 
            } catch (e) {
                reject(e); 
            } 
        }
        function rejected(value) {
            try {
                step(generator["throw"](value)); 
            } catch (e) {
                reject(e); 
            } 
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); 
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
const prompts_1 = __importDefault(require("prompts"));
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const log_symbols_1 = __importDefault(require("log-symbols"));
const questions_1 = require("./questions");
const filesystem_1 = require("./filesystem");
const templates_1 = require("./templates/templates");
const utils_1 = require("./utils");
const events_1 = __importDefault(require("./templates/events"));
const tsevents_1 = __importDefault(require("./templates/tsevents"));
const events = events_1.default;
const eventsTS = tsevents_1.default;
const dir = process.cwd();
function createNewProject(name, language) {
    return __awaiter(this, void 0, void 0, function* () {
        const filePath = path_1.default.join(dir, name);
        const dirExists = yield filesystem_1.exists(filePath);
        if (!dirExists) {
            try {
                yield filesystem_1.createDirectory(filePath);
                console.log(chalk_1.default.yellow.bold(`${log_symbols_1.default.success} Generated ${filePath}`));
                yield filesystem_1.createProjectDetailsFile(filePath, name, language);
                yield filesystem_1.initializeNPM(filePath);
                console.log(chalk_1.default.yellow.bold(`${log_symbols_1.default.success} Initialized NPM`));
                yield filesystem_1.installEris(filePath);
                console.log(chalk_1.default.yellow.bold(`${log_symbols_1.default.success} Installed Eris`));
                yield filesystem_1.installDotenv(filePath);
                console.log(chalk_1.default.yellow.bold(`${log_symbols_1.default.success} Installed Dotenv.`));
                yield filesystem_1.createSrcFolder(filePath);
                // Need to copy templates.
                const { token, prefix } = yield prompts_1.default(questions_1.getCredentials);
                const env = templates_1.getEnvTemplate(token, prefix);
                yield filesystem_1.createEnvironmentFile(filePath, env);
                console.log(chalk_1.default.yellow.bold(`${log_symbols_1.default.success} Created .env File.`));
                const main = language === "js" ? templates_1.getMainFile() : templates_1.getMainFileTS();
                yield filesystem_1.createMainFile(filePath, main, language);
                console.log(chalk_1.default.yellow.bold(`${log_symbols_1.default.success} Created Main Bot.${language} File.`));
                const templates = language === "js" ? yield filesystem_1.generateTemplates(filePath) : yield filesystem_1.generateTSTemplates(filePath);
                console.log(chalk_1.default.yellow.bold(`${log_symbols_1.default.success} Generated Templates.`));
                yield filesystem_1.modifyPackageJSONFile(filePath, language);
                if (language === "ts") {
                    const { value } = yield prompts_1.default(questions_1.setupTypescript);
                    if (value) {
                        yield filesystem_1.installTypescript(filePath);
                        console.log(chalk_1.default.yellow.bold(`${log_symbols_1.default.success} Installed TypeScript`));
                        yield filesystem_1.installTSNode(filePath);
                        console.log(chalk_1.default.yellow.bold(`${log_symbols_1.default.success} Installed ts-node.`));
                        yield filesystem_1.setupTSConfigTemplate(filePath);
                        console.log(chalk_1.default.yellow.bold(`${log_symbols_1.default.success} Setup tsconfig.json`));
                    }
                }
                console.log(chalk_1.default.yellow.bold(`${log_symbols_1.default.success} Success!`));
                console.log(`Type ${chalk_1.default.red.bold(`cd ./${name} And Run npm run start`)}`);
                return true;
            } catch (err) {
                console.log(err);
                yield filesystem_1.deleteDirectory(filePath);
                return err;
            }
        } else {
            throw new Error(`File/Folder With The Name: ${name} Already Exists. Cannot Create File.`);
        }
    });
}
exports.createNewProject = createNewProject;
function generateNewCommand(commandName, category) {
    return __awaiter(this, void 0, void 0, function* () {
        const connectFile = path_1.default.join(dir, "generis.json");
        const fileExists = yield filesystem_1.exists(connectFile);
        if (fileExists) {
            const { language } = yield filesystem_1.getFile(connectFile);
            // Check the language
            // Check if commands folder has category.
            // if it exists, create it in there, if not, create folder.
            const commandsPath = path_1.default.join(dir, "src", "commands", category);
            const categoryExists = yield filesystem_1.exists(commandsPath);
            if (categoryExists) {
                // Check if command already exists.
                const commandFile = language === "js" ? `${utils_1.capitalize(commandName)}Command.js` : `${utils_1.capitalize(commandName)}Command.ts`;
                const commandFilePath = path_1.default.join(commandsPath, commandFile);
                const commandExists = yield filesystem_1.exists(commandFilePath);
                if (!commandExists) {
                    return filesystem_1.createCommandFile(commandsPath, commandName, category, language);
                }
                throw new Error(`Command Already Exists. ${commandFile}`);
            }
            yield filesystem_1.createDirectory(commandsPath);
            return filesystem_1.createCommandFile(commandsPath, commandName, category, language);
        }
        throw new Error("Not A GenEris Project");
    });
}
exports.generateNewCommand = generateNewCommand;
function generateNewEvent(eventsArray) {
    return __awaiter(this, void 0, void 0, function* () {
        const GenEris = path_1.default.join(dir, "generis.json");
        const genErisFileExists = yield filesystem_1.exists(GenEris);
        const eventsPath = path_1.default.join(dir, "src", "events");
        try {
            if (genErisFileExists) {
                const { language } = yield filesystem_1.getFile(GenEris);
                const fileExists = yield filesystem_1.exists(eventsPath);
                if (!fileExists) {
                    yield filesystem_1.createDirectory(eventsPath);
                }
                const js = language === "js";
                // eslint-disable-next-line no-restricted-syntax
                for (const event of eventsArray) {
                    const eventsFilePath = js
                        ? path_1.default.join(eventsPath, `${utils_1.capitalize(event)}Event.js`)
                        : path_1.default.join(eventsPath, `${utils_1.capitalize(event)}Event.ts`);
                    const eventsFileExists = yield filesystem_1.exists(eventsFilePath);
                    // eslint-disable-next-line max-len
                    if (!eventsFileExists) {
                        yield filesystem_1.createEventFile(eventsFilePath, js ? events[event] : eventsTS[event]);
                    }
                    console.log(`${log_symbols_1.default.success} Created ${eventsFilePath}`);
                }
            } else {
                throw new Error(`${log_symbols_1.default.error} Not A GenEris Project!`);
            }
        } catch (err) {
            console.log(err);
        }
    });
}
exports.generateNewEvent = generateNewEvent;
require('dotenv').config();
const {APP_ID}= process.env;
const { InstallGlobalCommands } = require('./utils.js');

const TEST_COMMAND = { name: 'test', description: 'Testing command', type: 1 };

const ALL_COMMANDS = [TEST_COMMAND];
InstallGlobalCommands("1096396389195464816", ALL_COMMANDS);

require('dotenv').config();
const { InstallGlobalCommands } = require('./utils.js');
const TEST_COMMAND = { name: 'test', description: 'Testing command', type: 1 };

const ALL_COMMANDS = [TEST_COMMAND];
InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);

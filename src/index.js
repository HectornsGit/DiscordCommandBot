'use strict';

require('colors');
require('dotenv').config();
const { readdirSync } = require('fs');
const express = require('express');
const { Client, Intents } = require('discord.js');
const { InteractionType, InteractionResponseType } = require('discord-interactions');
const { TOKEN } = process.env;

const app = express();

const client = new Client({
  intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS, Intents.FLAGS.MESSAGE_CONTENT],
});

client.login(TOKEN);

client.on('ready', c => {
  console.log(`${c.user.username} is working and ready`);
});

app.post('/interactions', async (req, res) => {
  const { type, id, data } = req.body;

  if (type === InteractionType.APPLICATION_COMMAND) {
    const { name } = data;
    if (name === 'test') {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { content: 'Me follo a tu madre' },
      });
    }
  }
});

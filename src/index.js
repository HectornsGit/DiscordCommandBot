'use strict';

require('colors');
require('dotenv').config();
const { readdirSync } = require('fs');
const express = require('express');
const {VerifyDiscordRequest}= require("./utils.js")

const { InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
  ButtonStyleTypes,} = require('discord-interactions');

const { PORT} = process.env;

const app = express();

app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));

app.post('/interactions', async (req, res) => {
  const { type, id, data } = req.body;
  
  if (type === InteractionType.PING) {
      return res.send({ type: InteractionResponseType.PONG });
    }
  
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

app.listen(PORT,()=>{console.log("Bot listening on port: ", PORT|4000)})
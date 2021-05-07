const Discord = require('discord.js');
const { getRandomMeme } = require('./randomMeme');
const { getRandomAww } = require('./randomAww');
require('dotenv').config();
fetch = require('node-fetch')
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready',  () =>  console.log('The Bot is ready!'));

client.on('message', async msg => {
    if(msg.content === 'dank') {
        msg.channel.send(await getRandomMeme());
    }
});
client.on('message', async msg => {
    if(msg.content === 'aww') {
        msg.channel.send(await getRandomAww());
    }
});
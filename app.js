const Discord = require('discord.js');
const { getRandomMeme } = require('./random/randomMeme');
const { getRandomAww } = require('./random/randomAww');
const { getRandomFood } = require('./random/randomFood');
const { getRandomPorn} = require('./random/randomPorn')
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
client.on('message', async msg => {
    if(msg.content === 'food') {
        msg.channel.send(await getRandomFood());
    }
});

client.on('message', async msg => {
    if(msg.content === 'porn') {
        msg.channel.send(await getRandomPorn());
    }
}); 

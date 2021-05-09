const Discord = require('discord.js');
const { getRandomMeme } = require('./random/randomMeme');
const { getRandomAnimal } = require('./random/randomAnimal');
const { getRandomFood } = require('./random/randomFood');
const { getRandomPorn, getRandomPublic, getRandomFunny } = require('./random/randomPorn')

require('dotenv').config();
fetch = require('node-fetch')
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => console.log('The Bot is ready!'));

client.on('message', async msg => {
    if (msg.content === 'dank') {
        msg.channel.send(await getRandomMeme());
    }
});
client.on('message', async msg => {
    if (msg.content === 'aninmal') {
        msg.channel.send(await getRandomAnimal());
    }
});
client.on('message', async msg => {
    if (msg.content === 'food') {
        msg.channel.send(await getRandomFood())
    }
});

client.on('message', async msg => {
    if (msg.content === 'porn') {
        msg.channel.send(await getRandomPorn());
    }
});

client.on('message', async msg => {
    if (msg.content === 'public') {
        msg.channel.send(await getRandomPublic());
    }
});

client.on('message', async msg => {
    if (msg.content === 'funny nsfw') {
        msg.channel.send(await getRandomFunny());
    }
});
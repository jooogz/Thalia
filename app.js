const Discord = require('discord.js');
const { getRandomMeme } = require('./events/randomMeme');
const { getRandomAnimal } = require('./events/randomAnimal');
const { getRandomFood } = require('./events/randomFood');
const { getRandomPorn, getRandomPublic} = require('./events/randomPorn')

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
    if(msg.content === 'aninmal') {
        msg.channel.send(await getRandomAnimal());
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

client.on('message', async msg => {
    if(msg.content === 'public') {
        msg.channel.send(await getRandomPublic());
    }
}); 
const Discord = require('discord.js');
const { getRandomMeme } = require('./events/randomMeme');
const { getRandomAnimal, getRandomDoggo} = require('./events/randomAnimal');
const { getRandomFood } = require('./events/randomFood');
const { getRandomPorn, getRandomPublic, getRandomOf, getRandomAlt, getRandomKink } = require('./events/randomPorn');
const { getRandomAdvice, magicEightBall, djKhaled, punJoke, darkJoke } = require('./events/fun');
const { urbanDictionary } = require('./events/urban');
const { nsfwFunction, sfwFunction } = require("./events/tables")
const urban = require('./events/urban');
require('dotenv').config();
fetch = require('node-fetch')
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);


client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({ activity: { name: 'help or Nhelp for commands' }, status: 'online' });
    console.log("ready")
});

client.on('message', async msg => {
    if (msg.content === 'ping') {
        msg.channel.send(`Websocket heartbeat: ${client.ws.ping}ms.`);
    }
    if (msg.content === 'dank') {
        msg.channel.send(await getRandomMeme());
    }
    if (msg.content === 'aninmal') {
        msg.channel.send(await getRandomAnimal());
    } 
    if(msg.content === "doggo"){
        msg.content.send(await getRandomDoggo());
    }
    if (msg.content === 'food') {
        msg.channel.send(await getRandomFood());
    }
    if (msg.content === 'porn') {
        msg.channel.send(await getRandomPorn());
    }
    if (msg.content === 'public') {
        msg.channel.send(await getRandomPublic());
    }
    if (msg.content === 'funny nsfw') {
        msg.channel.send(await getRandomFunny());
    }
    if (msg.content === 'of') {
        msg.channel.send(await getRandomOf());
    }
    if (msg.content === 'kink') {
        msg.channel.send(await getRandomKink());
    }
    if (msg.content === 'help' || msg.content === "commands") {
        msg.channel.send((`\n\n\`\`\`\n${sfwFunction()}\`\`\``));
    }
    if (msg.content === "Nhelp") {
        msg.channel.send((`\n\n\`\`\`\n${nsfwFunction()}\`\`\``));
    }
    if (msg.content === 'alt') {
        msg.channel.send(await getRandomAlt());
    }
    if (msg.content === "advice") {
        msg.channel.send(await getRandomAdvice());
    }
    if (msg.content === "pun") {
        msg.channel.send(await  punJoke());
    }
    if(msg.content === "dark joke"){
        msg.channel.send(await darkJoke());
    }
    if (msg.content.startsWith('urban')) {
        param = msg.content.substr(6)
        msg.channel.send(await urbanDictionary(param));
    }
    if (msg.content.startsWith('8ball')) {
        msg.channel.send(msg.author.toString() + " " + magicEightBall());
    }
    if (msg.content === "key") {
        msg.channel.send(msg.author.toString() + " " + djKhaled());
    }
});
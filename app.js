const Discord = require('discord.js');
const AsciiTable = require('ascii-table')

const nsfwTable = new AsciiTable('NSFW Commands')
nsfwTable
    .setHeading("Command", "Function")
    .addRow("porn", "random porn")
    .addRow("public", "exhibitionist kink picture")
    .addRow("nsfw", "will send a gif of porn")
    .addRow("of", "someone who you are the only fan of")
    .addRow("alt", "typically crazy, usually hot")
    .addRow("kink", "A mixture of a few.. beware")
const sfwTable = new AsciiTable('Commands')
sfwTable
    .setHeading("Command", "Function")
    .addRow("aww", "cute animal")
    .addRow("doggo", "smol pupper")
    .addRow("food", "picture of food")
    .addRow("dank", "random meme")
    .addRow("urban", "tell you the definition of the word that you search");

const { getRandomMeme } = require('./events/randomMeme');
const { getRandomAnimal } = require('./events/randomAnimal');
const { getRandomFood } = require('./events/randomFood');
const { getRandomPorn, getRandomPublic, getRandomOf, getRandomAlt, getRandomKink, getRandomGif } = require('./events/randomPorn')
const {getRandomAdvice} = require('./events/advice')
const {urbanDictionary}= require('./events/urban');
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
    if (msg.content === 'food') {
        msg.channel.send(await getRandomFood())
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
        msg.channel.send((`\n\n\`\`\`\n${sfwTable.toString()}\`\`\``))
    }
    if (msg.content === "Nhelp") {
        msg.channel.send((`\n\n\`\`\`\n${nsfwTable.toString()}\`\`\``))
    }
    if (msg.content === 'alt') {
        msg.channel.send(await getRandomAlt());
    }
    if (msg.content === 'nsfw') {
        msg.channel.send(await getRandomGif());
    }
    if (msg.content === "advice") {
        msg.channel.send(await getRandomAdvice());
    }
    if (msg.content.startsWith('urban')) {
        param = msg.content.substr(6)
        msg.channel.send(await urbanDictionary(param))
    }
});
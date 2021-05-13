const Discord = require('discord.js');
const AsciiTable = require('ascii-table')

const nsfwTable = new AsciiTable('NSFW Commands')
nsfwTable
    .setHeading("Command", "Function")
    .addRow("porn", "random porn")
    .addRow("public", "exhibitionist kink picture")
    .addRow("funny nsfw", "funny porn")
    .addRow("of", "someone who you are the only fan of")
    .addRow("alt", "typically crazy, usually hot")
    .addRow("kink", "A mixture of a few.. beware")
const sfwTable = new AsciiTable('Commands')
sfwTable
    .setHeading("Command", "Function")
    .addRow("aww", "cute animal")
    .addRow("doggo", "smol pupper")
    .addRow("food", "picture of food")
    .addRow("dank", "random meme");
const { getRandomMeme } = require('./random/randomMeme');
const { getRandomAnimal } = require('./random/randomAnimal');
const { getRandomFood } = require('./random/randomFood');
const { getRandomPorn, getRandomPublic, getRandomFunny, getRandomOf, getRandomAlt, getRandomKink } = require('./random/randomPorn')

require('dotenv').config();
fetch = require('node-fetch')
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);


client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({ activity: { name: 'help or Nhelp for commands' }, status: 'online' });
});

client.on('message', async msg => {
    if (msg.content === 'ping') {
        msg.channel.send(`Websocket heartbeat: ${client.ws.ping}ms.`);
    }
});
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
client.on('message', async msg => {
    if (msg.content === 'of') {
        msg.channel.send(await getRandomOf());
    }
});
client.on('message', async msg => {
    if (msg.content === 'kink') {
        msg.channel.send(await getRandomKink());
    }
});
client.on('message', async msg => {
    if (msg.content === 'help' || msg.content === "commands") {
        msg.channel.send((`\n\n\`\`\`\n${sfwTable.toString()}\`\`\``))
    }
});
client.on('message', async msg => {
    if (msg.content === "Nhelp") {
        msg.channel.send((`\n\n\`\`\`\n${nsfwTable.toString()}\`\`\``))
    }
});
client.on('message', async msg => {
    if (msg.content === 'alt') {
        msg.channel.send(await getRandomAlt());
    }
});
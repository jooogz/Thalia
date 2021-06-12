const Discord = require('discord.js');
const { getRandomMeme, getRandomUnexpected } = require('./events/randomMeme');
const { getRandomAnimal, getRandomDoggo } = require('./events/randomAnimal');
const { getRandomFood } = require('./events/randomFood');
const { getRandomPorn, getRandomPublic, getRandomOf, getRandomAlt, getRandomKink, getRandomGif } = require('./events/randomPorn');
const { getRandomAdvice, magicEightBall, djKhaled, punJoke, darkJoke } = require('./events/fun');
const { urbanDictionary } = require('./events/urban');
const { nsfwFunction, sfwFunction } = require("./events/tables")
const { drone } = require("./events/estaaEggz")
const {redditSearch, randReddit, nsfwReddit } = require("./events/reddit")
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
  if (msg.content === 'unexpected') {
    msg.channel.send(await getRandomUnexpected());
  }
  if (msg.content === 'aww') {
    msg.channel.send(await getRandomAnimal());
  }
  if (msg.content === "doggo") {
    msg.channel.send(await getRandomDoggo());
  }
  if (msg.content === 'food') {
    msg.channel.send(await getRandomFood());
  }
  if (msg.content === 'help' || msg.content === "commands") {
    msg.channel.send((`\n\n\`\`\`\n${sfwFunction()}\`\`\``));
  }
  if (msg.content === "advice") {
    msg.channel.send(await getRandomAdvice());
  }
  if (msg.content === "pun") {
    msg.channel.send(await punJoke());
  }
  if (msg.content === "random") {
    msg.channel.send(await randReddit());
  }
  if (msg.content.startsWith('urban')) {
    param = msg.content.substr(6)
    msg.channel.send(await urbanDictionary(param));
  }
  if(msg.content.startsWith('reddit')){
    param = msg.content.substr(7);
    msg.channel.send(await redditSearch(param));
  }
  if (msg.content.startsWith('8ball')) {
    msg.channel.send(msg.author.toString() + " " + magicEightBall());
  }
  if (msg.content === "key") {
    msg.channel.send(msg.author.toString() + " " + djKhaled());
  }
  if (msg.content === "bobbydrone") {
    if (msg.channel.nsfw) {
      msg.channel.send(drone());
    } else {
      msg.channel.send("oi" + ' ' + msg.author.toString() + ' ' + "Wrong channel type! NSFW only!" + " " + "https://i.kym-cdn.com/photos/images/newsfeed/001/842/713/b73.jpg")
    }
  }
  if (msg.content === "darkjoke") {
    msg.channel.send(await darkJoke());
  }
  if (msg.content === "Nhelp") {
    if (msg.channel.nsfw) {
      msg.channel.send((`\n\n\`\`\`\n${nsfwFunction()}\`\`\``));
    } else {
      msg.channel.send("oi" + ' ' + msg.author.toString() + ' ' + "Wrong channel type! NSFW only!" + " " + "https://i.kym-cdn.com/photos/images/newsfeed/001/842/713/b73.jpg");
    }
  }
  if (msg.content === 'alt') {
    if (msg.channel.nsfw) {
      msg.channel.send(await getRandomAlt());
    } else {
      msg.channel.send("oi" + ' ' + msg.author.toString() + ' ' + "Wrong channel type! NSFW only!" + " " + "https://i.kym-cdn.com/photos/images/newsfeed/001/842/713/b73.jpg");
    }
  }
  if (msg.content === 'porn') {
    if (msg.channel.nsfw) {
      msg.channel.send(await getRandomPorn());
    } else {
      msg.channel.send("oi" + ' ' + msg.author.toString() + ' ' + "Wrong channel type! NSFW only!" + " " + "https://i.kym-cdn.com/photos/images/newsfeed/001/842/713/b73.jpg");
    }
  }
  if (msg.content === 'rNSFW') {
    if (msg.channel.nsfw) {
      msg.channel.send(await nsfwReddit());
    } else {
      msg.channel.send("oi" + ' ' + msg.author.toString() + ' ' + "Wrong channel type! NSFW only!" + " " + "https://i.kym-cdn.com/photos/images/newsfeed/001/842/713/b73.jpg");
    }
  }
  if (msg.content === 'giffed') {
    if (msg.channel.nsfw) {
      msg.channel.send(await getRandomGif());
    } else {
      msg.channel.send("oi" + ' ' + msg.author.toString() + ' ' + "Wrong channel type! NSFW only!" + " " + "https://i.kym-cdn.com/photos/images/newsfeed/001/842/713/b73.jpg");
    }
  }
  if (msg.content === 'public') {
    if (msg.channel.nsfw) {
      msg.channel.send(await getRandomPublic());
    } else {
      msg.channel.send("oi" + ' ' + msg.author.toString() + ' ' + "Wrong channel type! NSFW only!" + " " + "https://i.kym-cdn.com/photos/images/newsfeed/001/842/713/b73.jpg");
    }
  }
  if (msg.content === 'funny nsfw') {
    if (msg.channel.nsfw) {
      msg.channel.send(await getRandomFunny());
    } else {
      msg.channel.send("oi" + ' ' + msg.author.toString() + ' ' + "Wrong channel type! NSFW only!" + " " + "https://i.kym-cdn.com/photos/images/newsfeed/001/842/713/b73.jpg");
    }
  }
  if (msg.content === 'of') {
    if (msg.channel.nsfw) {
      msg.channel.send(await getRandomOf());
    } else {
      msg.channel.send("oi" + ' ' + msg.author.toString() + ' ' + "Wrong channel type! NSFW only!" + " " + "https://i.kym-cdn.com/photos/images/newsfeed/001/842/713/b73.jpg");
    }
  }
  if (msg.content === 'kink') {
    if (msg.channel.nsfw) {
      msg.channel.send(await getRandomKink());
    } else {
      msg.channel.send("oi" + ' ' + msg.author.toString() + ' ' + "Wrong channel type! NSFW only!" + " " + "https://i.kym-cdn.com/photos/images/newsfeed/001/842/713/b73.jpg");
    }
  }
});
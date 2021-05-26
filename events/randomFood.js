fetch = require('node-fetch');
const Discord = require('discord.js');
module.exports = {
    getRandomFood: async function () {
        let food = [];
        let base36 = ""
        for (let index = 0; index < 5; index++) {
            const data = await fetch("https://old.reddit.com/user/jeo96x/m/food/.json?limit=100&after=" + base36)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    food.push(link)
                }
            }
            base36 = children[children.length - 1].data.name;

        }
        const pick = food[Math.floor(Math.random() * food.length)];
        const embed = new Discord.MessageEmbed()
            .setTitle('Here take some food')
            .setColor(0x00A2E8)
            .attachFiles(pick)
            .setFooter("a symphony of fucks");
        return embed
    }
}
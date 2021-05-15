fetch = require('node-fetch')
const Discord = require('discord.js');
const used = []
module.exports = {
    getRandomPorn: async function () {
        let porn = [];
        let base36 = ""
        for (let index = 0; index < 5; index++) {
            const data = await fetch("https://old.reddit.com/user/jeo96x/m/porn/new/.json?limit=100&after=" + base36)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    if (!used.includes(link)) { // no duplications
                        porn.push(link)
                    }
                }
            }
            base36 = children[children.length - 1].data.name;

        }
        const pick = porn[Math.floor(Math.random() * porn.length)];
        const embed = new Discord.MessageEmbed()
            .setTitle("Here's random porn")
            .setColor(0x00A2E8)
            .setImage(pick)
            .setFooter("a symphony of fucks");
        used.push(pick)
        return embed
    },
    getRandomPublic: async function () {
        let public = [];
        let base36 = ""
        for (let index = 0; index < 5; index++) {
            const data = await fetch("https://old.reddit.com/user/jeo96x/m/public/new/.json?limit=100&after=" + base36)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    if (!used.includes(link)) { // no duplications
                        public.push(link)
                    }
                }
            }
            base36 = children[children.length - 1].data.name;

        }
        const pick = public[Math.floor(Math.random() * public.length)];
        const embed = new Discord.MessageEmbed()
            .setTitle("Here's some public pics")
            .setColor(0x00A2E8)
            .setImage(pick)
            .setFooter("a symphony of fucks");
        used.push(pick)
        return embed
    },
    getRandomFunny: async function () {
        let funny = [];
        let base36 = ""
        for (let index = 0; index < 10; index++) {
            const data = await fetch("https://www.reddit.com/user/jeo96x/m/funnynsfw/new/.json?limit=50&after=" + base36)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    if (!used.includes(link)) { // no duplications
                        funny.push(link)
                    }
                }
            }
            base36 = children[children.length - 1].data.name;

        }
        const pick = funny[Math.floor(Math.random() * funny.length)];
        const embed = new Discord.MessageEmbed()
            .setTitle("Here's funny nsfw you weirdo")
            .setColor(0x00A2E8)
            .setImage(pick)
            .setFooter("a symphony of fucks");
        used.push(pick)
        return embed

    }
}
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

    },
    getRandomAlt: async function () {
        let alt = [];
        let base36 = ""
        for (let index = 0; index < 10; index++) {
            const data = await fetch("https://www.reddit.com/user/jeo96x/m/alt/new/.json?limit=50&after=" + base36)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    if (!used.includes(link)) { // no duplications
                        alt.push(link)
                    }
                }
            }
            base36 = children[children.length - 1].data.name;

        }
        const pick = alt[Math.floor(Math.random() * alt.length)];
        const embed = new Discord.MessageEmbed()
            .setTitle("oh look an alt girl that you have likely fallen for")
            .setColor(0x00A2E8)
            .setImage(pick)
            .setFooter("a symphony of fucks");
        used.push(pick)
        return embed

    },
    getRandomOf: async function () {
        let of = [];
        let base36 = ""
        for (let index = 0; index < 10; index++) {
            const data = await fetch("https://www.reddit.com/user/jeo96x/m/of/new/.json?limit=50&after=" + base36)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    if (!used.includes(link)) { // no duplications
                        of.push(link)
                    }
                }
            }
            base36 = children[children.length - 1].data.name;

        }
        const pick = of[Math.floor(Math.random() * of.length)];
        const embed = new Discord.MessageEmbed()
            .setTitle("You are not the only fan")
            .setColor(0x00A2E8)
            .setImage(pick)
            .setFooter("a symphony of fucks");
        used.push(pick)
        return embed

    },
    getRandomKink: async function () {
        let kink = [];
        let base36 = ""
        for (let index = 0; index < 10; index++) {
            const data = await fetch("https://www.reddit.com/user/jeo96x/m/kinks/new/.json?limit=50&after=" + base36)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    if (!used.includes(link)) { // no duplications
                        kink.push(link)
                    }
                }
            }
            base36 = children[children.length - 1].data.name;

        }
        const pick = kink[Math.floor(Math.random() * kink.length)];
        const embed = new Discord.MessageEmbed()
            .setTitle("be careful in what you wish for...")
            .setColor(0x00A2E8)
            .setImage(pick)
            .setFooter("a symphony of fucks");
        used.push(pick)
        return embed

    },
    getRandomGIf: async function () {
        let gif = [];
        let base36 = ""
        for (let index = 0; index < 10; index++) {
            const data = await fetch("https://www.reddit.com/user/jeo96x/m/gif/new/.json?limit=50&after=" + base36)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    if (!used.includes(link)) { // no duplications
                        gif.push(link)
                    }
                }
            }
            base36 = children[children.length - 1].data.name;

        }
        const pick = gif[Math.floor(Math.random() * gif.length)];
        const embed = new Discord.MessageEmbed()
            .setTitle("Here is a random GIF")
            .setColor(0x00A2E8)
            .setImage(pick)
            .setFooter("a symphony of fucks");
        used.push(pick)
        return embed
}
}
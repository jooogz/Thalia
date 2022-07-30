fetch = require('node-fetch')
const Discord = require('discord.js');
const redSQ = ":red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square::red_square:"
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
                const author = children[i].data.author;
                const sub = children[i].data.subreddit_name_prefixed;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    if (!used.includes([link, author, sub])) {
                       porn.push([link, author, sub])
                         }
                }
            }
            base36 = children[children.length - 1].data.name;

        }
        const pick = porn[Math.floor(Math.random() * porn.length)];
        var subred = 'https://reddit.com/u/' + pick[1]
        const embed = new Discord.MessageEmbed()
            .setTitle(pick[2])
            .setColor(0x00A2E8)
            .setImage(pick[0])
            .setURL('https://reddit.com/'+pick[2])
            .addField(redSQ, subred)
            .addField(redSQ, "if nothing loads click open the photo!")
            .setFooter("Thalia");
        used.push(pick)
        return embed
    },
    getRandomPublic: async function () {
        let public = [];
        let base36 = ""
        for (let index = 0; index < 3; index++) {
            const data = await fetch("https://old.reddit.com/user/jeo96x/m/public/new/.json?limit=100&after=" + base36)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                const author = children[i].data.author;
                const sub = children[i].data.subreddit_name_prefixed;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    if (!used.includes([link, author, sub])) {
                        public.push([link, author, sub])
                         }
                }
            }
            base36 = children[children.length - 1].data.name;

        }
        const pick = public[Math.floor(Math.random() * public.length)]
        var subred = 'https://reddit.com/u/' + pick[1]
        const embed = new Discord.MessageEmbed()
            .setTitle(pick[2])
            .setColor(0x00A2E8)
            .setImage(pick[0])
            .setURL('https://reddit.com/'+pick[2])
            .addField(redSQ, subred)
            .addField(redSQ, "if nothing loads click open the photo!")
            .setFooter("Thalia");
            
        used.push(pick)
        return embed
    },
    getRandomFunny: async function () {
        let public = [];
        let base36 = ""
        for (let index = 0; index < 3; index++) {
            const data = await fetch("https://old.reddit.com/user/jeo96x/m/funnyNSFW/new/.json?limit=100&after=" + base36)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                const author = children[i].data.author;
                const sub = children[i].data.subreddit_name_prefixed;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    if (!used.includes([link, author, sub])) {
                        public.push([link, author, sub])
                         }
                }
            }
            base36 = children[children.length - 1].data.name;

        }
        const pick = public[Math.floor(Math.random() * public.length)]
        var subred = 'https://reddit.com/u/' + pick[1]
        const embed = new Discord.MessageEmbed()
            .setTitle(pick[2])
            .setColor(0x00A2E8)
            .setImage(pick[0])
            .setURL('https://reddit.com/'+pick[2])
            .addField(redSQ, subred)
            .addField(redSQ, "if nothing loads click open the photo!")
            .setFooter("Thalia");
            
        used.push(pick)
        return embed
    },
    getRandomAlt: async function () {
        let alt = [];
        let base36 = ""
        for (let index = 0; index < 5; index++) {
            const data = await fetch("https://www.reddit.com/user/jeo96x/m/alt/new/.json?limit=50&after=" + base36)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                const author = children[i].data.author;
                const sub = children[i].data.subreddit_name_prefixed;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    if (!used.includes([link, author, sub])) {
                        alt.push([link, author, sub])
                         }
                }
            }
            base36 = children[children.length - 1].data.name;

        }
        const pick = alt[Math.floor(Math.random() * alt.length)];
        var subred = 'https://reddit.com/u/' + pick[1]
        const embed = new Discord.MessageEmbed()
            .setTitle(pick[2])
            .setColor(0x00A2E8)
            .setImage(pick[0])
            .setURL('https://reddit.com/'+pick[2])
            .addField(redSQ, subred)
            .addField(redSQ, "if nothing loads click open the photo!")
            .setFooter("Thalia");
        used.push(pick)
        return embed

    },
    getRandomOf: async function () {
        let of = [];
        let base36 = ""
        for (let index = 0; index < 5; index++) {
            const data = await fetch("https://www.reddit.com/user/jeo96x/m/of/new/.json?limit=50&after=" + base36)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                const author = children[i].data.author;
                const sub = children[i].data.subreddit_name_prefixed;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    if (!used.includes([link, author, sub])) {
                        of.push([link, author, sub])
                         }
                }
            }
            base36 = children[children.length - 1].data.name;

        }
        const pick = of[Math.floor(Math.random() * of.length)];
        var subred = 'https://reddit.com/u/' + pick[1]
        const embed = new Discord.MessageEmbed()
            .setTitle(pick[2])
            .setColor(0x00A2E8)
            .setImage(pick[0])
            .setURL('https://reddit.com/'+pick[2])
            .addField(redSQ, subred)
            .addField(redSQ, "if nothing loads click open the photo!")
            .setFooter("Thalia");
        used.push(pick)
        return embed

    },
    getRandomKink: async function () {
        let of = [];
        let base36 = ""
        for (let index = 0; index < 5; index++) {
            const data = await fetch("https://www.reddit.com/user/jeo96x/m/kinks/top/.json?limit=50&after=" + base36)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                const author = children[i].data.author;
                const sub = children[i].data.subreddit_name_prefixed;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    if (!used.includes([link, author, sub])) {
                        of.push([link, author, sub])
                         }
                }
            }
            base36 = children[children.length - 1].data.name;

        }
        const pick = of[Math.floor(Math.random() * of.length)];
        var subred = 'https://reddit.com/u/' + pick[1]
        const embed = new Discord.MessageEmbed()
            .setTitle(pick[2])
            .setColor(0x00A2E8)
            .setImage(pick[0])
            .setURL('https://reddit.com/'+pick[2])
            .addField(redSQ, subred)
            .addField(redSQ, "if nothing loads click open the photo!")
            .setFooter("Thalia");
        used.push(pick)
        return embed

    },
    getRandomGif: async function () {
        let gif = [];
        let base36 = ""
        for (let index = 0; index < 5; index++) {
            const data = await fetch("https://www.reddit.com/user/jeo96x/m/gif/new/.json?limit=50&after=" + base36)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                const author = children[i].data.author;
                const sub = children[i].data.subreddit_name_prefixed;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    if (!used.includes([link, author, sub])) {
                        gif.push([link, author, sub])
                         }
                }
            }
            base36 = children[children.length - 1].data.name;

        }
        const pick = gif[Math.floor(Math.random() * gif.length)];
        var subred = 'https://reddit.com/u/' + pick[1]
        const embed = new Discord.MessageEmbed()
            .setTitle(pick[2])
            .setColor(0x00A2E8)
            .setImage(pick[0])
            .setURL('https://reddit.com/'+pick[2])
            .addField(redSQ, subred)
            .addField(redSQ, "if nothing loads click open the photo!")
            .setFooter("Thalia");
        used.push(pick)
        return embed
    }
}

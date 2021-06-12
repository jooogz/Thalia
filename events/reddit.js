const { UserFlags } = require('discord.js');

fetch = require('node-fetch')
module.exports = {
    redditSearch: async function (param) {
        let find = [];
        for (let index = 0; index < 5; index++) {
            const url = 'https://www.reddit.com/r/' + param + '/top/.json?t=week?limit=100'
            const data = await fetch(url)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = [children[i].data.url_overridden_by_dest, children[i].data.over_18];
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    find.push(link)
                }
            }
            const pick = find[Math.floor(Math.random() * find.length)];
            if (pick) {
                return pick
            }
            return ('Nice try nerd, that isnt a subreddit' + ' ' + 'https://media1.tenor.com/images/98e1765a1c505f3a2c50ad06f308289e/tenor.gif')
        }

    },

    randReddit: async function () {
        let rand = []
        base36 = ''
        for (let index = 0; index < 5; index++) {
            const url = await fetch('https://www.reddit.com/r/random/top/.json?t=month?limit=100&after=' + base36);
            const res = await url.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    rand.push(link)
                }
            }
            base36 = children[children.length - 1].data.name;

            const pick = rand[Math.floor(Math.random() * rand.length)];
            return pick

        }
    }

    ,
    nsfwReddit: async function () {
        let rand = []
        base36 = ''
        for (let index = 0; index < 5; index++) {
            const url = await fetch('https://www.reddit.com/r/randnfsw/top/.json?t=month?limit=100&after=' + base36);
            const res = await url.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    rand.push(link)
                }
            }
            base36 = children[children.length - 1].data.name;

            const pick = rand[Math.floor(Math.random() * rand.length)];
            return pick

        }
    }

}

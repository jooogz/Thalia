fetch = require('node-fetch')
module.exports = {
    getRandomMeme: async function () {
        let meme = [];
        let base36 = ""
        for (let index = 0; index < 5; index++) {
            const data = await fetch("https://www.reddit.com/user/loimprevisto/m/memes/top/.json?t=month?limit=100&after=" + base36)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    meme.push(link)
                }
            }
            base36 = children[children.length - 1].data.name;
        }
        const pick = meme[Math.floor(Math.random() * meme.length)];
        return pick
    },
    getRandomUnexpected: async function () {
        let unexpected = [];
        let base36 = ""
        for (let index = 0; index < 5; index++) {
            const data = await fetch("https://www.reddit.com/r/unexpected/top/.json?t=month?limit=100&after=" + base36)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    unexpected.push(link)
                }
            }
            base36 = children[children.length - 1].data.name;
        }
        const pick = unexpected[Math.floor(Math.random() * unexpected.length)];
        return pick
    }
}
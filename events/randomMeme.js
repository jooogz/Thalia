fetch = require('node-fetch')
const used = []
module.exports = {
    getRandomMeme: async function () {
        let meme = [];
        let base36 = ""
        for (let index = 0; index < 5; index++) {
            const data = await fetch("https://www.reddit.com/user/loimprevisto/m/memes/.json?limit=100&after=" + base36)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    if (!used.includes(link)) { // no duplications
                        meme.push(link)
                    }
                }
            }
            base36 = children[99].data.name;

        }
        const pick = meme[Math.floor(Math.random() * meme.length)];
        used.push(pick)
        return pick

    }
}
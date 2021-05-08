fetch = require('node-fetch')
module.exports = {
    getRandomMeme: async function () {
        let memes = [];
        const data = await fetch("https://www.reddit.com/r/dankmemes/new.json?limit=10000")
        const res = await data.json()
        const children = res.data.children;
        for (let i = 0; i < children.length; i++) {
            const link = children[i].data.url_overridden_by_dest;
            if (link) {
                memes.push(link)
            }
        }

        return memes[Math.floor(Math.random() * memes.length)];
    }
}
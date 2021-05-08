fetch = require('node-fetch')
module.exports = {
    getRandomAww: async function () {
        let aww = [];
        const data = await fetch("https://www.reddit.com/r/aww/new.json?limit=10000")
        const res = await data.json()
        const children = res.data.children;
        for (let i = 0; i < children.length; i++) {
            const link = children[i].data.url_overridden_by_dest;
            if (link) {
                aww.push(link)
            }
        }

        return aww[Math.floor(Math.random() * aww.length)];
    }
}
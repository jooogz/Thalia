const fetch = require('node-fetch')
module.exports = {
    getRandomPorn: async function () {
        let porn = [];
        const data = await fetch("https://www.reddit.com/r/GonewildGBUK/new.json?limit=100")
        const res = await data.json()
        const children = res.data.children;
        for (let i = 0; i < children.length; i++) {
            const link = children[i].data.url_overridden_by_dest;
            if (link) {
                porn.push(link)
            }
        }
        const data1 = await fetch("https://www.reddit.com/r/nsfw/new.json?limit=100")
        const res1 = await data1.json()
        const children1 = res1.data.children;
        for (let i = 0; i < children1.length; i++) {
            const link = children1[i].data.url_overridden_by_dest;
            if (link) {
                porn.push(link)
            }
        }
        console.log(porn.length)
        return (porn[Math.floor(Math.random() * porn.length)]);
    }
}
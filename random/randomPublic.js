fetch = require('node-fetch')
const used = []
module.exports = {
    getRandomPublic: async function () {
        let public = [];
        const data = await fetch("https://old.reddit.com/user/Wasted2muchTime/m/public/top/.json?sort=top&t=all.")
        const res = await data.json()
        const children = res.data.children;
        for (let i = 0; i < children.length; i++) {
            const link = children[i].data.url_overridden_by_dest;
            if (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4')) {
                if (!used.includes(link)) { // no duplications
                    public.push(link)
                }
            }
        }
        const pick = public[Math.floor(Math.random() * public.length)];
        used.push(pick)
        return pick
        
    }
}

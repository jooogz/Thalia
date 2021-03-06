fetch = require('node-fetch')
module.exports = {
    getRandomAnimal: async function () {
        let animal = [];
        let base36 = ""
        for (let index = 0; index < 5; index++) {
            const data = await fetch("https://www.reddit.com/user/prometheus199/m/aminals/top.json?limit=100&after=" + base36)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                    animal.push(link)
                }
            }
            base36 = children[children.length - 1].data.name;
        }
        const pick = animal[Math.floor(Math.random() * animal.length)];
        return pick

    },
    getRandomDoggo: async function () {
        let doggo = [];
        let base36 = ""
        for (let index = 0; index < 5; index++) {
            const data = await fetch("https://old.reddit.com/user/jeo96x/m/doggo/new/.json?limit=100&after=" + base36)
            const res = await data.json()
            const children = res.data.children;
            for (let i = 0; i < children.length; i++) {
                const link = children[i].data.url_overridden_by_dest;
                if (link && (link.endsWith('.gif') || link.endsWith('.gifv') || link.endsWith('.jpg') || link.endsWith('.jpeg') || link.endsWith('.png') || link.endsWith('.mp4'))) {
                        doggo.push(link)
                    }
                }
            base36 = children[99].data.name;

        }
        const pick = doggo[Math.floor(Math.random() * doggo.length)];
        return pick

    }
}

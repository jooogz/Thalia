fetch = require('node-fetch')
module.exports = {
    getRandomFood: async function () {
        let food = [];
        const data = await fetch("https://www.reddit.com/r/FoodPorn/.json?limit=1")
        const res = await data.json()
        const children = res.data.children;
        for (let i = 0; i < children.length; i++) {
            const link = children[i].data.url_overridden_by_dest;
            if (link) {
                food.push(link)
            }
        }
        return (food[Math.floor(Math.random() * food.length)]);
    }
}

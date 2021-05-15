fetch = require('node-fetch');
module.exports = {
    urbanDictionary: async function (param) {
        const url = 'https://api.urbandictionary.com/v0/define?term=' + param
        const data = await fetch(url)
        const res = await data.json()
        console.log(url)
        const urban = res.list.definition
        console.log(urban)
        return urban
    }
}


fetch = require('node-fetch');
module.exports = {
    urbanDictionary: async function (param) {
        const url = 'https://api.urbandictionary.com/v0/define?term=' + param
        const data = await fetch(url)
        const res = await data.json()
        console.log(url)
        if (res.list[0].definition === true) {
            return res.list[0].definition
        } else return 'sorry theres nothing listed for that in the Urban Dictionary'

    }
}


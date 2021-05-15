const { MessageFlags } = require('discord.js');

fetch = require('node-fetch');
module.exports = {
    urbanDictionary: async function (param) {
        const url = 'https://api.urbandictionary.com/v0/define?term=' + param
        const data = await fetch(url)
        const res = await data.json()
        if (res.list[0] && res.list[0].definition) {
            let a = res.list[0].definition
            let b = a.replaceAll('[', '');
            let c = b.replaceAll(']', '');
            let d = c.replaceAll('\r', ' ');
            let e = d.replaceAll('\n\n', ' ')
            let message = e.replaceAll('\n', '')
            return message
        }
        return ('sorry that has not yet been defined on Urban Dictionary yet!' + ' ' + 'https://media1.tenor.com/images/98e1765a1c505f3a2c50ad06f308289e/tenor.gif')


    }
}


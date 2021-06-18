fetch = require('node-fetch')
const joke = require('./json/joke.json')
const key = require('./json/key.json')
const eightBall = require('./json/eightBall.json')
module.exports = {
    getRandomAdvice: async function () {
        const data = await fetch("http://api.adviceslip.com/advice")
        const res = await data.json()
        const advice = res.slip.advice
        return advice
    },
    magicEightBall: function () {
        return eightBall[Math.floor(Math.random() * eightBall.length)];
    },
    djKhaled: function () {
        return key[Math.floor(Math.random() * key.length)];
        
    },
    punJoke: async function () {
        const data = await fetch('https://v2.jokeapi.dev/joke/Pun')
        const res = await data.json()
        const joke = res.setup + '\n' + res.delivery
        return joke
    },
    darkJoke: async function () {
        const data = await fetch('https://v2.jokeapi.dev/joke/Dark')
        const res = await data.json()
        const joke = res.setup + '\n' + res.delivery
        return joke
    },
    kanye: async function () {
        last = ['Best', 'Chest', 'Quest', 'Guest', 'Breast', 'Invest', 'Unrest', 'Dest', 'Fest', 'Gest', 'Hest', 'Jest', 'Kest', 'Lest', 'Nest', 'Pest', 'Rest', 'Test', 'Vest', 'West', 'Yest', 'Zest']
        const data = await fetch('https://api.kanye.rest/')
        const res = await data.json()
        const quote = res["quote"]
        const role = 'Kanye ' + last[Math.floor(Math.random() * last.length)];

        return quote + ' \n  -' + role


    },
    yoMomma: async function () {
        return joke[Math.floor(Math.random() * joke.length)]
    },

    quotes : async function() { 
        const res = await fetch('https://api.fisenko.net/quotes')
        const data = await res.json()
        const quote = data["text"]
        const author = data["author"]

        return quote + " \n - " + author
    }
}
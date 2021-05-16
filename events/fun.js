fetch = require('node-fetch')
module.exports = {
    getRandomAdvice: async function () {
        const data = await fetch("http://api.adviceslip.com/advice")
        const res = await data.json()
        const advice = res.slip.advice
        console.log(advice)
        return advice
    }
,
    magicEightBall: function () {
        const eightBall = ["It is Certain",
            "It is decidedly so",
            "Without a doubt",
            "Yes definitely",
            "You may rely on it",
            "As I see it, yes",
            "Most likely",
            "Outlook good",
            "Yes",
            "Signs point to yes",
            "Reply hazy, try again",
            "Ask again later",
            "Better not tell you now",
            "Cannot predict now",
            "Concentrate and ask again",
            "Don't count on it",
            "My reply is no",
            "My sources say no",
            "Outlook not so good",
            "Very doubtful",
        ];
        const pick = eightBall[Math.floor(Math.random() * eightBall.length)];
        return pick
    }
}
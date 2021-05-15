fetch = require('node-fetch')
module.exports = { 
    getRandomAdvice : async function() {
        const data = await fetch("http://api.adviceslip.com/advice")
        const res = await data.json()
        const advice = res.slip.advice
        console.log(advice)
        return advice
    } 

}
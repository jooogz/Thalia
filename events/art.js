colourlovers = require('colourlovers')

module.exports = {
    patterns : async function() {
    colourlovers.get('/patterns/random', function(err, data){
        if(err) throw err;
        console.log(data[0].title, data[0].imageUrl)
    })
}
}
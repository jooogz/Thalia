fetch = require('node-fetch')
module.exports = {
    getRandomMeme: async function() {
      let memes = [];
    await fetch("https://www.reddit.com/r/dankmemes/new.json?limit=100")
        .then(data => data.json())
        .then(res => {            
            const children = res.data.children;
            for(let i= 0; i < children.length; i++ ){
                const link = children[i].data.url_overridden_by_dest;
                if(link) {
                    memes.push(link)                    
                }
            }
        });
        return memes[Math.floor(Math.random() * memes.length)]; 
    }
}
const AsciiTable = require('ascii-table')

module.exports = {
    nsfwFunction: function () {
        const nsfwTable = new AsciiTable('NSFW Commands')
        nsfwTable
            .setHeading("Command", "Function")
            .addRow("porn", "random porn")
            .addRow("public", "exhibitionist kink picture")
            .addRow("of", "someone who you are the only fan of")
            .addRow("alt", "typically crazy, usually hot")
            .addRow("kink", "A mixture of a few.. beware")
            .addRow("rNSFW", "Let reddit find you something NSFW (can litterally be anything")
            .addRow("giffed", "a nfsw Gif!")
            .addRow("dark joke", "test the limits of what you find funny")
            .addRow("help", "find out what the SFW commands are")

        return nsfwTable.toString()
    },
    sfwFunction: function () {
        const sfwTable = new AsciiTable('Commands')
        sfwTable
            .setHeading("Command", "Function")
            .addRow("aww", "cute animal")
            .addRow("doggo", "smol pupper")
            .addRow("food", "picture of food")
            .addRow("unexpected", "Get something you didn't bargain for")
            .addRow("dank", "random meme")
            .addRow("pun", "everyone loves a pun")
            .addRow("random", "let Reddit pick something for you at random!")
            .addRow("urban", "tell you the definition of the word that you search")
            .addRow('reddit', "enter a subreddit that you want to get a random photo from!s")
            .addRow("8ball", "let me answer your questions!")
            .addRow("key", "inspiration from the main man himself, don't be afraid for another one.  Major key")
            .addRow("Nhelp", "find out what NFSW commands there are")
        return sfwTable.toString()
    },
}
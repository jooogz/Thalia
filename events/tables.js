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
            .addRow("kink", "A mixture of a few.. beware");

        return nsfwTable
    },
    sfwFunction: function () {
        const sfwTable = new AsciiTable('Commands')
        sfwTable
            .setHeading("Command", "Function")
            .addRow("aww", "cute animal")
            .addRow("doggo", "smol pupper")
            .addRow("food", "picture of food")
            .addRow("dank", "random meme")
            .addRow("urban", "tell you the definition of the word that you search")
            .addRow("8ball", "let me answer your questions!")
            .addRow("key", "inspiration from the main man himself, don't be afraid for another one.  Major key")
        return sfwTable
    },
}
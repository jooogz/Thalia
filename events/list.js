const AsciiTable = require('ascii-table')
module.exports = {
    sfwCommand: async function () {
        var sfwTable = new AsciiTable('Commands')
        sfwTable
            .setHeading("Command", "Function")
            .addRow("aww", "will send a picture of a cute animal")
            .addRow("doggo", "Will send a smol pupper")
            .addRow("food", "Will send a random picture of food")
            .addRow("dank", "Will send a random meme")

        return sfwTable.toString
    }
};

module.exports = {
    nfswCommand: async function () {
        var nsfwTable = new AsciiTable('NSFW Commands')
        nsfwTable
            .setHeading("Command", "Function")
            .addRow("porn", "Will send some random porn")
            .addRow("public", "Will send some exhibitionist kink picture")
            .addRow("funny nsfw", "will send some funny porn")
            .addRow("of", "Will send a picture of someone who you are the only fan of")
        return nsfwTable.toString
    }

}
const Discord = require('discord.js');
module.exports = {

    drone: function () {
        const pick = "https://pasteboard.co/K52kSVB.gif"

        const embed = new Discord.MessageEmbed()
            .setTitle('Easter Egg #1, congrats.')
            .setColor(0x00A2E8)
            .attachFiles(pick)
            .setFooter("Thalia");

        return embed
    }
}

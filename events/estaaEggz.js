const Discord = require('discord.js');
module.exports = {

    drone: function () {
        const pick = "https://thumbs2.redgifs.com/InsignificantFeistyIberianemeraldlizard-mobile.mp4"

        const embed = new Discord.MessageEmbed()
            .setTitle('Easter Egg #1, congrats.')
            .setColor(0x00A2E8)
            .attachFiles(pick)
            .setFooter("a symphony of fucks");

        return embed
    }
}

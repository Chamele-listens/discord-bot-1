const { Events } = require('discord.js');
//const { execute } = require('./button_Interaction');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction){
        if (!interaction.isSelectMenu()) return;
        console.log(interaction);
        await interaction.reply('We got nothing yet! Please come back later! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧')
    }
}
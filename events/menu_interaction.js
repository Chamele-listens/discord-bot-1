const { Events } = require('discord.js');
//const { execute } = require('./button_Interaction');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction){
        if (!interaction.isSelectMenu()) return;
        console.log(interaction);
        const selected = interaction.values[0];
        if (selected === 'first_option'){
            await interaction.update({ content: 'This is u rn Q_Q', components: [] })
        }else if (selected === 'second_option'){
            await interaction.update({ content: 'That is you rn', components: [] })
        }
        //await interaction.reply('We got nothing yet! Please come back later! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧')
    }
}
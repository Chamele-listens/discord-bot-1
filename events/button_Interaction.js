const { Events } = require('discord.js');

module.exports ={
    name: Events.InteractionCreate,
    async execute(interaction){
        if (!interaction.isButton()) return;
	    console.log(interaction);
        await interaction.reply('it worked')
        await interaction.followUp('Also, https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    }
}
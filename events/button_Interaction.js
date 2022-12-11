const { Events } = require('discord.js');
//const button = require('../commands/button');

module.exports ={
    name: Events.InteractionCreate,
    async execute(interaction){
        if (!interaction.isButton()) return;
	    console.log(interaction);
        const button_name = interaction.customId 

        if (button_name === 'primary' ){
            await interaction.reply('It worked!')
        }else if(button_name === 'pls_no'){
            await interaction.reply('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        }else{
            console.log('something went wrong')
        }

        //await interaction.reply('it worked')
        //await interaction.followUp('Also, https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    }
}
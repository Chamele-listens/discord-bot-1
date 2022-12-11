const { SlashCommandBuilder ,ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, EmbedBuilder, ButtonComponent } = require('discord.js');
//const { execute } = require('./translate');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('botton testing'),
    
    const :row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('primary')
                .setLabel('click me!')
                .setStyle(ButtonStyle.Primary),
        ),
    const :row2 = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('pls_no')
            .setLabel('Dont click on dis')
            .setStyle(ButtonStyle.Danger),
    ),

    const :embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('You asked for it!')
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .setDescription('perfectly normal button'),

    async execute(interaction){       
        await interaction.reply({ content: 'I think you should,', embeds: [embed], components: [row, row2] });
        
    }
};
const { SlashCommandBuilder, ActionRowBuilder, Events, SelectMenuBuilder } = require('discord.js');
const { execute } = require('./info');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('pick something pls'),
    const :row_menu = new ActionRowBuilder()
    .addComponents(
        new SelectMenuBuilder()
            .setCustomId('select')
            .setPlaceholder('pls pick something')
            .addOptions(
                {
                    label: 'this',
                    description: 'This is u rn',
                    value: 'first_option',
                },
                {
                    label: 'that',
                    description: 'That is u right now',
                    value: 'second_option',
                },
            ),
    ),

    async execute(interaction){
        await interaction.reply({content:'pls check it out', components:[row_menu]})
    }
}
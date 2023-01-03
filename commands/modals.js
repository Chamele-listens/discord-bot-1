const {SlashCommandBuilder,ModalBuilder,ActionRowBuilder,TextInputBuilder, TextInputStyle} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('modals')
        .setDescription('answer a form'),

    const :modal = new ModalBuilder()
        .setCustomId('myModal')
        .setTitle('pls answer'),
    
    const :foodInput = new TextInputBuilder()
        .setCustomId('foodInput')
        .setLabel('type your order pls')
        .setStyle(TextInputStyle.Short),
    
    const :howToInput = new TextInputBuilder()
        .setCustomId('howToInput')
        .setLabel('pls tell us how u want us to prepare ur dish')
        .setStyle(TextInputStyle.Paragraph),
    
    const :firstActionRow = new ActionRowBuilder().addComponents(foodInput),
    const :secondActionRow = new ActionRowBuilder().addComponents(howToInput),

    async execute(interaction){
        modal.addComponents(firstActionRow, secondActionRow)
        await interaction.showModal(modal)
    }


}
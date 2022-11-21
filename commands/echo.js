const { SlashCommandBuilder, InteractionCollector } = require("discord.js");
const { execute } = require("./ping");

module.exports = {
    data: new SlashCommandBuilder()
	.setName('echo')
	.setDescription('Replies with your input!')
	.addStringOption(option =>
		option.setName('input')
			.setDescription('The input to echo back')),
    async execute(interaction){
        await interaction.reply('nothing yet');

    },

};
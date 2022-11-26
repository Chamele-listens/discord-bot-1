const { SlashCommandBuilder, InteractionCollector } = require("discord.js");
const { execute } = require("./ping");

module.exports = {
    data: new SlashCommandBuilder()
	.setName('echo')
	.setDescription('Replies with your input!')

	.addStringOption(option =>
		option.setName('input')
			.setDescription('The input to echo back'))
			

	.addChannelOption(option =>
		option.setName('channel')
			.setDescription('The channel to echo into'))

	.addBooleanOption(option =>
		option.setName('ephemeral')
			.setDescription('Whether or not the echo should be ephemeral')),

    async execute(interaction){
        const input = interaction.options.getString('input')
		await interaction.reply(`The user replied "${input}"`);

    },

};
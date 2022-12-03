const { SlashCommandBuilder} = require("discord.js");
//const { execute } = require("./ping");

module.exports = {
    data: new SlashCommandBuilder()
	.setName('echo')
	.setDescription('Replies with your input!')

	.addStringOption(option =>
		option.setName('input')
			.setDescription('The input to echo back')
			.setRequired(true))
			

	.addChannelOption(option =>
		option.setName('channel')
			.setDescription('The channel to echo into'))

	.addBooleanOption(option =>
		option.setName('ephemeral')
			.setDescription('Whether or not the echo should be ephemeral')),

    async execute(interaction){
        const input = interaction.options.getString('input')
		const ephemeral = interaction.options.getBoolean('ephemeral')
		const channel = interaction.options.getChannel('channel')
		await interaction.reply({content:`The user replied "${input}"`,ephemeral: ephemeral})
		//await client.channels.get(channel).send('Hello')
		channel.send(input)
		//.then(message => console.log(`Sent message: ${message.content}`))
		//.catch(console.error);

    },

};
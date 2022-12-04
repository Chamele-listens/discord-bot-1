const {SlashCommandBuilder} = require("discord.js");
const {translate} = require("@vitalets/google-translate-api");
//const {createHttpProxyAgent} = require("https-proxy-agent");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('translate')
    .setDescription('translate stuff')

    .addStringOption(option =>
        option.setName('translate')
            .setDescription('enter your setences here')
            .setRequired(true))
    
    .addStringOption(option =>
        option.setName('output_language')
            .setDescription('enter your output language here. (ie. en, ja, km, etc)')
            .setMaxLength(2)),


    async execute(interaction){
        const word_input = interaction.options.getString('translate')
        //const input_language = interaction.options.getString('input_language')
        const output_language = interaction.options.getString('output_language')



        const { text } = await translate(`${word_input}`, { to: `${output_language}` });
        
        await interaction.reply(`${text}\n The original setences is "${word_input}"`)

                
        await interaction.followUp({ content: 'For more language option check: https://cloud.google.com/translate/docs/languages', ephemeral: true })
        //await interaction.reply('translator coming soon') 

    }
}

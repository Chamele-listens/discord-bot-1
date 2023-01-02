const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const { request } = require('undici')
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);


module.exports = {
    data: new SlashCommandBuilder()
        .setName('dictionary')
        .setDescription('sends definitions of a word from urban dictionary')

        .addStringOption(option =>
            option.setName('term')
                .setDescription('enter your word here')
                .setRequired(true)
        ),

    async execute(interaction) {
        const term = interaction.options.getString('term')
        const query = new URLSearchParams({ term })
        const dictResult = await request(`https://api.urbandictionary.com/v0/define?${query}`)
        const { list } = await dictResult.body.json()
        console.log(list)

        //await interaction.reply(`**${term}**: ${list[0].definition}`)
        if (!list.length) {
			return interaction.editReply(`No results found for **${term}**.`);
		}

        const [answer] = list

        const embed = new EmbedBuilder()
            .setColor(0xEFFF00)
            .setTitle(answer.word)
            .setURL(answer.permalink)
            .addFields({ name: 'Definition', value: trim(answer.definition, 1024) },
            { name: 'Example', value: trim(answer.example, 1024) },
            { name: 'Rating', value: `${answer.thumbs_up} thumbs up.\n ${answer.thumbs_down} thumbs down.` })

        await interaction.reply({embeds:[embed]})

    }
}

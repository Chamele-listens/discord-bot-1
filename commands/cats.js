const {SlashCommandBuilder} = require('discord.js')
const {request} = require('undici')
module.exports={
    data: new SlashCommandBuilder()
        .setName('cats')
        .setDescription('sends cat pictures'),
    
    async execute(interaction){
        const catResult = await request('https://aws.random.cat/meow')
        console.log(catResult)
        const { file } = await catResult.body.json()
        console.log(file)
        interaction.reply(file)

    }

}
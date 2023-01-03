const {Events} = require('discord.js')

module.exports={
    name: Events.InteractionCreate,
    async execute(interaction){
        if(!interaction.isModalSubmit()) return
        console.log(interaction)
        if (interaction.customId === 'myModal'){
            await interaction.reply({ content: 'Your submission was received successfully!' })
            const foodOrder = interaction.fields.getTextInputValue('foodInput')
            const howTo = interaction.fields.getTextInputValue('howToInput')
            console.log({foodOrder,howTo})
        }
    }
}
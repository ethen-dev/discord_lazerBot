const fs = require('fs');
const commandFiles = fs.readdirSync('./commands')
    .filter(file => file.endsWith('.js'))
    .map(file => file.split('.')[0]);
const commands = {};

commandFiles.forEach((file) => {
    const command = require(`../commands/${file}.js`);
    commands[file] = command;
})

module.exports = (interaction) => {
    try {
        commands[interaction.commandName](interaction);
    } catch(error) {
        interaction.replay({
            content: 'Ha ocurrido un error al ejecutar el comando',
            ephemeral: true
        })
    }
}
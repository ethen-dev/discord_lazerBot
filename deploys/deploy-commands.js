require('dotenv').config()

const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const _token = process.env.TOKEN;
const _guildId = process.env.GUILD_ID;
const _clientId = process.env.CLIENT_ID;

const commands = [new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!')]
    .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(_token);

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(_clientId, _guildId),
            { body: commands },
        );

        console.log('Successfully registered application commands.');
    } catch (error) {
        console.error(error);
    }
})();
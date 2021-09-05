require('dotenv').config()

const commandHandler = require('./services/commandHandler');


// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const _token = process.env.TOKEN;

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    await commandHandler(interaction);
});

// Login to Discord with your client's token
client.login(_token);

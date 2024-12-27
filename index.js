// Charger les variables d'environnement
require('dotenv').config();

// Importer les classes nécessaires de discord.js
const { Client, GatewayIntentBits } = require('discord.js');

// Créer une nouvelle instance du client Discord
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,  // Permissions pour gérer les guildes
        GatewayIntentBits.GuildMessages, // Permissions pour lire les messages des guildes
        GatewayIntentBits.MessageContent // Permissions pour obtenir le contenu des messages
    ]
});

// Quand le bot est prêt
client.once('ready', () => {
    console.log('Le bot lorel lp bot est prêt !');
});

// Quand un message est envoyé
client.on('messageCreate', (message) => {
    if (message.content === '!bonjour') {
        message.channel.send('Salut, je suis lorel lp bot !');
    }
});

// Connecte le bot avec le token provenant du fichier .env
client.login(process.env.DISCORD_TOKEN).catch(console.error);

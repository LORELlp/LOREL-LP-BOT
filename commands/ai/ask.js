const axios = require('axios'); // Pour les requêtes API

async function askAI(client, message, args) {
    if (!args[0]) {
        return client.sendMessage(message.chat, { text: '⚠ Donne-moi une question !' });
    }
    const query = args.join(' ');
    try {
        const response = await axios.get(`https://api.example.com/ask?query=${query}`);
        const reply = response.data.answer;

        await client.sendMessage(message.chat, { text: `🤖 Réponse AI : ${reply}` });
    } catch (error) {
        await client.sendMessage(message.chat, { text: '❌ Erreur lors de la requête AI.' });
    }
}

module.exports = askAI;
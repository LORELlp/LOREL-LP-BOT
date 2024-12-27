const { MessageType } = require('@whiskeysockets/baileys');

// Fonction pour afficher le menu AI
async function aiMenu(client, message) {
    const menu = `
╔═════════════════════╗
║      AI MENU       ║
╠═════════════════════╝
║ ➤ .ask [question]  
║ ➤ .image [prompt]  
║ ➤ .translate [text]  
║ ➤ .define [word]    
╚═════════════════════╝
    `;
    await client.sendMessage(message.chat, { text: menu });
}

module.exports = aiMenu;
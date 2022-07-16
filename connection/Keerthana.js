'use strict'
const { fetchLatestBaileysVersion, default: WASocket, makeWASocket, makeInMemoryStore, BufferJSON, initInMemoryKeyStore, DisconnectReason, AnyMessageContent, delay, useSingleFileAuthState, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, proto, downloadContentFromMessage, MessageType, MessageOptions, Mimetype } = require("@adiwajshing/baileys")
const { Boom } = require('@hapi/boom');
const Pino = require('pino');


const { state, saveState } = useSingleFileAuthState('./Auth/Keerthana.json');

async function connectToWhatsApp() {
   
    const { version, isLatest } = await fetchLatestBaileysVersion();
    const Ammu = WASocket({
        printQRInTerminal: true,
        auth: state,
        logger: Pino({ level: "silent" }),
        version: version,
        browser: ['KEERTHANA', 'Safari','3.0'],
    });
    Ammu.ev.on("creds.update", saveState);
}
module.exports.connectToWhatsApp = connectToWhatsApp;
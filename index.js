const Keerthana = require('./connection/Keerthana');
const Authentication = require('./Auth/index');
const fs = require('fs');

async function KEERTHANA() {
    console.log("Keerthana is connecting to WhatsApp...!");
    console.log("Please wait...");
    if (fs.existsSync('./Auth/index.json')) {
        await Keerthana.connectToWhatsApp()
    } else {
        console.log('Auth not found')
        await Authentication.connect()
    }
    
}
KEERTHANA()
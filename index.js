const Keerthana = require('./connection/Keerthana');
const Authentication = require('./Auth/index');
const fs = require('fs');
if (fs.existsSync('./config.env')) require('dotenv').config({ path: './config.env' });
const { DATABASE } = require('./exports.js')

async function KEERTHANA() {
    await DATABASE.sync()
	console.log('DB syncing')
    console.log("Keerthana is connecting to WhatsApp...!");
    console.log("Please wait...");
    console.log(process.env.Auth)
    async function check(Auth_data) {
        if (fs.existsSync(Auth_data)) {
            await Keerthana.connectToWhatsApp()
        } else {
            console.log('Auth not found')
            await Authentication.connect()
        }
    }
    if (process.env.Auth !== undefined) 
    {
        if(process.env.Auth === 'md')
        { 
            const Auth_data = './Auth/Keerthana-md.json';
            check(Auth_data)
        } else if(process.env.Auth === 'l')
        {
            const Auth_data = './Auth/Keerthana-l.json';
            check(Auth_data)
        } else {
            const Auth_data = './Auth/Keerthana-md.json';
            check(Auth_data)
        }  
    } else {
        const Auth_data = './Auth/Keerthana-md.json';
        check(Auth_data)
    };
};

KEERTHANA()
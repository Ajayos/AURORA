const axios = require('axios');
const fs = require('fs');
if (fs.existsSync('./config.env')) require('dotenv').config({ path: './config.env' });

async function connect() {
    if (process.env.Auth !== undefined) 
    {
        const data = await axios.get('https://keerthana-qr-md.ajay-o-s.repl.co/getdata?qrcode='+process.env.Auth);
        fs.writeFileSync('./Auth/Keerthana.json', JSON.stringify(data.data, null, '\t'));
    } else {
        console.log("ERROR : 106");
        console.log("       No Auth Key found!");
        console.log("       Please add Auth key in .env.Auth")
        process.exitCode = 0;
    }  
}
module.exports.connect = connect;
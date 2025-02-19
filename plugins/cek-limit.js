const axios = require('axios')

let handler = async (m, { Renita, text, reply }) => {
    reply(`Hello Worlds`) 
}

handler.command = ["limit", "cek-limit"];
handler.owner = true

module.exports = handler;
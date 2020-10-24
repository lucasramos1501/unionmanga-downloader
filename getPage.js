const fetch = require('node-fetch');
const fs = require('fs');

async function getSite(url) {
    console.log('✔ Página localizada');

    const response = await fetch(url).then();
    const buffer = await response.buffer();

    console.log('✔ Dados localizados');

    return buffer.toString();
}

module.exports = getSite;
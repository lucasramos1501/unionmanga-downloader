const imgDownload = require('image-downloader');
const fs = require('fs');
const { promisify } = require('util')

const readDir = promisify(fs.readdir)
const unLink = promisify(fs.unlink)

const options = {
    url: '',
    dest: './downloads/'
}

async function imgDownloader(url, destImg) {
    const dest = `./downloads/${destImg}`;

    fs.mkdir(dest, () => {});

    imgDownload.image({ url, dest })
        .then(({ filename }) => {
            console.log('Arquivo baixado: ', filename);
        })
        .catch((err) => console.error(err))
}

module.exports = imgDownloader;
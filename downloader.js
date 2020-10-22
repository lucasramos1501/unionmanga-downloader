const imgDownload = require('image-downloader');

const options = {
    url: '',
    dest: './downloads'
}

function imgDownloader(url) {
    options.url = url;

    imgDownload.image(options)
        .then(({ filename }) => {
            console.log('Saved to', filename) // saved to /path/to/dest/photo.jpg
        })
        .catch((err) => console.error(err))
}

module.exports = imgDownloader;
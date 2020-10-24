#!/usr/bin/env node

const program = require('commander');
const jsdom = require('jsdom');
const { JSDOM } = jsdom

const package = require('./package.json');
const getPage = require('./getPage');
const imgDownloader = require('./downloader');

program.version(package.version);

program
    .command('add <url> <destImg>')
    .description('Adiciona a url')
    .action(async(url, destImg) => {
        const page = await getPage(url);
        const dom = new JSDOM(page);

        const imagesUrl = [];

        selectorAllImg = dom.window.document.querySelectorAll('img');
        selectorAllImg.forEach(image => {
            imagesUrl.push(image.getAttribute('src'));
        });

        imagesUrl.forEach(image => {
            imgDownloader(image, destImg);
        })
    });

program.parse(process.argv);
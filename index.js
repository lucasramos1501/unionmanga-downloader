#!/usr/bin/env node

const program = require('commander');
const package = require('./package.json');
const imgDownloader = require('./downloader')


program
    .command('add <url>')
    .description('Adiciona a url')
    .action(url => {
        imgDownloader(url)
    });

program.parse(process.argv);
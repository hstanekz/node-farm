const fs = require('fs'); 
const http = require('http');
const url = require('url');

// const slugify = require('slugify');

const replaceTemplate = require('./starter/modules/replaceTemplates.js');

const tempOverview = fs.readFileSync(`${__dirname}/starter/templates/overview.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/starter/templates/product.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/starter/templates/template-card.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8'); 
const dataObj = JSON.parse(data);


require('dotenv').config();
var express = require('express');
var router = express.Router();
const cheerio = require('cheerio');
const request = require('request');
const targetUri = process.env.REQUEST_URI;

router.get('/', function(req, res, next) {
  request({
    uri: targetUri
  }, (error, response, body) => {
    this.items = new Array();
    if (error && response.statusCode !== 200) {
      console.log('Request error!');
    }

    let $ = cheerio.load(body);
    let $target = $('div #mp-itn > ul');
    let output = $target.html();
    console.log('calling res.render with scrape results');
    res.render('scrape', { item: output });
  });

});

module.exports = router;

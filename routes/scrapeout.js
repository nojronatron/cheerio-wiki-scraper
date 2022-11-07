var express = require('express');
var router = express.Router();

router.get('/scrape', function(req, res, next) {
  res.send('scraper response');
});

module.exports = router;

/*
 (req, res) => {
  this.request({
    uri: 'https://en.wikipedia.org/wiki/Main_Page'
  }, (err, response, body) => {
    this.items = new Array();
    if (err && response.statusCode !== 200) {
      console.log('Request error!');
    }

    let $ = cheerio.load(body);
    let $body = $('body');
    let $elements = $body.find('.mp-tfa-h2');

    const result = $elements.map((item, index) => {
      return $(item).children('span').text();
    });

    res.render('scrapeout', {})
  })
});
*/
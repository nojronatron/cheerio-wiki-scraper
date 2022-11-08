# Cheerio Web Scraper Experiment

I wanted to learn about scraping websites for purely academic reasons, and recently bumped into [Cheerio](https://cheerio.js.org/), and OSS package that is a fast, jQuery-light implementation for server use.

This fit nicely with my need to work with Express JS for a current and future projects.

## Goals

- [X] Learn a little about Cheerio.
- [X] Review ExpressJS build.
- [X] Practice using Jade files (soon to be Pug?).
- [X] Recall how to use dotenv package and .env file.

## Retrospective Thoughts

- Learning how to use Cheerio required re-learning how to use jQuery and how the HTML DOM is organized.
- Cheerio includes an `.each()` method that uses callbacks to select elements in a '$cheerio' object.
- Websites that include lots of markup within the content are more difficult to scrape than those that don't.

Example of content with complex intermingling of html elements:

```html
<li>An aircraft <i>(pictured)</i> <b><a href="/wiki/Precision_Air_Flight_494" title="Precision Air Flight 494">crashes</a></b> into <a href="/wiki/Lake_Victoria" title="Lake Victoria">Lake Victoria</a> in Tanzania, killing 19 of the 43 people onboard.</li> <li>In <a href="/wiki/Baseball" title="Baseball">baseball</a>, the <a href="/wiki/Houston_Astros" title="Houston Astros">Houston Astros</a> defeat the <a href="/wiki/Philadelphia_Phillies" title="Philadelphia Phillies">Philadelphia Phillies</a> in <b><a href="/wiki/2022_World_Series" title="2022 World Series">the World Series</a></b>.</li> <li>The Ethiopian government and Tigrayan forces sign <b><a href="/wiki/Ethiopia%E2%80%93Tigray_peace_agreement" title="Ethiopia–Tigray peace agreement">a peace treaty</a></b>, agreeing to end the <a href="/wiki/Tigray_War" title="Tigray War">Tigray War</a>.</li> <li>In <b><a href="/wiki/2022_Israeli_legislative_election" title="2022 Israeli legislative election">the Israeli legislative election</a></b>, the <a href="/wiki/National_camp" title="National camp">national camp</a>, led by the <a href="/wiki/Likud" title="Likud">Likud</a> party and <a href="/wiki/Benjamin_Netanyahu" title="Benjamin Netanyahu">Benjamin Netanyahu</a>, wins a majority of seats.</li>
```

## Resources

Refresher on [HTML DOM API at MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API)
Refresher on CSS Selectors at [CSS Diner](https://flukeout.github.io/)
[Request - simplified http client](https://github.com/request/request#readme) (deprecated since Feb 2020)
And just in case I didn't spend enough time slightly off-topic I took a gander at [morgan - http request logger middleware for node.js](https://github.com/expressjs/morgan)

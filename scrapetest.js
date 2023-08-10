import scrape from 'website-scraper';
import PuppeteerPlugin from 'website-scraper-puppeteer';

await scrape({
   // urls: ['https://www.instagram.com/gopro/'],
    urls: ['https://en.wikipedia.org/wiki/Elon_Musk/'],
    directory: './output/save/elon',
    plugins: [ 
      new PuppeteerPlugin({
        launchOptions: { headless: false }, /* optional */
        gotoOptions: { waitUntil: "networkidle0" }, /* optional */
        scrollToBottom: { timeout: 10000, viewportN: 10 }, /* optional */
        blockNavigation: true, /* optional */
      })
    ]
});
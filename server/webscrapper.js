const puppeteer = require("puppeteer");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

async function scrapeNewsWeek() {
    console.log("//=====Running=======//")
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.goto('https://www.newsweek.com/topic/florida-man');
    
    console.log(await page.content());
    await page.screenshot({path: 'screenshot.png'});
    
    await browser.close();
    console.log("//=======ENDING=========//")

}
scrapeNewsWeek()

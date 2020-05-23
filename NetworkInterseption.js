const puppeteer = require('puppeteer');

(async () => {

    const browser= await puppeteer.launch({
        "headless":false,"slowMo": 50
    });

    const page= await browser.newPage();
    

    await page.setViewport(
        {"width":1440,
        "height":10000
    });

    await page.setRequestInterception(true);
    page.on('request',interceptedRequest => {

        if(interceptedRequest.url().endsWith('png') || interceptedRequest.url().endsWith('png'))
        interceptedRequest.abort();
        else
        interceptedRequest.continue();

    });

    await page.goto("https://www.amazon.in");
     
    await browser.close();
})();
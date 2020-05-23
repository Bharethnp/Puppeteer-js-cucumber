const puppeteer = require('puppeteer');

(async () => {

    const browser= await puppeteer.launch({
        "headless":true,"slowMo": 50
    });

    const page= await browser.newPage();
    await page.setViewport(
        {"width":1440,
        "height":10000
    });

    
    await page.goto("https://www.google.com",{"waitUntil":'networkidle2'});
    await page.type("#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input","Favicon");
    await page.keyboard.press('Enter');
    await page.pdf({"path":'pdfFile'});
    await page.waitForNavigation({
        "waitUntil":'domcontentloaded'
    });
    await page.hover("#rso > div:nth-child(1) > div > div.r > a > h3");
    const ele= await page.waitForSelector("#rso > div:nth-child(1) > div > div.r > a > h3");
    await ele.click();
    await page.waitForResponse(response => {
        return response.request().resourceType() === "image"
        });
        
    await browser.close();
})();
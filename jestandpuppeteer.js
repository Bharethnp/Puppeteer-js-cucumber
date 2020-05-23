const puppeteer = require('puppeteer');

describe("EA Testing suite", async () => {

    var browser;
    var page;
    //Browser - Hooks
    beforeAll(async () => {
        browser = await puppeteer.launch({
            "headless": false,
            "slowMo": 50
        });   

        page = await browser.newPage();
    })


    it("Test Login functionality", async () => {
        await page.goto("https://www.google.com");
        await page.type("#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input","Favicon");
        await page.keyboard.press('Enter');
        
        
    })

    afterAll(async () => {
        await browser.close();
    })
    
})
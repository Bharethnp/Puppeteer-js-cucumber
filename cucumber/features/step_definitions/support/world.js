const puppeteer = require('puppeteer');
const {setWorldConstructor} = require('cucumber');


const url = "https://www.google.com";

class MyWorld {

    //Default constructor
    constructor() {
        this.MyWorld = "";
    }

    async  openBrowser() {
        //Browser
        this.browser = await puppeteer.launch({
            "headless": false,
            slowMo:50
        });

        //Page
        this.page = await this.browser.newPage();
        await this.page.goto(url);
        
    }

    async closeBrowser() {
        this.browser.close();
    }
}

setWorldConstructor(MyWorld);


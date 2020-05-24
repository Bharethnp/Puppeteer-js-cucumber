const puppeteer = require("puppeteer");

class BrowserLib {
  async openBrowser() {
    //Browser
    this.browser = await puppeteer.launch({
      headless: false,
      slowMo: 50
    });

    //Page
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    this.browser.close();
  }

  async navigateTo(url) {
    await this.page.goto(url, { waitUntil: "networkidle2" });
  }
}

module.exports = new BrowserLib();

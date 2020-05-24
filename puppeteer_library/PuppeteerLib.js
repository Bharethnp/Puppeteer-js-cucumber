class PuppeteerLib {
  constructor(page) {
    this.page = page;
  }

  async findElement(cssSelector) {
    const ele = await this.page.$(cssSelector);

    if (!ele) {
      throw new Error("Cannot find the css selector " + cssSelector);
    }

    return ele;
  }

  async navigateTo(url) {
    await this.page.goto(url, { waitUntil: "networkidle2" });
  }

  async waitForPageToLoad() {
    const ele = await this.page.waitForNavigation({
      waitUntil: "domcontentloaded"
    });
    return ele;
  }

  async sendKeys(cssSelector, searchString) {
    const ele = await this.page.type(cssSelector, searchString);
    if (!ele) {
      throw new Error("Cannot find the css selector " + cssSelector);
    }
  }

  async mouseHover(cssSelector) {
    await this.page.waitForNavigation({
      waitUntil: "domcontentloaded"
    });
    await this.page.hover(cssSelector);
  }

  async enter() {
    await this.page.keyboard.press("Enter");
  }

  async waitForSelector(cssSelector) {
    await this.page.waitForSelector(cssSelector);
  }
}

export { PuppeteerLib };

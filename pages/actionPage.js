import { PuppeteerLib } from "../puppeteer_library/PuppeteerLib";
const browserLib = require("../puppeteer_library/browser_lib");
class ActionPage {
  constructor() {
    this.pupp = new PuppeteerLib(browserLib.page);
  }

  /*  Puppeteer Library */

  waitForPage = async () => this.pupp.waitForPageToLoad();
  hover = async () =>
    this.pupp.mouseHover("#rso > div:nth-child(1) > div > div.r > a > h3");
  findElement = async () =>
    this.pupp.findElement("#rso > div:nth-child(1) > div > div.r > a > h3");

  accessibility = async () => this.pupp.accessibility();

  /*  Functions */

  async perform() {
    await await this.waitForPage();
    await await this.hover();
    const ele = await await this.findElement();
    await ele.click();
    await await this.accessibility();
  }
}

export { ActionPage };

import { PuppeteerLib } from "../puppeteer_library/PuppeteerLib";
const browserLib = require("../puppeteer_library/browser_lib");

class HomePage {
  constructor() {
    this.pupp = new PuppeteerLib(browserLib.page);
  }

  findElement = async () =>
    this.pupp.findElement(
      "#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input"
    );

  enter = async () => this.pupp.enter();

  async home(searchText) {
    await (await this.findElement()).type(searchText);
    await (await this.enter());
  }

  async details(text1, text2, text3) {
    await (await this.findElement()).type(text1);
    await (await this.findElement()).type(text2);
    await (await this.findElement()).type(text3);
  }
}

export { HomePage };

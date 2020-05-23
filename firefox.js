const puppeteerChrome = require("puppeteer");
const puppeteerFirefox = require("puppeteer-firefox");

(async () => {
  const test = async browser => {
    const page = await browser.newPage();

    await page.setViewport({ width: 1440, height: 10000 });

    await page.goto("https://www.google.com");
    await page.type(
      "#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input",
      "Favicon"
    );
    await page.keyboard.press("Enter");
    const ele = await page.waitForSelector(
      "#rso > div:nth-child(1) > div > div.r > a > h3"
    );
    await ele.click();
    await browser.close();
  }
  const chrome = await puppeteerChrome.launch({
    headless: false,
    slowMo: 50
  });

  await test(chrome);

  const firefox = await puppeteerFirefox.launch({
    headless: false,
    slowMo: 50
  });

  await test(firefox);

})();

const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50
  });
  //Page
  const page = await browser.newPage();

  await page.goto("http://executeautomation.com/demosite/seleniumIDE.html", {
    waitUntil: "networkidle2"
  });

  await page.waitForXPath("//select[@name='multiselect']", { timeout: 5000 });

  const [select] = await page.$x("//select[@name='multiselect']");

  await select.select("India", "Pakistan");

  await browser.close();
})();

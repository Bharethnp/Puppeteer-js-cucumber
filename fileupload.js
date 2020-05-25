const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50
  });
  //Page
  const page = await browser.newPage();

  await page.goto("https://uppy.io/examples/xhrupload/", {
    waitUntil: "networkidle2"
  });

  const [fileChooser] = await Promise.all([
    page.waitForFileChooser(),
    page.click(".uppy-FileInput-btn")
  ]);

  await fileChooser.accept(["/Users/bhareth/Downloads/data.png"]);

  await browser.close();
})();

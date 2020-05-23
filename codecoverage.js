const puppeteer = require("puppeteer");
const pti = require("puppeteer-to-istanbul");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50
  });
  const page = await browser.newPage();

  await Promise.all([
    page.coverage.startJSCoverage(),
    page.coverage.startCSSCoverage()
  ]);
  await page.goto("https://www.google.com", { waitUntil: "networkidle2" });
  await page.type(
    "#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input",
    "Favicon"
  );
  await page.keyboard.press("Enter");

  const [jsCoverage, cssCoverage] = await Promise.all([
    page.coverage.stopJSCoverage(),
    page.coverage.stopCSSCoverage()
  ]);
  let totalBytes = 0;
  let usedBytes = 0;
  const coverage = [...jsCoverage, ...cssCoverage];
  for (const entry of coverage) {
    totalBytes += entry.text.length;
    for (const range of entry.ranges) usedBytes += range.end - range.start - 1;
  }
  console.log(`Bytes used: ${(usedBytes / totalBytes) * 100}%`);

  pti.write([...jsCoverage, ...cssCoverage]);
  
  await browser.close();
})();

const {Before,After} = require('cucumber');
const browserLib= require('../../../../puppeteer_library/browser_lib')

Before(async function() {

    await browserLib.openBrowser();
    await browserLib.navigateTo("https://www.google.com");
});

After(async function() {

    await browserLib.closeBrowser();

});
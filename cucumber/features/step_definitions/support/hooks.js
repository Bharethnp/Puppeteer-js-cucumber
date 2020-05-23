const {Before,After} = require('cucumber');

Before(async function() {

    await this.openBrowser();
});

After(async function() {

    await this.closeBrowser();

});
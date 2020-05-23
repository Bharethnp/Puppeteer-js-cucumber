const { Given, When, Then } = require("cucumber");
const actionPage= require('../../../pages/actionPage');

Then("I tap on link", async function() {

    await actionPage.perform(this.page);
});
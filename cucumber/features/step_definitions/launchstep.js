const { Given, When, Then } = require("cucumber");
const homePage = require('../../../pages/homePage');


Given("I launch chrome", async function() {
  
  console.log("Opening from before hook");
 });

Then("I open google and enter search text", async function() {
  await homePage.home(this.page,"Favicon");

});

Then("I close browser", async function() {
  
  console.log("Closing from after hook");
});

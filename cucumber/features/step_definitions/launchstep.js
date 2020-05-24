const { Given, When, Then } = require("cucumber");
import { HomePage } from "../../../pages/homePage";

Given("I launch chrome", async function() {
  console.log("Opening from before hook");
});

Then("I open google and enter search text", async function() {
  let homePage = new HomePage();
  await homePage.home("Favicon");
});

Then("I close browser", async function() {
  console.log("Closing from after hook");
});

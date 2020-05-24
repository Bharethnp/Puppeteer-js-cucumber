const { Given, When, Then } = require("cucumber");
import { ActionPage } from "../../../pages/actionPage";

Then("I tap on link", async function() {
  let actionPage = new ActionPage();
  await actionPage.perform();
});

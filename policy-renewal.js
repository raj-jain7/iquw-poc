const { Builder } = require("selenium-webdriver");
var webDriver = require("./index.js");

let driver = new Builder().forBrowser("chrome").build();

async function policyRenewal() {
  await webDriver.webDriver(driver);
  await driver.get("https://iquw-uat3.sequel.com/origin/Policy/20");
}

policyRenewal();

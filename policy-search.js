const { Builder, By, Key, until } = require("selenium-webdriver");
var webDriver = require("./index.js");

let driver = new Builder().forBrowser("chrome").build();

async function policySearch() {
  await webDriver.webDriver(driver);
  searchLink = driver.findElement(By.id("btn-dashboard-search"));
  searchLink.click();
  await driver.wait(until.titleIs("Origin - Search"));
  policyLink = driver.findElement(By.id("filter-search-by-policy"));
  policyLink.click();
}

policySearch();

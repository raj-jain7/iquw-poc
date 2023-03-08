const chrome = require("selenium-webdriver/chrome");
const firefox = require("selenium-webdriver/firefox");
const { Builder, By, until } = require("selenium-webdriver");
var webDriver = require("./index.js");

let driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(new chrome.Options().headless())
  .build();

async function headlessWebDriver(driver) {
  try {
    await driver.get("https://iquw-uat3.sequel.com/origin");
    var loginForm = driver.wait(until.elementLocated(By.css("form")));
    var userName = loginForm.findElement(By.name("Username"));
    var password = loginForm.findElement(By.name("Password"));
    var button = loginForm.findElement(By.name("button"));
    userName.sendKeys("JainR");
    password.sendKeys("Abcd1234$");
    button.click();
    await driver.wait(until.titleIs("Origin - Home Page"));
  } finally {
  }
}

webDriver(driver);

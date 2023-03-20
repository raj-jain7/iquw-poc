const chrome = require("selenium-webdriver/chrome");
const { Builder, By, until } = require("selenium-webdriver");
var webDriver = require("./index.js");

let driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(new chrome.Options().headless())
  .build();

const dropDownClassName =
  "dropdown__label dropdown__label--policyscreengreenheader";

const renewXpath =
  "/html/body/origin-layout/div/div[3]/origin-policy-details/origin-policy-details-directive/split-screen-container/div/article/policy-screen/div/div[1]/div/policy-screen-header/div[3]/div/div[2]/div[1]/div[1]/ul/li[4]/button";

const renewSectionXpath =
  "/html/body/origin-layout/div/div[3]/origin-policy-details/origin-policy-details-directive/split-screen-container/div/article/policy-screen/div/div[4]/div/div[3]/button";

const renewPolicyReference =
  "/html/body/origin-layout/div/div[3]/origin-policy-details/origin-policy-details-directive/split-screen-container/div/article/policy-screen/div/div[4]/div/div[2]/button";

async function policyRenewal() {
  await webDriver.webDriver(driver);
  await driver.get("https://iquw-uat3.sequel.com/origin/Policy/31");
  await driver.sleep(20 * 1000);

  await driver
    .wait(until.elementLocated(By.className(dropDownClassName)))
    .then(function () {
      driver.findElement(By.className(dropDownClassName)).click();
    });

  console.log("Dropdown clicked");

  var renew = driver.findElement(By.xpath(renewXpath));
  renew.click();

  console.log("Renew clicked");

  await driver
    .wait(until.elementLocated(By.xpath(renewSectionXpath)))
    .then(function () {
      driver.findElement(By.xpath(renewSectionXpath)).click();
    });

  await driver.sleep(60 * 1000);
  await driver.wait(until.elementLocated(By.xpath(renewPolicyReference)));
  driver.findElement(By.xpath(renewPolicyReference)).click();
  console.log("Renew Policy Reference Clicked");
}

policyRenewal();

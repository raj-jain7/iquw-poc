const { Builder, By, until } = require("selenium-webdriver");
var webDriver = require("./index.js");

let driver = new Builder().forBrowser("chrome").build();

async function policyRenewal() {
  await webDriver.webDriver(driver);
  await driver.get("https://iquw-uat3.sequel.com/origin/Policy/24");
  await driver.wait(
    until.elementLocated(
      By.className("dropdown__label dropdown__label--policyscreengreenheader")
    ),
    10000
  );
  var actions = driver.findElement(
    By.className("dropdown__label dropdown__label--policyscreengreenheader")
  );
  actions.click();
  var renew = driver.findElement(
    By.xpath(
      "/html/body/origin-layout/div/div[3]/origin-policy-details/origin-policy-details-directive/split-screen-container/div/article/policy-screen/div/div[1]/div/policy-screen-header/div[3]/div/div[2]/div[1]/div[1]/ul/li[4]/button"
    )
  );
  renew.click();
  await driver.wait(
    until.elementLocated(
      By.xpath(
        "/html/body/origin-layout/div/div[3]/origin-policy-details/origin-policy-details-directive/split-screen-container/div/article/policy-screen/div/div[4]/div/div[3]/button"
      )
    ),
    10000
  );
  var renewSection = driver.findElement(
    By.xpath(
      "/html/body/origin-layout/div/div[3]/origin-policy-details/origin-policy-details-directive/split-screen-container/div/article/policy-screen/div/div[4]/div/div[3]/button"
    )
  );
  renewSection.click();
}

policyRenewal();

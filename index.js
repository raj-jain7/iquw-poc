const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://iquw-uat3.sequel.com/origin");
    var loginForm = driver.wait(until.elementLocated(By.tagName("form")));
    var userName = loginForm.findElement(By.name("Username"));
    var password = loginForm.findElement(By.name("Password"));
    var button = loginForm.findElement(By.name("button"));
    userName.sendKeys("JainR");
    password.sendKeys("Abcd1234$");
    button.click();
  } finally {
  }
})();

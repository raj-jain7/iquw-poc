const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get(
      "https://iquw-uat3.sequel.com/Authentication?returnUrl=%2FAuthentication%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dorigin.public%26redirect_uri%3Dhttps%253A%252F%252Fiquw-uat3.sequel.com%252FOrigin%252F%26response_type%3Dcode%26scope%3Doffline_access%2520openid%2520profile%2520sec.authorization%2520sec.api%2520pb.public%2520wf.public%2520origin.api%26nonce%3D9d41756b46c6565d64c1b153e64e9dcc0agkE9uX5%26state%3D1e645ab69b64b059ef7473f7174ef7577cO632euK%26code_challenge%3DzI8_QWSNPgp48ipRE7B8XHIK4oDZ1tBYDn7mZsnSeKk%26code_challenge_method%3DS256%26request_expiration%3DEAAAAE4TpjFboq1LA1FsIw56kbzV0YUgf4rFZptdAqZQJ5wmkotPWwX%252fCgOUbeHUI1tVAQ%253d%253d"
    );
    var loginForm = driver.findElement(By.tagName("form"));
    var userName = loginForm.findElement(By.name("Username"));
    userName.sendKeys("JainR");
  } finally {
  }
})();

const { Builder, By } = require('selenium-webdriver');

(async () => {
    const driver = await new Builder().forBrowser('chrome').build();
    await driver.get('file://' + __dirname + '/index.html');
    await driver.findElement(By.id('num1')).sendKeys('50');
    await driver.findElement(By.id('num2')).sendKeys('10');
    await driver.findElement(By.id('add')).click();
    console.log(await driver.findElement(By.id('result')).getText() === '60' ? 'Test passed' : 'Test failed');
    await driver.sleep(50000000); 
    await driver.quit();
})();

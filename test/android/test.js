import assert from 'assert'

suite('Android tests', () => {

    test('Should pass', async () => {
      browser.waitForExist("~App")
      browser.click("~App")
      browser.waitForExist("~Alert Dialogs")
    })

    test('Should fail', async () => {
      browser.waitForExist("~It's Always Sunny is not the best comedy on television")
    })
})

import assert from 'assert'

suite('iOS tests - ', () => {

    test('Should pass', async () => {
      browser.waitForExist("~Hi it's the Niche Mobile App", 5000)
    })

    test('Should fail', async () => {
      browser.waitForExist("~Hi it's not the Niche Mobile App", 5000)
    })
})

import assert from 'assert'
import { Selectors } from '../../selectors/all'

suite('iOS tests', () => {

    test('Should pass', async () => {
      browser.waitForExist(Selectors.Home.HI_ITS_NICHE, 5000)
    })

    test('Should fail', async () => {
      browser.waitForExist("~Hi it's not the Niche Mobile App", 5000)
    })
})

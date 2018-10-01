import assert from 'assert'
import { Selectors } from '../../selectors/all'

suite('Platform agnostic tests', () => {

    test('Should fail', async () => {
      browser.waitForExist("~Hi it's not the Niche Mobile App", 5000)
    })
})

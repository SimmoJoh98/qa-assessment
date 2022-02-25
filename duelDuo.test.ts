
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

describe(`Button Function Tests:`, () => {
    test(`Check if the draw button value for display is null or not`, async () => {
        const draw = await driver.findElement(By.id('draw'))
        const btn = await draw.getAttribute('display')
        await driver.sleep(1000)
        await draw.click()
        await driver.sleep(2000)

        expect(btn).toBe(null)

        //ALTERNATIVELY 
        const choicesId = await driver.findElement(By.id('choices'))

        const result = await choicesId.isDisplayed()

        expect(result).toBe(true)
        await driver.sleep(2000)
    })

    test(`Add a card button test:`, async () => {

        const draw = await driver.findElement(By.id('draw'))
        const btn = await draw.getAttribute('display')
        await driver.sleep(2000)
        await draw.click()
        await driver.sleep(2000)

        const duoBtn = await driver.findElement(By.xpath("//button[@class='bot-btn']"))
        await duoBtn.click()
        await driver.sleep(2000)

        const playerId = await driver.findElement(By.id('player-duo'))
        const result2 = await playerId.isDisplayed()

        expect(result2).toBe(true)
    })
})
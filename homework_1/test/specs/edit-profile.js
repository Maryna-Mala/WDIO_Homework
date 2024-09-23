/*global describe, it, before, browser*/
import { homePage } from '../../src/pom/pages/home.page.js'
import { settingsPage } from '../../src/pom/pages/settings.page.js'

describe('Edit Trello profile', () => {
    before(async () => {
        await browser.LogInWithValidCredentials()
    })

    it('Edit bio in profile name', async () => {
        await homePage.header.accountInfoButton()
        await homePage.sideMenu.accountAndVisibility()

        await settingsPage.pesonalInfo.bioSetValue()
        await settingsPage.pesonalInfo.saveButton()
        //await browser.pause(5000)
    })
})

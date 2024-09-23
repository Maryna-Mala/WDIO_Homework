/*global describe, it, beforeEach, process*/
import { expect } from 'chai'

import { homePage } from '../../src/pom/pages/home.page.js'

describe('Trello log in', () => {
    beforeEach(async () => {
        await homePage.open()
        await homePage.header.logInButton()
        await homePage.logInModal.logInInput(process.env.LOGIN_EMAIL)
        await homePage.logInModal.submitButton()
    })

    it('Login with valid credentials for free account', async () => {
        await homePage.logInModal.validPassword(process.env.VALID_PASSWORD)
        await homePage.logInModal.submitButton()
    })

    it('Login with  existent account and invalid password', async () => {
        await homePage.logInModal.invalidPassword(process.env.INVALID_PASSWORD)
        await homePage.logInModal.submitButton()
        expect(await homePage.logInModal.passwordInput.isDisplayed()).to.be.true
    })
})

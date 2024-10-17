import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from 'chai'
import { homePage } from '../../../src/pom/pages/home.page.js'

Given('I am at Trello home page', async function () {
    await homePage.open();
});

When('I choose to Log in existent account', async function () {
    await homePage.header.logInButton();
});

When('I enter valid email', async function () {
    await homePage.logInModal.logInInput(process.env.LOGIN_EMAIL);
    await homePage.logInModal.submitButton()
});

When('I enter invalid password', async function () {
    await homePage.logInModal.validPassword(process.env.INVALID_PASSWORD);
    await homePage.logInModal.submitButton()
});

Then('I see error message regarding incorrect email or password', async function () {
    expect(await homePage.logInModal.passwordInput.isDisplayed()).to.be.true
});
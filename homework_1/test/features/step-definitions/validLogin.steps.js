import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from 'chai'
import { homePage } from '../../../src/pom/pages/home.page.js'

Given('I am at Trello home page for valid login', async function () {
    await homePage.open();
});

When('I choose to log in with my free account', async function () {
    await homePage.header.logInButton();
});

When('I enter valid email for valid login', async function () {
    await homePage.logInModal.logInInput(process.env.LOGIN_EMAIL);
    await homePage.logInModal.submitButton()
});

When('I enter valid password', async function () {
    await homePage.logInModal.validPassword(process.env.VALID_PASSWORD);
    await homePage.logInModal.submitButton()
});

Then('my workspace page is opened', async function () {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).to.include('login');
}); 
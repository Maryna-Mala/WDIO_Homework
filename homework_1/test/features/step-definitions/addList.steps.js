import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai'
import { homePage } from '../../../src/pom/pages/home.page.js'
import { boardPage } from '../../../src/pom/pages/board.page.js'

Given('I am at the board page for my free account', async function () {
    await browser.LogInWithValidCredentials();
});

When('I choose to Add a list', async function () {
    await homePage.addBoard.clickBoardForSearch(); 
    await boardPage.addList.createListButton();
});

When('I set the list title', async function () {
    await boardPage.addList.setListTitle();
});

When('I confirm list creation', async function () {
    await boardPage.addList.addListButton();
});

Then('list is added', async function () {
    expect(await boardPage.addList.isListDisplayed.isDisplayed()).to.be.true
});
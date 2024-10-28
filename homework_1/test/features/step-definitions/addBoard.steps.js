import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { homePage } from '../../../src/pom/pages/home.page.js';

Given("I am at workspace page for my free account", async function() {
    await browser.LogInWithValidCredentials(); 
});

When("I choose to create new board", async function() {
    await homePage.header.clickPlusButton();
    await homePage.createBoardModal.createBoard();
});

When("I set board title in widget with board details displayed", async function() {
    await homePage.createBoardModal.setBoardTitle();
});

When("I confirm creation", async function() {
    await homePage.createBoardModal.clickSubmitButton();
});

Then("new board is displayed", async function() {
    const boardIsDisplayed = await homePage.createBoardModal.isBoardNameDisplayed();
    expect(boardIsDisplayed).to.be.true;
});


/*global describe, it, before, browser*/
import { expect } from 'chai'

import { homePage } from '../../src/pom/pages/home.page.js'
import { boardPage } from '../../src/pom/pages/board.page.js'

describe('Search for the board', () => {
    before(async () => {
        await browser.LogInWithValidCredentials()
    })

    it('Search for existent board at my boards page', async () => {
        homePage.addBoard.clickBoardForSearch()
    })

    it('Add List to existent board', async () => {
        await boardPage.addList.createListButton()
        await boardPage.addList.setListTitle()
        await boardPage.addList.addListButton()
        expect(await boardPage.addList.isListDisplayed.isDisplayed()).to.be.true
    })

    it('Add Card to existent list', async () => {
        await boardPage.addCard.createCardButton()
        await boardPage.addCard.setCardTitle()
        await boardPage.addCard.addCardButton()
        expect(await boardPage.addCard.isCardDisplayed.isDisplayed()).to.be.true
    })
})

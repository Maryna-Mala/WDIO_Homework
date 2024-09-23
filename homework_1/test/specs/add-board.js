/*global describe, it, before, browser*/
import { expect } from 'chai'

import { homePage } from '../../src/pom/pages/home.page.js'

describe('Add new board', () => {
    before(async () => {
        await browser.LogInWithValidCredentials()
    })

    it('Add new board from workspace page', async () => {
        await homePage.header.clickPlusButton()
        await homePage.createBoardModal.createBoard()
        await homePage.createBoardModal.setBoardTitle()
        await homePage.createBoardModal.clickSubmitButton()
        await homePage.createBoardModal.isBoardNameDisplayed()
        expect(await homePage.createBoardModal.boardName.isDisplayed()).to.be
            .true
    })

    it('Add new board from my main menu when you are at boards page', async () => {
        await homePage.header.clickPlusButton()
        await homePage.addBoard.createBoard()
        await homePage.addBoard.setBoardTitle()
        await homePage.addBoard.clickSubmitButton()
        await homePage.addBoard.isBoardNameDisplayed()
        expect(await homePage.addBoard.boardName.isDisplayed()).to.be.true
        //await browser.pause(6000)
    })
})

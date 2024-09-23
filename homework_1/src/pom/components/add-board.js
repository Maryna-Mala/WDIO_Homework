/*global $*/
class AddBoard {
    createBoard() {
        return $('//button[@data-testid="header-create-board-button"]').click()
    }

    setBoardTitle() {
        return $('//input[@data-testid="create-board-title-input"]').setValue(
            'Board for Search'
        )
    }

    clickSubmitButton() {
        return $('//button[@data-testid="create-board-submit-button"]').click()
    }

    get boardName() {
        return $('//h1[@data-testid="board-name-display"]')
    }

    isBoardNameDisplayed() {
        return this.boardName.waitForDisplayed()
    }

    async clickBoardForSearch() {
        const boardForSearch = $('//*[@title="Board for Search"]')
        await boardForSearch.waitForDisplayed()
        await boardForSearch.click()
    }
}

export const addBoard = new AddBoard()

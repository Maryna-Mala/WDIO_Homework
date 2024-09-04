class CreateBoardModal {

    createBoard () {
        return $('[data-testid="header-create-board-button"]').click() 
    }

    setBoardTitle() {
        return $('//input[@data-testid="create-board-title-input"]').setValue('test board')
    }

    clickSubmitButton () {
        return $ ('//button[@data-testid="create-board-submit-button"]').click()
    }

    get boardName () {
        return $('//h1[@data-testid="board-name-display"]')
    }

    isBoardNameDisplayed () {
        return this.boardName.waitForDisplayed()
    }
}

export const createBoardModal = new CreateBoardModal()
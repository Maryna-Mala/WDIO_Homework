import BasePage from './base.page.js'
import { logInModal } from '../modals/login.modal.js'
import { sideMenu } from '../components/sideMenu.js'
import { createBoardModal } from '../modals/create-board.modal.js'
import { addBoard } from '../components/add-board.js'

class HomePage extends BasePage {
    logInModal = logInModal
    sideMenu = sideMenu
    createBoardModal = createBoardModal
    addBoard = addBoard

    constructor() {
        super('home/')
    }
}

export const homePage = new HomePage()

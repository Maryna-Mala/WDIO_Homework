import BasePage from "./base.page.js"
import { addList } from "../components/add-list.js"
import { addCard } from "../components/add-card.js"

class BoardPage extends BasePage {
    addList = addList
    addCard = addCard

    constructor() {
        super ('/board-for-search')
    }
}

export const boardPage = new BoardPage()
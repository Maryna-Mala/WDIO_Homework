/*global $*/
class AddCard {
    async createCardButton() {
        const cardButton = $('//button[@data-testid="list-add-card-button"]')
        await cardButton.waitForDisplayed()
        await cardButton.click()
    }

    setCardTitle() {
        return $(
            '//textarea[@data-testid="list-card-composer-textarea"]'
        ).setValue('First card')
    }

    addCardButton() {
        return $(
            '//button[@data-testid="list-card-composer-add-card-button"]'
        ).click()
    }

    get isCardDisplayed() {
        return $('//a[text()="First card"]')
    }
}

export const addCard = new AddCard()

/*global $*/
class AddCard {
    createCardButton() {
        return $('//button[@data-testid="list-add-card-button"]').click()
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

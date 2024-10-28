/*global $*/
class AddList {
    createListButton() {
        return $('//button[@data-testid="list-composer-button"]').click()
    }

    setListTitle() {
        return $('//textarea[@data-testid="list-name-textarea"]').setValue(
            'Main list'
        )
    }

    async addListButton() {
        await $('//button[@data-testid="list-composer-add-list-button"]').scrollIntoView()
        await $('//button[@data-testid="list-composer-add-list-button"]').click()
    }

    get isListDisplayed() {
        return $('//h2[@data-testid="list-name"]')
    }
}

export const addList = new AddList()

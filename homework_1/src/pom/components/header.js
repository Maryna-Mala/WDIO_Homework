/*global $*/
class Header {
    logInButton() {
        return $('//a[text()="Log in"]').click()
    }

    accountInfoButton() {
        return $('//button[@data-testid="header-member-menu-button"]').click()
    }

    async clickPlusButton() {
        const plusButton = $("//button[@data-testid='header-create-menu-button']")
        await plusButton.waitForDisplayed()
        await plusButton.click()
    }
}

export const header = new Header()

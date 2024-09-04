class Header {
    logInButton () {
        return $('//a[text()="Log in"]').click()
    }

    accountInfoButton () {
        return $('//button[@data-testid="header-member-menu-button"]').click()
    }

    clickPlusButton () {
        return $("//button[@data-testid='header-create-menu-button']").click()
    }
}

export const header = new Header()
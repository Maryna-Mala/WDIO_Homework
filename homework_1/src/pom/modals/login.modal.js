/*global $*/
class LogInModal {
    async logInInput(LOGIN_EMAIL) {
        return $('#username').setValue(LOGIN_EMAIL)
    }

    get passwordInput() {
        return $('#password')
    }

    async validPassword(VALID_PASSWORD) {
        await this.passwordInput.waitForDisplayed()
        await this.passwordInput.setValue(VALID_PASSWORD)
    }

    async invalidPassword(INVALID_PASSWORD) {
        await this.passwordInput.waitForDisplayed()
        await this.passwordInput.setValue(INVALID_PASSWORD)
    }

    submitButton() {
        return $('#login-submit').click()
    }
}

export const logInModal = new LogInModal()

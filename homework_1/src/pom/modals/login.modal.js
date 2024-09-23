/*global $*/
class LogInModal {
    async logInInput(LOGIN_EMAIL) {
        return $('#username').setValue(LOGIN_EMAIL)
    }

    get passwordInput() {
        return $('#password')
    }

    validPassword(VALID_PASSWORD) {
        return this.passwordInput.setValue(VALID_PASSWORD)
    }

    invalidPassword(INVALID_PASSWORD) {
        return this.passwordInput.setValue(INVALID_PASSWORD)
    }

    submitButton() {
        return $('#login-submit').click()
    }
}

export const logInModal = new LogInModal()

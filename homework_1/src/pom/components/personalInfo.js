/*global $*/
class PesonalInfo {
    get bioTextarea() {
        return $('#bio')
    }

    bioSetValue() {
        return this.bioTextarea.setValue('Welcome to my free account')
    }

    saveButton() {
        return $('//button[@type="submit"]').click()
    }
}

export const pesonalInfo = new PesonalInfo()

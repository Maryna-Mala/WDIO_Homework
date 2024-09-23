/*global browser*/
import { header } from '../components/header.js'

export default class BasePage {
    header = header

    constructor(url) {
        this.url = url
    }

    open() {
        return browser.url(this.url)
    }
}

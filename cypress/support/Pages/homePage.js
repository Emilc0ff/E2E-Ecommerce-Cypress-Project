export class HomePage {
    constructor() {
        this.onlineShop = '#onlineshoplink'
    }

    clickeaOnlineShop() {
        cy.get(this.onlineShop).click()
    }
}
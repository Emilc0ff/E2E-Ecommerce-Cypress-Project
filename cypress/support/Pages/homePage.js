export class HomePage {
    constructor() {
        this.onlineShop = '#onlineshoplink'
        this.alerts = '#alertslink'
        this.forms = '#formutilslink'
        }

    clickeaOnlineShop() {
        cy.get(this.onlineShop).click()
    }

    clikeaAlerts() {
        cy.get(this.alerts).click()
    }

    clickeaForms() {
        cy.get(this.forms).click()
    }


}
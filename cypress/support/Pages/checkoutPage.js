export class CheckoutPage {
    constructor() {
        this.firstNameInput = '#FirstName',
        this.lastNameInput = '#lastName',
        this.cardNumerInput = '#cardNumber'
        this.clickPurchaseButton = 'Purchase'
       
        
    }

    escribeName(name) {
        cy.get(this.firstNameInput).type(name)
    }

    escribeLastName(lastname) {
        cy.get(this.lastNameInput).type(lastname)
    }

    escribeCardNumber(cardNumber) {
        cy.get(this.cardNumerInput).type(cardNumber)
    }

    clickeaPurchaseButton() {
        cy.contains(this.clickPurchaseButton).click()
        //cy.wait(12000)
    }        
 }
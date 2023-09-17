export class ReciptPage {
    constructor () {
        this.modalName = '#name'
        this.modalItem = 'p[class="chakra-text css-0"]'
    }


    obtieneName() {
        return cy.get(this.modalName)
    }

    obtieneItem1() {
        return cy.get(this.modalItem).eq(2)
    }

    obtieneItem2() {
        return cy.get(this.modalItem).eq(3)
    }

    obtieneTextCard() {
        return cy.get(this.modalItem).eq(4)
    }

    obtieneCreditCardNumber() {
        return cy.get(this.modalItem).eq(5)
    }

    obtieneTotalSpent() {
        return cy.get(this.modalItem).eq(6)
    }

}
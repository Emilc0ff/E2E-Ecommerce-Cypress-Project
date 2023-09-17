export class ShoppingCartPage {
    constructor() {
        this.clickTotalPrice = 'Show total price';
        this.finalPrice = '#price > b';
        this.clickCheckoutpage = "Go to Checkout"
    };

    verificaItem(item) {
        return cy.contains(item);
    };

    verificaPrecioFinal() {
        cy.contains(this.clickTotalPrice).click();
        return cy.get(this.finalPrice);    
    };

    clickeaCheckoutButton() {
        cy.contains(this.clickCheckoutpage).click()
    }
};

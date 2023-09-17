export class ProductsPage {
    constructor() {
        this.goToShoppingCart = '#goShoppingCart'
    }

    redirigeAShoppingCart() {
        cy.get(this.goToShoppingCart).click()
    }

    agregaItemCarrito(item) {
        cy.contains(item).siblings('button[type="button"]').click();
        cy.xpath("//button[@id='closeModal']").click();
    }
}


import { HomePage } from '../support/Pages/homePage';
import { ProductsPage } from '../support/Pages/productsPage';
import { ShoppingCartPage } from '../support/Pages/shoppingCartPage';
import { CheckoutPage } from '../support/Pages/checkoutPage'
import { ReciptPage } from '../support/Pages/reciptPage'

describe('Entrega Final - Pushing IT', () => {
    const numeroRandom = Math.floor(Math.random() * 9999 );
    const username = `usuariotest${numeroRandom}`;
    let userData
    let inventory
    const homePage = new HomePage
    const productsPage = new ProductsPage
    const shoppingCartPage = new ShoppingCartPage
    const checkoutPage = new CheckoutPage 
    const reciptPage = new ReciptPage

    before('', () => {
        cy.fixture('userData').then(varData => {
            userData = varData;
        });
        cy.fixture('inventory').then(varInventory => {
            inventory = varInventory;
        })
    })

    beforeEach('', () => {
        cy.request({
            mehod : "DELETE",
            url : `https://pushing-it.onrender.com/api/deleteuser/${username}`,
            failOnStatusCode : false
        }).then(respuestaDelete => {
            cy.log(respuestaDelete.body);
        })

        cy.request({
            url : 'https://pushing-it.onrender.com/api/register',
            method : "POST",
            body : {
                username: username,
                password : userData.register.password,
                gender : userData.register.gender,
                day : userData.register.day,
                month : userData.register.month,
                year : userData.register.year            
                   }
            }).then(respuestaRegister => {
                expect(respuestaRegister.status).to.be.equal(200);
        });

        cy.request({
            url : "https://pushing-it.onrender.com/api/login",
            method: "POST",
            body : {
                username : username,
                password : userData.register.password
            }
        }).then(respuestaLogin => {
            cy.log(respuestaLogin.body);
            window.localStorage.setItem('token', respuestaLogin.body.token);
            window.localStorage.setItem('user', respuestaLogin.body.user);
            cy.visit('');
        })
    });

    it('Agrega dos items al carrito, valida productos y precio final', () => {
        var precioFinal = (inventory.redCap.price + inventory.beigeShorts.price);
        var precioFinalString = String(precioFinal);
        homePage.clickeaOnlineShop();
        productsPage.agregaItemCarrito(inventory.redCap.name);
        productsPage.agregaItemCarrito(inventory.beigeShorts.name);
        productsPage.redirigeAShoppingCart();
        shoppingCartPage.verificaItem(inventory.redCap.name).should('exist').siblings('#productPrice').should('contain',inventory.redCap.price);
        shoppingCartPage.verificaItem(inventory.beigeShorts.name).should('exist').siblings('#productPrice').should('contain',inventory.beigeShorts.price);
        shoppingCartPage.verificaPrecioFinal().should('have.text', precioFinalString);
        shoppingCartPage.clickeaCheckoutButton();
        checkoutPage.escribeName(userData.buyer.name);
        checkoutPage.escribeLastName(userData.buyer.lastName);
        checkoutPage.escribeCardNumber(userData.buyer.cardNumber);
        checkoutPage.clickeaPurchaseButton();
        reciptPage.obtieneName().should('have.text',`${userData.buyer.name+" "+userData.buyer.lastName} has succesfully purchased the following items`);
        reciptPage.obtieneItem1().should('contain',inventory.redCap.name);
        reciptPage.obtieneItem2().should('contain',inventory.beigeShorts.name);
        reciptPage.obtieneTextCard().should('contain','The credit card used was');
        reciptPage.obtieneCreditCardNumber().should('contain',userData.buyer.cardNumber);
        reciptPage.obtieneTotalSpent().should('have.text',`You have spent $${precioFinalString}`);
    });

    after('After', () => {
        cy.request({
            url : `https://pushing-it.onrender.com/api/deleteuser/${username}`,
            method : 'DELETE'
        }).then(respuestaDelete => {
            cy.log(respuestaDelete.body);
            expect(respuestaDelete.status).to.be.equal(200);
        });
    });
});
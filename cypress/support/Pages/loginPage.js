export class LoginPage {
    constructor() {
        this.userInput = '//input[@id="user"]',
            this.passInput = '/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[2]/input[1]',
            this.loginButton = '//button[@id="submitForm"]'
    }

    escribirUsuario(usuario) {
        cy.xpath(this.userInput).type(usuario);
    };

    escribirPass(pass) {
        cy.xpath(this.passInput).type(pass);
    }

    clickeaLoginButton() {
        cy.xpath(this.loginButton).click();
    };
}
export class AlertsPage {
    constructor() {
        this.imAnAlert = '[name="alert"]';
        this.imAPrompt = '[name="prompt"]';
        this.imAConfirmation = '[name="confirmationMessage"]'
    }

    clikeaAlertButton() {
        cy.get(this.imAnAlert).click();
        
    }

    clikeaPromptButton() {
        cy.get(this.imAPrompt).click();
    }
    
    clikeaConfirmationButton() {
        cy.get(this.imAConfirmation).click();
    }

}
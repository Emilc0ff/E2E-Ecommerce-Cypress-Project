export class FormUtilsPage {
    constructor() {
        this.showdatapicker = '#showDatePicker'
        this.datapicker = '#datePicker'
        this.sliders = '#showSlider'
        this.hiddenText = '#title'
        this.newDate = '[value="04/12/1988"]'
        this.showSlider = '#showSlider'
    };

    clickeaShowDataPicker() {
        cy.get(this.showdatapicker).click()
    };

    clickeaDataPicker() {
        cy.get(this.datapicker)
    };

    modifyDataPicker(date) {
      cy.get(this.datapicker).clear().type(date).type('{enter}')
       
    };

    getNewDate() {
       return cy.get(this.newDate)
    };

    getSliders() {
        cy.get(this.showSlider).click()
        
    }

}
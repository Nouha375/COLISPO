import{ Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import loginElements from '../page_objects/loginElements';
import sendParcelElements from '../page_objects/sendParcelElements';



When(`I click on the send parcel tab`, () => {
    //cy.contains('Expédier un colis').click()
    cy.get(sendParcelElements.sendParcelTab).eq(1).click()
});

When(`I enter the parcel details`, () => {
    cy.get(sendParcelElements.box).should('be.visible')
    cy.get(sendParcelElements.qte).type('2')
    cy.get(sendParcelElements.ObjectName).type('phone')
    cy.get(sendParcelElements.lenght).type('10')
    cy.get(sendParcelElements.width).type('5')
    cy.get(sendParcelElements.height).type('5')
    cy.get(sendParcelElements.minValue).click()
    cy.get(sendParcelElements.file).selectFile('cypress/fixtures/phone.png',{force:true})
    cy.get(sendParcelElements.submit1).eq(0).click()
    cy.get(sendParcelElements.box).eq(1).should('be.visible')
    cy.get(sendParcelElements.ville).eq(0).type('tunis, tunisia',{delay:100},{force: true})
    cy.get(sendParcelElements.clickville).eq(0).click()
    cy.get(sendParcelElements.ville).eq(1).type('lisbon, portugal',{delay:100},{force: true})
    cy.get(sendParcelElements.clickville).eq(0).click()
    cy.get(sendParcelElements.date).eq(0).type('2025-03-26',{force:true})
    cy.get(sendParcelElements.date).eq(1).type('2025-03-27',{force:true})
    cy.get(sendParcelElements.submit2).click()
    //cy.wait(2000)
    cy.get(sendParcelElements.prix).eq(5).type('50',{force:true},{delay:100})   
    
});

When(`I submit the parcel details`, () => {
    cy.get(sendParcelElements.submit3).click()
});

Then(`I should see a popup message confirming the parcel has been sent`, () => {
    cy.get(sendParcelElements.alert).should('contain','Votre annonce a été ajoutée avec succès ! Rendez-vous dans le tableau de bord sous "Mes Colis Postulés" pour la consulter.').should('be.visible')
});
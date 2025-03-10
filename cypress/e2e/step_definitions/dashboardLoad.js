import  { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import dashboardElements from '../page_objects/dashboardElements';
import loginElements from '../page_objects/loginElements';

When(`I login to the application`, () => {
    cy.visit(loginElements.loginURL)
    cy.get(loginElements.email).type('particulier@gmail.com')
    cy.get(loginElements.password).type('0000')
    cy.get(loginElements.submit).click()
    
});

Then(`I should navigate to the dashboard page`, () => {
    cy.get(loginElements.MenuElement).should('contain','Mon compte').should('be.visible')
});

Then(`I should see the dashboard elements`, () => {
    cy.get(dashboardElements.container1).should('contain','Transporteur nécessaire ?').should('be.visible')
    cy.get(dashboardElements.container1).should('contain','Voulez-vous devenir transporteur ?').should('be.visible')

    cy.get(dashboardElements.container2).should('contain','Chercher une annonce').should('be.visible')
    cy.get(dashboardElements.container2).should('contain','Expédier votre colis').should('be.visible')
    cy.get(dashboardElements.container2).should('contain','Rechercher').should('be.visible')

    cy.get(dashboardElements.container3).should('contain','Envoyer un colis avec Colispo, comment ça marche ?').should('be.visible')
    cy.get(dashboardElements.container3).should('contain',"C'est très facile").should('be.visible')
    cy.get(dashboardElements.container3).should('contain',"Que vous soyez expéditeur ou destinataire, déposez une annonce avec les caractéristiques du colis à envoyer et acceptez l'une des offres reçues.").should('be.visible')
    cy.get(dashboardElements.container3).should('contain','En temps réel').should('be.visible')
    cy.get(dashboardElements.container3).should('contain',"Colispo connecte les annonceurs avec les particuliers & transporteurs qui font le trajet. Mettez-vous d’accord sur les modalités du transport.").should('be.visible')
    cy.get(dashboardElements.container3).should('contain','Voir tous les annonces').should('be.visible')

    cy.get(dashboardElements.container4).should('contain','Prix négociables').should('be.visible')
    cy.get(dashboardElements.container4).should('contain','Service 24h/24').should('be.visible')
    cy.get(dashboardElements.container4).should('contain','Facile à utiliser').should('be.visible')

    cy.get(dashboardElements.container5).should('contain','Consultez les dernières voyages').should('be.visible')
    cy.get(dashboardElements.container5).should('contain','Voir les dernières trajets').should('be.visible')

    cy.get(dashboardElements.container6).should('contain','Consultez les dernières annonces').should('be.visible')
    cy.get(dashboardElements.container6).should('contain','Voir les dernières annonces').should('be.visible')
    
    cy.get(dashboardElements.container7).should('contain','À propos de nous').should('be.visible')
    cy.get(dashboardElements.container7).should('contain','Contactez-nous').should('be.visible')
    cy.get(dashboardElements.container7).should('contain','Envoyer un e-mail').should('be.visible')




});
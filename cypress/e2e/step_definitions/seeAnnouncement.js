import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import seeAnnouncementElements from '../page_objects/seeAnnouncementElements';
import { beforeEach } from 'mocha';

beforeEach(() => {
    cy.intercept('GET', 'https://api.colispo.com/trajets?page=1&filter[from_address][name]=&filter[to_address][name]=').as('getTrajets');
    cy.intercept('GET', 'https://maps.googleapis.com/maps/api/mapsjs/gen_204?csp_test=true').as('map')
});

When(`I navigate to the announcement page`, () => {
    cy.visit(seeAnnouncementElements.announcementUrl);
    cy.wait(2000);
    cy.wait('@getTrajets', {timeout: 10000}).then((interception) => {
        expect(interception.response.statusCode).to.eq(200)
    });
    cy.wait('@map').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
    });
});

Then(`I see the announcement`, () => {
    cy.get(seeAnnouncementElements.sideBar).should('be.visible').should('contain.html', 'col');
    cy.get(seeAnnouncementElements.map).should('be.visible');
    //capture d'écran
    cy.screenshot();
    
});
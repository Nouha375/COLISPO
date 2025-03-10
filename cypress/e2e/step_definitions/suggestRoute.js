import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginElements from "../page_objects/loginElements";
import suggestRouteElements from "../page_objects/suggestRouteElements";
import { beforeEach } from "mocha";

beforeEach(() => {
  cy.intercept("POST", "/t_trajets").as("addTrajet");
});

When(`I click on the propose route tab`, () => {
  cy.get(suggestRouteElements.suggestRouteTab).eq(3).click();
});

When(`I enter details`, () => {
  cy.get(suggestRouteElements.villeDepart)
    .eq(0)
    .type("Tunis, tunisia", { delay: 100 }, { force: true });
  cy.get(suggestRouteElements.dropListVille).eq(0).click();
  cy.get(suggestRouteElements.villeArrivee)
    .eq(1)
    .type("Lisbon, portugal", { delay: 100 }, { force: true });
  cy.get(suggestRouteElements.dropListVille).eq(0).click();
  cy.get(suggestRouteElements.dateDepart)
    .eq(0)
    .type("2025-04-26", { force: true });
  cy.get(suggestRouteElements.tempsDepart).eq(0).click();
  cy.get(suggestRouteElements.dateArrivee)
    .eq(1)
    .type("2025-04-27", { force: true });
  cy.get(suggestRouteElements.tempsArrivee).eq(2).click();
  cy.get(suggestRouteElements.MoyenTransport).click();
  cy.get(suggestRouteElements.longMax).type("10", { force: true });
  cy.get(suggestRouteElements.largMax).type("5", { force: true });
  cy.get(suggestRouteElements.hautMax).type("5", { force: true });
  cy.get(suggestRouteElements.PoidsMax).click();
  cy.get(suggestRouteElements.departRecupMain).click();
  cy.get(suggestRouteElements.departRecupPtRelais).click();
  cy.get(suggestRouteElements.ArriveeRecupMain).click();
  cy.get(suggestRouteElements.ArriveeRecupPtRelais).click();
  cy.get(suggestRouteElements.submit).click();
  cy.wait(2000);
});

Then(`I should be redirected to search ad`, () => {
  //cy.get(suggestRouteElements.searchAd).eq(4).should("be.visible");
  cy.wait("@addTrajet").then((interception) => {
    expect(interception.response.statusCode).to.eq(201);
    expect(interception.response.body).to.have.property("go_time");
    expect(interception.response.body).to.have.property("max_length").eq(10);
  });
});

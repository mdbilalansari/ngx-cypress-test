/// <reference types="cypress"/>

describe("first test suite", () => {
  it("first-test", () => {
    //Navigating to url
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    ////////// TYPE OF LOCATORS ///////////////////

    //By Tag Name
    cy.get("input");

    //By ID
    cy.get("#inputEmail1");

    //By Class
    cy.get(".input-full-width");

    //By Attribute name
    cy.get("[fullwidth]");

    //By Attribute and Value
    cy.get('[placeholder="Email"]');

    //By Entire Class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]');

    //By two attributes
    cy.get('[placeholder="Email"] [fullwidth]');

    //By tag, attribute, id and class
    cy.get('input [placeholder="Email"] #inputEmail1  .input-full-width');

    //By cypress test ID
    //Most recommended way
    cy.get('[data-cy="imputEmail1"]');
  });

  it.only("second-test", () => {
    //only is used to run this test only
    //Navigating to url
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    //Theory
    // get() - find element on the page by locator globally
    // find() - find child element by locator
    // contains - find HTML text by locator and text

    cy.contains("Sign in");
    cy.contains('[status="warning"]', "Sign in");
    cy.contains("nb-card", "Horizontal form").find("button");
    cy.contains("nb-card", "Horizontal form").contains("Sign in");
    cy.contains("nb-card", "Horizontal form").get("button");

    //Cypress chains and DOM
    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .parents("form")
      .find("nb-checkbox")
      .click();
  });
});

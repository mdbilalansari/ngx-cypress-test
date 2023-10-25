/// <reference types="cypress"/>

const { navigateTo } = require('../support/page_objects/navigationPage');

describe('Test with Page Objects', () => {
  beforeEach('open application', () => {
    cy.visit('/');
  });

  it('verify navigation across the pages', () => {
    navigateTo.formLayoutPage();
    navigateTo.datePickerPage();
    navigateTo.toasterPage();
    navigateTo.smartTablePage();
    navigateTo.tooltipPage();
  });
});

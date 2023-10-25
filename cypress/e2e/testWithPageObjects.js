/// <reference types="cypress"/>

const { onDatePickerPage } = require('../support/page_objects/datePickerPage');
const { onFormLayoutPage } = require('../support/page_objects/formLayoutPage');
const { navigateTo } = require('../support/page_objects/navigationPage');
const { onSmartTablePage } = require('../support/page_objects/smartTablePage');

describe('Test with Page Objects', () => {
  beforeEach('open application', () => {
    cy.openHomePage();
  });

  it('verify navigation across the pages', () => {
    navigateTo.formLayoutPage();
    navigateTo.datePickerPage();
    navigateTo.toasterPage();
    navigateTo.smartTablePage();
    navigateTo.tooltipPage();
  });

  it.only('should submit Inline and Basic form and select tomorrow date in the calender', () => {
    navigateTo.formLayoutPage();
    onFormLayoutPage.submitInlineFormWithNameAndEmail('Bilal', 'mdbilalansari@gmail.com');
    onFormLayoutPage.submitBasicFormWithEmailAndPassword('mdbilalansari@gmail.com', 'Password@123');

    navigateTo.datePickerPage();
    onDatePickerPage.selectCommonDatepickerDateFromToday(1);
    onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14);

    navigateTo.smartTablePage();
    onSmartTablePage.updateAgeByFirtName('Larry', 35);
    onSmartTablePage.addNewRecordwithFirstAndLastName('Bilal', 'Ansari');
    onSmartTablePage.deleteRowByIndex(2);
  });
});

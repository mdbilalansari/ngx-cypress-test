/// <reference types="cypress"/>

describe("first test suite", () => {
  describe("nested test suite", () => {
    beforeEach("login", () => {
      //This code will run before each 'it' test
    });

    it("first-test", () => {
      //test code
    });

    it("second-test", () => {
      //test code
    });
  });

  it("first-test", () => {
    //test code
  });

  it("second-test", () => {
    //test code
  });
});

describe("Second test suite", () => {
  it("first-test", () => {
    //test code
  });

  it("second-test", () => {
    //test code
  });
});

describe("Enrollment", () => {
  beforeEach(() => {
    // navigate to sign-up page
    cy.visit("signup?platform=v3");
  });

  it("Can Register, Load Credit Score Page, and Log Out", () => {
    // intercept report get request
    cy.intercept("GET", "https://sandbox.array.io/api/report/v2*").as(
      "getReport"
    );

    // intercept score tracker get request
    cy.intercept(
      "GET",
      "https://sandbox.array.io/api/report/v2/scoretracker*"
    ).as("getScore");

    // enter first name
    cy.get("array-account-enroll")
      .shadow()
      .find("input[name=firstName]")
      .type(Cypress.env("firstName"));

    // enter last name
    cy.get("array-account-enroll")
      .shadow()
      .find("input[name=lastName]")
      .type(Cypress.env("lastName"));

    // enter street address
    cy.get("array-account-enroll")
      .shadow()
      .find("input[name=address]")
      .type(Cypress.env("addressStreet"));

    // enter city
    cy.get("array-account-enroll")
      .shadow()
      .find("input[name=city]")
      .type(Cypress.env("addressCity"));

    // select state
    cy.get("array-account-enroll")
      .shadow()
      .find("select[data-test-id=select-state]")
      .select(Cypress.env("addressState"));

    // enter zip code
    cy.get("array-account-enroll")
      .shadow()
      .find("input[name=zip]")
      .type(Cypress.env("addressZip"));

    // click next button
    cy.get("array-account-enroll").shadow().find("button[type=submit]").click();

    // select month of birth
    cy.get("array-account-enroll")
      .shadow()
      .find("select[data-test-id=select-null]")
      .eq(0)
      .select(Cypress.env("dobMonth"));

    // select day of birth
    cy.get("array-account-enroll")
      .shadow()
      .find("select[data-test-id=select-null]")
      .eq(1)
      .select(Cypress.env("dobDay"));

    // select year of birth
    cy.get("array-account-enroll")
      .shadow()
      .find("select[data-test-id=select-null]")
      .eq(2)
      .select(Cypress.env("dobYear"));

    // enter last four digits of ssn
    cy.get("array-account-enroll")
      .shadow()
      .find("input[data-test-id=input-ssn-enroll]")
      .type(Cypress.env("ssnLastFour"));

    // click submit button
    cy.get("array-account-enroll").shadow().find("button[type=submit]").click();

    // answer first verification question
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("div[data-test-id=radio-group]")
      .eq(0)
      .verificationQuestionOne();

    // answer second verification question
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("div[data-test-id=radio-group]")
      .eq(1)
      .verificationQuestionTwo();

    // answer third verification question
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("div[data-test-id=radio-group]")
      .eq(2)
      .verificationQuestionThree();

    // click submit button
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("button[type=submit]")
      .click();

    // wait for report get request to complete
    cy.wait("@getReport", { timeout: 10000 });

    // click submit button
    cy.get("array-account-enroll")
      .shadow()
      .find("button[data-test-id=button-]")
      .click();

    // wait for score tracker get request to complete
    cy.wait("@getScore", { timeout: 30000 });

    // assert user's name is visible with correct value
    cy.get("array-credit-overview")
      .shadow()
      .find("h1[class='title svelte-1s21fdj']")
      .should("be.visible")
      .and("contain", "Thomas D Devos");

    // assert credit score is visible with correct value
    cy.get("array-credit-overview")
      .shadow()
      .find("div[data-test-id=score-value]")
      .should("be.visible")
      .and("contain", "618");

    // hover over settings in order for log out to appear
    cy.get("array-navbar")
      .shadow()
      .find("div[class='menu svelte-16d358h active']")
      .eq(2)
      .contains("Settings")
      .realHover("mouse");

    // click log out
    cy.get("array-navbar")
      .shadow()
      .find("span[class='submenu logout svelte-16d358h']")
      .contains("Log out")
      .click();
  });
});

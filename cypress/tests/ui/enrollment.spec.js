describe("Enrollment", () => {
  beforeEach(() => {
    // navigate to sign-up page
    cy.visit("signup?platform=v3");
  });

  it("Can Register, Load Credit Score Page, and Log Out (Happy Path)", () => {
    //intercept authenticate get request
    cy.intercept("GET", "https://sandbox.array.io/api/authenticate/v2/*").as(
      "getAuthenticate"
    );

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

    // wait for report get request to complete
    cy.wait("@getAuthenticate", { timeout: 10000 });

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

    // assert user's name is visible with correct content
    cy.get("array-credit-overview")
      .shadow()
      .find("h1[class='title svelte-1s21fdj']")
      .should("be.visible")
      .and("contain", "Thomas D Devos");

    // assert credit score is visible with correct content
    cy.get("array-credit-overview")
      .shadow()
      .find("div[data-test-id=score-value]")
      .should("be.visible")
      .and("contain", "618");

    // hover over settings in order for log out to appear
    cy.get("array-navbar")
      .shadow()
      .find("div[class='menu svelte-16dcemx active']")
      .eq(2)
      .contains("Settings")
      .realHover("mouse");

    // click log out
    cy.get("array-navbar")
      .shadow()
      .find("span[class='submenu logout svelte-16dcemx']")
      .contains("Log out")
      .click();
  });

  it("Checks Invalid Registration Scenarios (Unhappy Path)", () => {
    // intercept ssn post request
    cy.intercept("POST", "https://sandbox.array.io/api/user/v3").as("postSsn");

    // click next button with all fields empty
    cy.get("array-account-enroll").shadow().find("button[type=submit]").click();

    // assert error message is visible with correct content
    cy.get("array-account-enroll")
      .shadow()
      .find("p")
      .eq(1)
      .should("be.visible")
      .contains("6 errors prohibited this from being submitted");

    // enter first name
    cy.get("array-account-enroll")
      .shadow()
      .find("input[name=firstName]")
      .type(Cypress.env("firstName"));

    // click next button with five fields empty
    cy.get("array-account-enroll").shadow().find("button[type=submit]").click();

    // assert error message is visible with correct content
    cy.get("array-account-enroll")
      .shadow()
      .find("p")
      .eq(1)
      .should("be.visible")
      .contains("5 errors prohibited this from being submitted");

    // enter last name
    cy.get("array-account-enroll")
      .shadow()
      .find("input[name=lastName]")
      .type(Cypress.env("lastName"));

    // click next button with four fields empty
    cy.get("array-account-enroll").shadow().find("button[type=submit]").click();

    // assert error message is visible with correct content
    cy.get("array-account-enroll")
      .shadow()
      .find("p")
      .eq(1)
      .should("be.visible")
      .contains("4 errors prohibited this from being submitted");

    // enter street address
    cy.get("array-account-enroll")
      .shadow()
      .find("input[name=address]")
      .type(Cypress.env("addressStreet"));

    // click next button with three fields empty
    cy.get("array-account-enroll").shadow().find("button[type=submit]").click();

    // assert error message is visible with correct content
    cy.get("array-account-enroll")
      .shadow()
      .find("p")
      .eq(1)
      .should("be.visible")
      .contains("3 errors prohibited this from being submitted");

    // enter city
    cy.get("array-account-enroll")
      .shadow()
      .find("input[name=city]")
      .type(Cypress.env("addressCity"));

    // click next button with two fields empty
    cy.get("array-account-enroll").shadow().find("button[type=submit]").click();

    // assert error message is visible with correct content
    cy.get("array-account-enroll")
      .shadow()
      .find("p")
      .eq(1)
      .should("be.visible")
      .contains("2 errors prohibited this from being submitted");

    // select state
    cy.get("array-account-enroll")
      .shadow()
      .find("select[data-test-id=select-state]")
      .select(Cypress.env("addressState"));

    // click next button with one field empty
    cy.get("array-account-enroll").shadow().find("button[type=submit]").click();

    // assert error message is visible with correct content
    cy.get("array-account-enroll")
      .shadow()
      .find("p")
      .eq(1)
      .should("be.visible")
      .contains("1 error prohibited this from being submitted");

    // enter zip code
    cy.get("array-account-enroll")
      .shadow()
      .find("input[name=zip]")
      .type(Cypress.env("addressZip"));

    // click next button with all fields complete
    cy.get("array-account-enroll").shadow().find("button[type=submit]").click();

    // click submit button with all fields empty
    cy.get("array-account-enroll").shadow().find("button[type=submit]").click();

    // assert error message is visible with correct content
    cy.get("array-account-enroll")
      .shadow()
      .find("p")
      .eq(1)
      .should("be.visible")
      .contains("4 errors prohibited this from being submitted");

    // select month of birth
    cy.get("array-account-enroll")
      .shadow()
      .find("select[data-test-id=select-null]")
      .eq(0)
      .select(Cypress.env("dobMonth"));

    // click submit button with three fields empty
    cy.get("array-account-enroll").shadow().find("button[type=submit]").click();

    // assert error message is visible with correct content
    cy.get("array-account-enroll")
      .shadow()
      .find("p")
      .eq(1)
      .should("be.visible")
      .contains("3 errors prohibited this from being submitted");

    // select day of birth
    cy.get("array-account-enroll")
      .shadow()
      .find("select[data-test-id=select-null]")
      .eq(1)
      .select(Cypress.env("dobDay"));

    // click submit button with two fields empty
    cy.get("array-account-enroll").shadow().find("button[type=submit]").click();

    // assert error message is visible with correct content
    cy.get("array-account-enroll")
      .shadow()
      .find("p")
      .eq(1)
      .should("be.visible")
      .contains("2 errors prohibited this from being submitted");

    // select year of birth
    cy.get("array-account-enroll")
      .shadow()
      .find("select[data-test-id=select-null]")
      .eq(2)
      .select(Cypress.env("dobYear"));

    // click submit button with one field empty
    cy.get("array-account-enroll").shadow().find("button[type=submit]").click();

    // assert error message is visible with correct content
    cy.get("array-account-enroll")
      .shadow()
      .find("p")
      .eq(1)
      .should("be.visible")
      .contains("1 error prohibited this from being submitted");

    // enter invalid last four digits of ssn
    cy.get("array-account-enroll")
      .shadow()
      .find("input[data-test-id=input-ssn-enroll]")
      .type(Cypress.env("ssnLastFourInvalid"));

    // click submit button with no fields empty
    cy.get("array-account-enroll").shadow().find("button[type=submit]").click();

    // wait for ssn post request to complete
    cy.wait("@postSsn", { timeout: 30000 });

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

    // enter full ssn
    cy.get("array-account-enroll")
      .shadow()
      .find("input[data-test-id=input-ssn-enroll]")
      .type(Cypress.env("ssn"));

    // click submit button
    cy.get("array-account-enroll").shadow().find("button[type=submit]").click();

    // click submit button with no verification questions answered
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("button[type=submit]")
      .click();

    // assert first error message is visible with correct content
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("p[class='error-message svelte-e3yjjq']")
      .eq(0)
      .should("be.visible")
      .contains("Please choose one of the following options");

    // assert second error message is visible with correct content
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("p[class='error-message svelte-e3yjjq']")
      .eq(1)
      .should("be.visible")
      .contains("Please choose one of the following options");

    // assert third error message is visible with correct content
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("p[class='error-message svelte-e3yjjq']")
      .eq(2)
      .should("be.visible")
      .contains("Please choose one of the following options");

    // answer "none" to first verification question
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("div[data-test-id=radio-group]")
      .eq(0)
      .find("label")
      .contains("None of the Above")
      .click();

    // click submit button with one verification question answered
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("button[type=submit]")
      .click();

    // assert first error message is visible with correct content
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("p[class='error-message svelte-e3yjjq']")
      .eq(0)
      .should("be.visible")
      .contains("Please choose one of the following options");

    // assert second error message is visible with correct content
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("p[class='error-message svelte-e3yjjq']")
      .eq(0)
      .should("be.visible")
      .contains("Please choose one of the following options");

    // answer "none" to second verification question
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("div[data-test-id=radio-group]")
      .eq(1)
      .find("label")
      .contains("None of the Above")
      .click();

    // click submit button with two verification questions answered
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("button[type=submit]")
      .click();

    // assert error message is visible with correct content
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("p[class='error-message svelte-e3yjjq']")
      .eq(0)
      .should("be.visible")
      .contains("Please choose one of the following options");

    // answer "none" to third verification question
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("div[data-test-id=radio-group]")
      .eq(2)
      .find("label")
      .contains("None of the Above")
      .click();

    // click submit button with all verification questions answered
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("button[type=submit]")
      .click();

    // click submit button before answering additional verification question
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("button[type=submit]")
      .click();

    // assert error message is visible with correct content
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("p[class='error-message svelte-e3yjjq']")
      .eq(0)
      .should("be.visible")
      .contains("Please choose one of the following options");

    // answer additional verification question
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("div[data-test-id=radio-group]")
      .verificationQuestionOne();

    // click submit button after answering additional verification question
    cy.get("array-account-enroll")
      .shadow()
      .find("array-authentication-kba")
      .shadow()
      .find("button[type=submit]")
      .click();
  });
});

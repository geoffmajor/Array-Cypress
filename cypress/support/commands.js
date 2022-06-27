// check first question for all valid security answers, select one if it
// exists otherwise select none of the above
Cypress.Commands.add(
  "verificationQuestionOne",
  { prevSubject: "div" },
  ($div) => {
    if ($div.text().includes(Cypress.env("securityAnswer1"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(0)
        .find("label")
        .contains(Cypress.env("securityAnswer1"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer2"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(0)
        .find("label")
        .contains(Cypress.env("securityAnswer2"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer3"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(0)
        .find("label")
        .contains(Cypress.env("securityAnswer3"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer4"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(0)
        .find("label")
        .contains(Cypress.env("securityAnswer5"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer5"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(0)
        .find("label")
        .contains(Cypress.env("securityAnswer5"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer6"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(0)
        .find("label")
        .contains(Cypress.env("securityAnswer6"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer7"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(0)
        .find("label")
        .contains(Cypress.env("securityAnswer7"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer8"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(0)
        .find("label")
        .contains(Cypress.env("securityAnswer8"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer9"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(0)
        .find("label")
        .contains(Cypress.env("securityAnswer9"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer10"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(0)
        .find("label")
        .contains(Cypress.env("securityAnswer10"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer11"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(0)
        .find("label")
        .contains(Cypress.env("securityAnswer11"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer12"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(0)
        .find("label")
        .contains(Cypress.env("securityAnswer12"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer13"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(0)
        .find("label")
        .contains(Cypress.env("securityAnswer13"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer14"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(0)
        .find("label")
        .contains(Cypress.env("securityAnswer14"))
        .click();
    } else {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(0)
        .find("label")
        .contains("None of the Above")
        .click();
    }
  }
);

// check second question for all valid security answers, select one if it
// exists otherwise select none of the above
Cypress.Commands.add(
  "verificationQuestionTwo",
  { prevSubject: "div" },
  ($div) => {
    if ($div.text().includes(Cypress.env("securityAnswer1"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(1)
        .find("label")
        .contains(Cypress.env("securityAnswer1"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer2"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(1)
        .find("label")
        .contains(Cypress.env("securityAnswer2"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer3"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(1)
        .find("label")
        .contains(Cypress.env("securityAnswer3"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer4"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(1)
        .find("label")
        .contains(Cypress.env("securityAnswer4"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer5"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(1)
        .find("label")
        .contains(Cypress.env("securityAnswer5"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer6"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(1)
        .find("label")
        .contains(Cypress.env("securityAnswer6"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer7"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(1)
        .find("label")
        .contains(Cypress.env("securityAnswer7"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer8"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(1)
        .find("label")
        .contains(Cypress.env("securityAnswer8"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer9"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(1)
        .find("label")
        .contains(Cypress.env("securityAnswer9"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer10"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(1)
        .find("label")
        .contains(Cypress.env("securityAnswer10"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer11"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(1)
        .find("label")
        .contains(Cypress.env("securityAnswer11"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer12"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(1)
        .find("label")
        .contains(Cypress.env("securityAnswer12"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer13"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(1)
        .find("label")
        .contains(Cypress.env("securityAnswer13"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer14"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(1)
        .find("label")
        .contains(Cypress.env("securityAnswer14"))
        .click();
    } else {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(1)
        .find("label")
        .contains("None of the Above")
        .click();
    }
  }
);

// check third question for all valid security answers, select one if it
// exists otherwise select none of the above
Cypress.Commands.add(
  "verificationQuestionThree",
  { prevSubject: "div" },
  ($div) => {
    if ($div.text().includes(Cypress.env("securityAnswer1"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(2)
        .find("label")
        .contains(Cypress.env("securityAnswer1"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer2"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(2)
        .find("label")
        .contains(Cypress.env("securityAnswer2"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer3"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(2)
        .find("label")
        .contains(Cypress.env("securityAnswer3"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer4"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(2)
        .find("label")
        .contains(Cypress.env("securityAnswer4"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer5"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(2)
        .find("label")
        .contains(Cypress.env("securityAnswer5"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer6"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(2)
        .find("label")
        .contains(Cypress.env("securityAnswer6"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer7"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(2)
        .find("label")
        .contains(Cypress.env("securityAnswer7"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer8"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(2)
        .find("label")
        .contains(Cypress.env("securityAnswer8"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer9"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(2)
        .find("label")
        .contains(Cypress.env("securityAnswer9"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer10"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(2)
        .find("label")
        .contains(Cypress.env("securityAnswer10"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer11"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(2)
        .find("label")
        .contains(Cypress.env("securityAnswer11"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer12"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(2)
        .find("label")
        .contains(Cypress.env("securityAnswer12"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer13"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(2)
        .find("label")
        .contains(Cypress.env("securityAnswer13"))
        .click();
    } else if ($div.text().includes(Cypress.env("securityAnswer14"))) {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(2)
        .find("label")
        .contains(Cypress.env("securityAnswer14"))
        .click();
    } else {
      cy.get("array-account-enroll")
        .shadow()
        .find("array-authentication-kba")
        .shadow()
        .find("div[data-test-id=radio-group]")
        .eq(2)
        .find("label")
        .contains("None of the Above")
        .click();
    }
  }
);

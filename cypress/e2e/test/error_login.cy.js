import { invalidEmail, invalidPassword } from "../../support/test-user-data.js";

// The user cannot submit the login form with invalid credentials and is shown a message.

describe("Cannot log in with invalid creditentials", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(500);
  });

  it("Navigates from register to login-form", () => {
    cy.get("#registerForm").find("button[data-auth=login]").click();
    cy.wait(1000);
    cy.get("#loginForm").should("be.visible");
    cy.wait(1000);
  });

  it("Fills out login-form, submit and displays error on screen", () => {
    cy.get('.modal-footer button[data-auth="login"]')
      .should("be.visible")
      .click();
    cy.wait(500);
    cy.get("#loginEmail").type(invalidEmail, { delay: 50 });
    cy.get("#loginPassword").type(invalidPassword, { delay: 50 });
    cy.wait(500);
    cy.contains('button[type="submit"]', "Login").click();
    cy.wait(500);
  });
});

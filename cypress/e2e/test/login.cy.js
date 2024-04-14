import { validEmail, validPassword } from "../../support/test-user-data.js";

// The user can log in with the login form with valid credentials

describe("Logs in with valid creditentials", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
  });

  it("Navigates from register to login-form", () => {
    cy.get("#registerForm").find("button[data-auth=login]").click();
    cy.wait(1000);
    cy.get("#loginForm").should("be.visible");
    cy.wait(1000);
  });

  it("Fills out login-form, submit and identifies token", () => {
    cy.get('.modal-footer button[data-auth="login"]')
      .should("be.visible")
      .click();
    cy.wait(500);
    cy.get("#loginEmail").type(validEmail, { delay: 50 });
    cy.get("#loginPassword").type(validPassword, { delay: 50 });
    cy.wait(500);
    cy.contains('button[type="submit"]', "Login").click();
    cy.window().then((win) => {
      cy.expect(win.localStorage.getItem("token")).to.be.null;
    });
    cy.wait(500);
  });

  it("logs out", () => {
    cy.get('.text-end button[data-auth="logout"]').should("be.visible").click();
    cy.wait(1500);
    cy.window().then((win) => {
      cy.expect(win.localStorage.getItem("token")).to.be.null;
    });
    cy.wait(500);
  });
});

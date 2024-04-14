import {
  validEmail,
  ivalidEmail,
  validPassword,
  invalidPassword,
} from "../../support/test-user-data.js";

// from the CA requirements:
// The user can log in with the login form with valid credentials
// The user cannot submit the login form with invalid credentials and is shown a message.

describe("Navigates to homepage", () => {
  beforeEach(() => {
    cy.visit("https://sirvau.github.io/social-media-client/");
    cy.wait(1000);
  });

  it("Navigates from register to login-form", () => {
    cy.get("#registerForm").find("button[data-auth=login]").click();
    cy.wait(1000);
    cy.get("#loginForm").should("be.visible");
  });
});

describe("Newsletter subscribe form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("First Form Input", () => {
    it("allows users to subscribe to the email list", () => {
      cy.getByData("email-input").should("be.visible").type("tom@aol.com")
      cy.getByData("submit-button")
        .click()
        .wait(1000)
        .getByData("success-message")
        .should("exist")
        .contains("tom@aol.com")
    })

    it("does NOT allow an invalid email address", () => {
      cy.getByData("email-input").should("be.visible").type("tom")
      cy.getByData("submit-button")
        .click()
        .getByData("success-message")
        .should("not.exist")
    })

    it("does NOT allow double subscribe email", () => {
      cy.getByData("email-input").should("be.visible").type("john@example.com")
      cy.getByData("submit-button")
        .click()
        .wait(1000)
        .getByData("server-error-message")
        .should("exist")
        .contains("john@example.com")
    })

    it("does NOT allow empty input", () => {
      cy.getByData("email-input").should("be.visible").type("abc")
      cy.getByData("submit-button").click()
      cy.getByData("email-input").clear()
      cy.getByData("submit-button").click()
      cy.getByData("error-message")
        .should("exist")
        .contains("Email is required")
    })
  })

  context("First Form Input", () => {
    it("allows users to subscribe to the email list", () => {
      cy.get("footer input").should("be.visible").type("tom@aol.com")
      cy.get(`footer [type="submit"]`).click()
      cy.window().then(($window) => {
        expect($window.scrollY).to.be.equal(0)
      })
    })

    it("does NOT allow an invalid email address", () => {
      cy.get("footer input").should("be.visible").type("tom")
      cy.get(`footer [type="submit"]`).click()
      cy.window().then(($window) => {
        expect($window.scrollY).not.to.be.equal(0)
      })
    })

    it("does NOT allow empty input", () => {
      cy.get("footer input").should("be.visible").type("abc")
      cy.get(`footer [type="submit"]`).click()
      cy.get("footer input").clear()
      cy.get(`footer [type="submit"]`).click()
      cy.window().then(($window) => {
        expect($window.scrollY).not.to.be.equal(0)
      })
    })
  })
})

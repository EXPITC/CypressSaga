describe("User Journey", () => {
  it("a user can find course  on the home page and complete the courses lessons", () => {
    cy.visit("http://localhost:3000")
    // Page #1
    cy.getByData("course-0")
      .find("a")
      .contains("Get started")
      .click()
      .location("pathname")
      .should("eq", "/testing-your-first-application")

    // Page #2
    cy.getByData("next-lesson-button")
      .contains("Start Course")
      .click()
      .location("pathname")
      .should("eq", "/testing-your-first-application/app-install-and-overview")
    cy.getByData("challenge-answer-0").click()

    // Page #3
    cy.getByData("next-lesson-button")
      .should("exist")
      .click()
      .location("pathname")
      .should(
        "eq",
        "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
      )

    cy.getByData("challenge-answer-0").click()

    // Page #4

    cy.getByData("next-lesson-button")
      .should("exist")
      .click()
      .location("pathname")
      .should(
        "eq",
        "/testing-your-first-application/setting-up-data-before-each-test"
      )

    cy.getByData("challenge-answer-0").click()

    // Page #5
    cy.getByData("next-lesson-button")
      .should("exist")
      .contains("Complete Course")
      .click()
      .location("pathname")
      .should("eq", "/")
  })
})

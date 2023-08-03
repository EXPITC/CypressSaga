describe("home page", () => {
  context("macbook resolution", () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport("macbook-15")
    })
    it("the h1 contain the correct text", () => {
      cy.visit("http://localhost:3000")
      cy.get(`[data-test="hero-heading"]`)
        .should("be.visible")
        .contains("Testing Next.js Applications with Cypress")
    })

    it.only("the features on the homepage are correct", () => {
      cy.visit("http://localhost:3000")
      cy.get("dt").should("be.visible").eq(0).contains("4 Courses")
      cy.get("dt").should("be.visible").eq(1).contains("25+ Lessons")
      cy.get("dt").should("be.visible").eq(2).contains("Free and Open Source")
    })
  })
})

describe("home page", () => {
  context("macbook resolution", () => {
    beforeEach(() => {
      cy.viewport("macbook-15").visit("http://localhost:3000")
    })

    it("the h1 contain the correct text", () => {
      cy.get(`[data-test="hero-heading"]`)
        .should("be.visible")
        .contains("Testing Next.js Applications with Cypress")
    })

    it("the features on the homepage are correct", () => {
      cy.get("dt").should("be.visible").eq(0).contains("4 Courses")
      cy.get("dt").should("be.visible").eq(1).contains("25+ Lessons")
      cy.get("dt").should("be.visible").eq(2).contains("Free and Open Source")
    })
  })
})

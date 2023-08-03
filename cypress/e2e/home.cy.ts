describe("home page", () => {
  context("macbook resolution", () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport("macbook-15")
    })
    it("the h1 contain the correct text", () => {
      cy.visit("http://localhost:3000")
      cy.get("h1")
        .should("be.visible")
        .contains("Testing Next.js Applications with Cypress")
    })
  })
})

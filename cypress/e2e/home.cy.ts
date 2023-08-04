describe("home page", () => {
  context("macbook resolution", () => {
    beforeEach(() => {
      cy.viewport("macbook-15").visit("http://localhost:3000")
    })

    context("Hero section", () => {
      it("the h1 contain the correct text", () => {
        cy.getByData("hero-heading")
          .should("be.visible")
          .contains("Testing Next.js Applications with Cypress")
      })

      it("the features on the homepage are correct", () => {
        cy.get("dt").should("be.visible").eq(0).contains("4 Courses")
        cy.get("dt").should("be.visible").eq(1).contains("25+ Lessons")
        cy.get("dt").should("be.visible").eq(2).contains("Free and Open Source")
      })
    })

    context("Course Section", () => {
      it("Course: Testing First Next.js Applications", () => {
        cy.getByData("course-0").find("a").contains("Get started").click()
        cy.location("pathname").should(
          "equal",
          "/testing-your-first-application"
        )
      })

      it("Course: Testing Foundation", () => {
        cy.getByData("course-1").find("a").contains("Get started").click()
        cy.location("pathname").should("equal", "/testing-foundations")
      })

      it("Course: Cypress Fundamentals", () => {
        cy.getByData("course-2").find("a").contains("Get started").click()
        cy.location("pathname").should("equal", "/cypress-fundamentals")
      })
    })

    context.only("Footer Section", () => {
      it("Next Redirect", () => {
        cy.get("footer").find("a").eq(0).click()
        cy.origin("https://nextjs.org", () => {
          cy.url().should("eq", "https://nextjs.org/")
        })
      })

      it("Cypress redirect", () => {
        cy.get("footer").find("a").eq(1).click()
        cy.origin("https://www.cypress.io/", () => {
          cy.url().should("eq", "https://www.cypress.io/")
        })
      })

      it("Github redirect", () => {
        cy.get("footer").find("a").eq(2).click()
        cy.origin("https://github.com/", () => {
          cy.url().should("eq", "https://github.com/cypress-io/cypress")
        })
      })
    })
  })
})

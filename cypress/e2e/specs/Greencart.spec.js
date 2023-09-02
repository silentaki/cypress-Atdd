import GreenCartPage from "../pages/GreencartPage"
const greenCartPage = new GreenCartPage();

beforeEach(() => {
    cy.visit('seleniumPractise/#/')
  })
  describe('Green cart scenarios', () => {
      it('user is able to search an item', () => {
        greenCartPage.clickSearchItem();
      })
    })

  
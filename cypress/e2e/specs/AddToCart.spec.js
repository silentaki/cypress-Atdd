import GreenCartPage from "../pages/GreencartPage";
const greenCartPage = new GreenCartPage();
let data;
before(() => {
  cy.fixture("Greencart.json").then((value) => {
    return data = value
  });
});

beforeEach(() => {
  cy.visit("seleniumPractise/#/");
});

describe("Green cart scenarios", () => {
  it("user is able to add items to cart and verify the items added", () => {
    greenCartPage.verifyItemsAddedCount(2);
  });
});

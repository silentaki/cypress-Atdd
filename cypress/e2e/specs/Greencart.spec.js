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
  it("user is able to search an item", () => {
    greenCartPage.clickSearchItem(data.itemName1);
  });
});

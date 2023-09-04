import GreenCartPage from "../pages/GreencartPage";
const greenCartPage = new GreenCartPage();

let data;
before(() => {
  cy.fixture("Greencart.json").then((value) => {
    return (data = value);
  });
});

beforeEach(() => {
  cy.visit("seleniumPractise/#/");
});

describe("Green cart scenarios", () => {
  it(
    "user is able to search an item and verify the name",
    { tags: ["@regression"] },
    () => {
      greenCartPage.clickSearchItem(data.itemName1);
      greenCartPage.verifySearchItemName(data.itemName1);
    });

  it(
    "user is able to search an item and verify the price",
    { tags: ["@smoke"] },
    () => {
      greenCartPage.clickSearchItem(data.itemName1);
      greenCartPage.verifyItemPrice(data.item1Price);
    });

  it(
    "user is able to search an item and verify the weight",
    { tags: ["@smoke"] },
    () => {
      greenCartPage.clickSearchItem(data.itemName1);
      greenCartPage.verifySearchItemWeight(data.item1Weight);
    });
});

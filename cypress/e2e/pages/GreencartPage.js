import GreenCarSSelector from "../selectors/GreencartSelector.js";

class GreenCartPage {
  clickSearchItem(itemName) {
    GreenCarSSelector.searchItem.should("be.visible").click().type(itemName);
  }

  verifyItemPrice(itemValue) {
    GreenCarSSelector.itemPrice.should("be.visible").should("have.text", itemValue);
  }

  verifySearchItemName(itemName) {
    cy.wait(2000);
    GreenCarSSelector.searchItemName.should("be.visible").then((el) => {
      let getItemName = el.text().split(" ")[0];
      expect(itemName).eql(getItemName);
    });
  }

  verifySearchItemWeight(itemWeight) {
    GreenCarSSelector.searchItemName.should("be.visible").then((el) => {
      let getItemWeight = el.text().split(" ")[2];
      let getItemQuantity = el.text().split(" ")[3];
      expect(itemWeight).eql(`${getItemWeight} ${getItemQuantity}`);
    });
  }

  verifyItemsAddedCount(itemAdded) {
    const itemList = ["Brocolli", "Cauliflower"];
    GreenCarSSelector.searchItemName.each((el, index, list) => {
      let getItemName = el.text().split(" ")[0];
        if (itemList[index] === getItemName) {
          GreenCarSSelector.addToCartButton.eq(index).click();
        }
    })
    GreenCarSSelector.itemCount.should('be.visible').then ((el) =>{
        let count = el.text()
        expect(parseInt(count)).equals(itemAdded)
    })
  }

}

export default GreenCartPage;

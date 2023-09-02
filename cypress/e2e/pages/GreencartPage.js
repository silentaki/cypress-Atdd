import GreenCarSSelector from "../selectors/GreencartSelector.js"

class GreenCartPage {

    clickSearchItem(itemName) {
        GreenCarSSelector.searchItem.should('be.visible').click().type(itemName)
    }
}

export default GreenCartPage
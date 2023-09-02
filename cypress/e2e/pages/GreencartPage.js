import GreenCarSSelector from "../selectors/GreencartSelector.js"

class GreenCartPage {

    clickSearchItem() {
        GreenCarSSelector.searchItem.should('be.visible').click().type('cucumber')
    }
}

export default GreenCartPage
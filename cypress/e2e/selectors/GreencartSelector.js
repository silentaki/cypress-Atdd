class GreencartSelector {

    get searchItem() {
        return cy.get('input[class="search-keyword"]');
    }
}

export default new GreencartSelector
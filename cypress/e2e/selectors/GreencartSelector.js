class GreencartSelector {

    get searchItem() {
        return cy.get('input[class="search-keyword"]');
    }

    get searchItemName() {
        return cy.get('h4[class="product-name"]');
    }
    
    get itemPrice() {
        return cy.get('p[class="product-price"]')
    }

    get addToCartButton() {
        return cy.xpath('//button[text() ="ADD TO CART"]')
    }
    
    get itemCount() {
        return cy.xpath('//div[@class="cart-info"]//td/strong').first()
    }
}

export default new GreencartSelector
/// <reference types="cypress" />
class TranslationPage {


get sourceTranslation() {
    return cy.get('button[aria-label="More source languages"]');
  }

  get searchLanguage() {
    return cy.get('input[aria-label="Search languages"]');
  }

  get targetTranslation(){
      return cy.get('button[aria-label="More target languages"]');
  }
  get inputTranslation(){
      return cy.get('textarea[aria-label="Source text"]');
  }
  get spanishTranslation(){
      return cy.get('span[lang="es"]');
  }
  get swapTranslation(){
      return cy.get('button[aria-label="Swap languages (Cmd+Shift+S)"]');
  }
  get germanTranslation(){
      return cy.get('span[lang="de"]');
  }
  get selectInputTool(){
      return cy.get('a[aria-label="Show the Input Tools menu"]');
  }
  get inputValue(){
      return cy.get('span[class ="vk-cap"]');
  }

  get keyBoard(){
      return cy.get('span[class="ita-kd-menuitem-inputtool-name"]')
  }

  visit(url) {
    cy.visit(url)
}

 inputSourceLanguage(language){
    this.sourceTranslation.first().click()
    this.searchLanguage.first().type(`${language}`).type('{enter}')
}

 inputTargetLanguage(language){
    this.targetTranslation.first().click()
    this.searchLanguage.eq(1).type(language).type('{enter}')
}
 swaplanguageTranslation(){
    this.swapTranslation.first().click()
}
 
selectKeyBoard(name){
    this.keyBoard.contains(name).click()
}

enterKeys(key){
    this.inputValue.contains(key).click()
}

clearText(){

}

}

export const translationPage = new TranslationPage();
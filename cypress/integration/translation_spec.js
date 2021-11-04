/// <reference types="cypress" />

import {translationPage} from "../pages/translation"
import * as data from "../data/translation.json"

describe('google translation', function() {
    this.beforeAll(function () {
        translationPage.visit('https://translate.google.com/')

    })
    it('german to spanish translation', function() {
        translationPage.inputSourceLanguage(data.sourceLanguage)
        translationPage.inputTargetLanguage(data.targetLanguage)
        translationPage.inputTranslation.type(data.initialText)
        translationPage.spanishTranslation.invoke('text').should('contains', data.expectResult1)
    })
    it('spanish to german translation', function() {
        translationPage.swaplanguageTranslation()
        translationPage.germanTranslation.should('be.visible')
        translationPage.germanTranslation.invoke('text').should('contains', data.expectResult2)
    })

    it('select input tool', function() {
        translationPage.inputTranslation.first().clear()
        translationPage.selectInputTool.should('be.visible')
        translationPage.selectInputTool.click()
        translationPage.keyBoard.should('be.visible')
        translationPage.selectKeyBoard(data.targetLanguage)
        translationPage.inputValue.should('be.visible')
        translationPage.enterKeys('H')
        translationPage.enterKeys('i')
        translationPage.germanTranslation.invoke('text').should('contains', 'Hi')
    })
})
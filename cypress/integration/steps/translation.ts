import { Given } from 'cypress-cucumber-preprocessor/steps';
import { translationPage } from "../pages/translation";
import * as data from "../data/translation.json"


Given('User navigate to google translation page', () => {
  translationPage.visit("https://translate.google.com/");
});

Given('User translates word from german to spanish', () => {
  translationPage.inputSourceLanguage(data.sourceLanguage);
  translationPage.inputTargetLanguage(data.targetLanguage);
  translationPage.inputTranslation.type(data.initialText);
  translationPage.spanishTranslation
    .invoke("text")
    .should("contains", data.expectResult1);
});

Given('User swap the translation', () => {
  translationPage.swaplanguageTranslation();
  translationPage.germanTranslation.should("be.visible");
  translationPage.germanTranslation
    .invoke("text")
    .should("contains", data.expectResult2);
});

Given('User select input tool', () => {
  translationPage.clearText();
  translationPage.selectInputTool.should("be.visible");
  translationPage.selectInputTool.click();
  translationPage.keyBoard.should("be.visible");
  translationPage.selectKeyBoard(data.targetLanguage);
  translationPage.inputValue.should("be.visible");
  translationPage.enterKeys("h");
  translationPage.enterKeys("i");
  translationPage.germanTranslation.invoke("text").should("contains", "H");
});

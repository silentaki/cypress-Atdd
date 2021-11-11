Feature: : google
    google translation of word from german to spanish
    @TC
    Scenario: google translation
        Given User navigate to google translation page
        Then User translates word from german to spanish
        And User swap the translation
        And User select input tool
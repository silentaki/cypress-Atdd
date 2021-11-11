Feature: : google

    naviagate to google
    @test
    Scenario: navigate to google
        Given User navigate to google translation page
        Then User translates word from german to spanish
        And User swap the translation
        And User select input tool
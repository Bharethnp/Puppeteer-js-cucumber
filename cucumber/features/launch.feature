Feature: Launch
   I open google page

   Scenario: Launching google

      Given I launch chrome
      Then I open google and enter search text
      Then I tap on link
      Then I close browser


      Scenario: Launching google again

      Given I launch chrome
      Given I insert text details
      |text1|text2|text3|
      |Favicon|12345|qwerty|
      Then I close browser


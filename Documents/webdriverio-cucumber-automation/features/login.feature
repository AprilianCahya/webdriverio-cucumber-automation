@login
Feature: Login Feature

Background:
  Given I am on the login page

Scenario Outline: Login with valid credentials
  When I enter "<username>" and "<password>"
  And I click the login button
  Then I should see the dashboard

  Examples:
    | username     | password   |
    | user1        | pass1      |
    | user2        | pass2      |

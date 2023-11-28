Feature: To authorize the consent url received in consent api from the UI application
    @userlogin
    Background:
        Given A user web browser is in the consent url page
    Scenario Outline: Success Login
        When A user enters the username <username>, the password <password>, and clicks on the login button
        Examples:
            | username | password |
            | annidemo | 12345678 |
        And I select all the check boxes and click submit
        Then I receive a success message






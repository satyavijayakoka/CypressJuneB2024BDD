Feature: I want to test automation practice login page

    # Background: navigate to web page
    #     Given i navigate to login page

    # Scenario 1
    Scenario: verify login page for valid data
        Given i navigate to login page
        When i enter login uid and pw
        And i click on login button
        Then i verify login page

    # Scenario 2
    Scenario Outline: verify login page for multiple data
        Given i navigate to login page
        When i enter login <useremail> and <pw>
        And i click on login button
        Then i verify login page <useremail>

        Examples:
            | useremail             | pw         |
            | stagTesting@gmail.com | Satya#123  |
            | vijaya12@gmail.com    | vijaya@123 |

# Scenario 3
Scenario Outline: verify login page for multiple data
        Given i navigate to login page
        When i enter login1 "<useremail>" and "<pw>"
        And i click on login button
        Then i verify login page1 "<useremail>"

        Examples:
            | useremail             | pw         |
            | stagTesting@gmail.com | Satya#123  |
            | vijaya12@gmail.com    | vijaya@123 |
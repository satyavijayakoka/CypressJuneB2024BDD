Feature: verify add to cart functionality
    Scenario: verify add to cart functionality for cashew
        Given navigate to web page
        When i type ca in search box click on search button
        And i select cashew and add to cart
        And i proceed to check out
        Then i validate checkout page

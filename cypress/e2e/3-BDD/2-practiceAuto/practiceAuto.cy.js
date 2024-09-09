///<reference types="cypress" />

import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given('i navigate to login page',function(){
    cy.visit('https://practice.automationtesting.in/my-account/')
})

When('i enter login uid and pw',function(){
    cy.get('[id="username"]').type('vijaya12@gmail.com')
    cy.get('[id="password"]').type('vijaya@123')
})
And('i click on login button',function(){
   cy.get('[name="login"]').click()
})
Then('i verify login page',function(){
    let email = 'vijaya12@gmail.com'
    let uid = email.split("@")
    cy.get('strong').should('have.text',uid[0])
})

//------------------ scenario 2 --------------------------

When('i enter login {word} and {word}',(uid,pw)=>{
    cy.get('[id="username"]').type(uid)
    cy.get('[id="password"]').type(pw)
})
Then('i verify login page {word}',(em)=>{
    let email = em
    let uid = email.split("@")
    cy.get('strong').should('have.text',uid[0])

})

// ---------------------- scenario 3 ------------------------
When('i enter login1 {string} and {string}',(uid,pw)=>{
    cy.get('[id="username"]').type(uid)
    cy.get('[id="password"]').type(pw)
})

Then('i verify login page1 {string}',(em)=>{
    let email = em
    let uid = email.split("@")
    cy.get('strong').should('have.text',uid[0])
})
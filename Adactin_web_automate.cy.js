/// <reference types="cypress" />

describe("adactin_WEB_SIGNUP", function(){

it("open-url-adactin", function(){
    cy.visit("https://adactinhotelapp.com/Register.php", {timeout: 30000})
    .wait(500)
})

it("go-back-to-login", function(){
    cy.get('[align="right"] > a', {timeout: 30000})
    .click()
    .wait(500)
})
it("go-back-to-register", function(){
    cy.get('.login_register > a', {timeout: 30000}).click()
    .wait(500)
})
it("verify-working-or-not", function(){
    cy.get('#Submit').click()
    .wait(500)
})
it("enter-username", function(){
    cy.get('#username').type("alibasti2022")
    .wait(500)
})
it("enter-pass", function(){
    cy.get('#password').type("123456778987654443").wait(500)
})
it("confirm-pass", function(){
    cy.get('#re_password').type("alibasti2022").wait(500)
})
it("enter-full-name", function(){
    cy.get('#full_name').type("Ali Hassan Basti").wait(500)
})
it("enter-email", function(){
    cy.get('#email_add').type("ali.basti2021@gmail.com").wait(500)
})
it("read-captcha", function(){
    cy.get('#captcha').wait(300)
})
it("reload-captcha", function(){
    cy.get('#change-image > img').click().wait(300)
})
it("enter-captcha", function(){
    cy.get('#captcha-form').type("W2r$2e").wait(500)
})
it("tick-check-box", function(){
    cy.get('#tnc_box').click().wait(500)
})
it("check-terms&conditions", function(){
    cy.get('.reg_input > a').click().wait(500)
})

it("register-btn-click", function(){
    cy.get('#Submit').click().wait(1000)
})
it("reset-btn-click", function(){
    cy.get('#Reset').click().wait(500)
})
it("download-side-btn-1", function(){
    cy.get('.right_adv > tbody > :nth-child(1) > td > a').click().wait(500)
})

it("click-side-btn-1", function(){
    cy.get('.right_adv > tbody > :nth-child(2) > td > a').click().wait(500)
})

it("download-side-btn-2", function(){
    cy.get('.right_adv > tbody > :nth-child(2) > td > a').click().wait(500)
})
it("download-side-btn-3", function(){
    cy.get(':nth-child(4) > td > a').click().wait(500)
})
it("download-side-btn-3", function(){
    cy.get(':nth-child(4) > td > a').click().wait(500)
})

})

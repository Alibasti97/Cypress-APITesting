/// <reference types="cypress" />

describe("Signup Page", function(){

it("Load_URL", function(){
    cy.visit("https://www.buydomains.com/lander/martzone.com?domain=martzone.com&utm_source=martzone.com&utm_medium=click&utm_campaign=tdfs-AprTest&traffic_id=AprTest&traffic_type=tdfs&redirect=ono-redirect")
})
it("Contact_Details", function(){

    cy.xpath("//input[@id='firstname']").type("Hassan")
    cy.xpath("//input[@id='lastname']").type("Ali")
    cy.xpath("//input[@id='emailfield']").type("alibasti2021@gmail.com")
    cy.xpath("//input[@id='phonefield']").type("03131539047")
    cy.get("#country").select("Pakistan").should("have.value", "Pakistan")
})

})
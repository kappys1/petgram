/* global describe, it, cy */
describe('petgram', function () {
  it('App works', function () {
    cy.visit('/')
  })

  it('App go to categories', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('NavBar navigation works', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('No registered users go to register form', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})

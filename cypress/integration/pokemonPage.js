describe('Pokedex', function () {
  it('Specific pokemon page page can be opened', function () {
    cy.visit('http://localhost:5000/')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})

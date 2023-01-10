// eslint-disable-next-line no-undef
describe('template spec', () => {
  // eslint-disable-next-line no-undef
  it('Goes to the beerpage and finds a beer with the name Jupiler', () => {
    // eslint-disable-next-line no-undef
    cy.visit('/')
    // eslint-disable-next-line no-undef
    cy.contains('New Beer').click()
    // eslint-disable-next-line no-undef
    cy.get('#__BVID__19').type('Cypress')
    // eslint-disable-next-line no-undef
    cy.get('#__BVID__20').type('Cypress is very good at testing')
    // eslint-disable-next-line no-undef
    cy.get('#__BVID__21').type('5')
    // eslint-disable-next-line no-undef
    cy.contains('Submit').click()
    // eslint-disable-next-line no-undef
    cy.wait(2000)
    // eslint-disable-next-line no-undef
    cy.contains('Beers').click()
    // eslint-disable-next-line no-undef
    cy.get(':nth-child(2) > .card-body > :nth-child(3) > a').click()
    // eslint-disable-next-line no-undef
    cy.contains('Cypress')
    // eslint-disable-next-line no-undef
    cy.contains('Delete').click()
    // eslint-disable-next-line no-undef
    cy.reload()
  })
})
describe('user can create a contact', () => {
  it('test', () => {
    cy.visit('http://localhost:3001')
    cy.get('#add-contact').click()
    cy.get("#name").type("Fraser Hughes");
    cy.get('#email').type('Fraser.Hughes@btinternet.com');
    cy.get('#phone').type('1234 567890');
    cy.get('#company').type('Craft Academy');
    cy.get('#notes').type('Thats me!');
    cy.get('#twitter').type('@Fraser_Hughes_');
    cy.get('#submit').click()
  });
  it('displays name of the new contact', () => {
    cy.get('#contact-list').should('contain', 'Fraser Hughes')
  });
  it('displays phone number of the new contact', () => {
    cy.get('#contact-list').should('contain', '1234 567890')
  });
});
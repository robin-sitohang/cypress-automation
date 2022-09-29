describe('Feature Login', () => {
    it('User Successfully Login"', () => {
      cy.visit(Cypress.env('url_liberta_stg'))
      cy.get('#input-component-auth-email')
          .type(Cypress.env('email'))
      cy.get('#input-component-auth-password')
          .type(Cypress.env('password'))
      cy.get('.mt-10.mb-12.px-12.py-3.button.normal').click()
      // cy.xpath('//*[@id="app"]/div/div[2]/div[1]/div/div[1]/div[1]/div').should('be.visible')
      cy.xpath('//*[@id="app"]/div[2]/nav/div[3]/div[1]/span').should('have.text', 'Super Admin | robin.sitohang@thelionparcel.com')  
    })

  it('Get Error Login With Mismatch Password"', () => {
      cy.visit(Cypress.env('url_liberta_stg'))
      cy.get('#input-component-auth-email')
          .type(Cypress.env('email'))
      cy.get('#input-component-auth-password')
          .type('123456')
      cy.get('.mt-10.mb-12.px-12.py-3.button.normal').click() 
    })
  })


   
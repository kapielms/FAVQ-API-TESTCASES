
describe('FavQs Demo', () => {
  
    it('Hit FavQs link', () => {
      cy.visit('https://favqs.com/api')
      cy.wait(300)
      cy.title().should('eq','FavQs - FavQs API v2')
  
      cy.get('#login-button').click()
      cy.wait(300)
      cy.get('body.container:nth-child(2) div.content:nth-child(2) div.row div.col-sm-6:nth-child(1) div.card div.card-header > h1:nth-child(1)').contains("Sign In")
     
      cy.wait(300)
  
      cy.get('#login').type("solankikapil1991@gmail.com")
      cy.get('#password').type("01befaf73bbb967be")
      cy.wait(300)
      cy.get("input[value='Sign In']").click()
      cy.wait(300)
    })
  
    })
    
    
  
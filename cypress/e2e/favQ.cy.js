describe ('PUT CALL FOR FAV QUOTES',()=>{
    let  userSessionToken = null;
   before("Creating a session token ",()=>{
        
    it('login session', ()=>{

         const options = {
            method : 'POST',
            url: 'https://favqs.com/api/session',
            headers : 
                        {
                        Authorization: 'Bearer 9b65584adbabddbd8b0377721902bc7f',
                        'Content-Type': 'application/json'
                         },
                         
            body: {
                "user": {
                    "login": "solankikapil1991@gmail.com",
                    "password": "01befaf73bbb967be"
                  }
            },       
            }
        cy.log('befor calling')
        cy.request(options)
            .then((res) =>{
                cy.log('inside then')
                cy.log('printing response')
                authToken=res.body.User-Token
                expect(res.status).to.equal(201)
        })
    })
    it('Mark Fav',()=> {
        const options = {
            method : 'PUT',
            url: 'https://favqs.com/api/quotes/38749/fav',
            headers : {
                Authorization: 'Bearer 9b65584adbabddbd8b0377721902bc7f' ,
                'Content-Type': 'application/json',
                'User-Token': userSessionToken
            },
            failOnStatusCode: false,
                        
            }
        cy.log('befor calling')
        cy.request(options)
            .then((res) =>{
                cy.log('inside then')
                cy.log('printing response')
                cy.log(res.body)
                expect(res.status).to.equal(200)
                
        })

    })
})
    it('Mark Fav quote not found',()=>{
        const options = {
            method : 'PUT',
            url: 'https://favqs.com/api/quotes/387499999/fav',
            headers : {
                Authorization: 'Bearer 9b65584adbabddbd8b0377721902bc7f' ,
                'Content-Type': 'application/json',
                'User-Token': userSessionToken
            },
            failOnStatusCode: false,
            body: 
                     {
                        "error_code": 40,
                        "message": "Quote not found."
                      
                     }
            }

             cy.log('befor calling')
             cy.request(options)
            .then((res) =>{
                cy.log('inside then')
                cy.log('printing response')
                cy.log(res.body)
                expect(res.body.error_code).to.equal(40)
                expect(res.body.message).to.equal("Quote not found.")
            
        })

    })

    it('Unmark Fav Quotes',()=> {
        const options = {
            method : 'PUT',
            url: 'https://favqs.com/api/quotes/38749/unfav',
            headers : {

                Authorization: 'Bearer 9b65584adbabddbd8b0377721902bc7f' ,
                'Content-Type': 'application/json',
                'User-Token': userSessionToken
            },
            failOnStatusCode: false,
            
            }
        cy.log('befor calling')
        cy.request(options)
            .then((res) =>{
                cy.log('inside then')
                cy.log('printing response')
                cy.log(res.body)
                expect(res.status).to.equal(200)
        })
    })
})
    it('Private quotes cannot be unfav' ,()=>{
        const options = {
            method : 'PUT',
            url: 'https://favqs.com/api/quotes/4/unfav',
            headers : {
                
                Authorization: 'Bearer 9b65584adbabddbd8b0377721902bc7f' ,
                'Content-Type': 'application/json',
                'User-Token': userSessionToken

            },
            failOnStatusCode: false,
           
       }

             cy.log('befor calling')
             cy.request(options)
            .then((res) =>{
                cy.log('inside then')
                cy.log('printing response')
                cy.log(res.body)
                expect(res.body.error_code).to.equal(41)
                expect(res.body.message).to.equal("Private quotes cannot be unfav'd.")
                
     })

})


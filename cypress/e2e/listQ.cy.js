const Ajv = require('ajv') //ajv library for validating and comparing schema
const ajv = new Ajv()


describe ('GET CALL FOR LIST QUOTES',()=>{

    it('Validating code 200',()=> {
        const options = {
            method : 'GET',
            url: 'https://favqs.com/api/quotes',
            headers : {
              Authorization: 'Bearer 9b65584adbabddbd8b0377721902bc7f' ,
              'Content-Type': 'application/json',
              'User-Token': userSessionToken
            }
        };
        cy.request(options)
            .then((res) =>{
            expect(res.status).to.equal(200)
            expect (res.statusText).to.equal("OK")
            expect(res.body.quotes.length).to.equal(25)
        })

    })  
    
    it('Validating code  401',()=> {
        const options = {
            method : 'GET',
            url: 'https://favqs.com/api/quotes',
            headers : {
              Authorization: '' ,
              'Content-Type': 'application/json',
              'User-Token': userSessionToken
            },
            failOnStatusCode: false
        };
        console.log('before calling')
        cy.request(options)
            .then((res) =>{
            expect(res.status).to.equal(401)
            expect (res.statusText).to.equal("Unauthorized")
           
        })
   
    
    })  
    
    it('Validating code 404',()=> {
        const options = {
            method : 'GET',
            url: 'https://favqs.com/api/quotes/filter',
            headers : {
              Authorization: 'Bearer 9b65584adbabddbd8b0377721902bc7f' ,
              'Content-Type': 'application/json',
              'User-Token': userSessionToken
            },
            failOnStatusCode: false
        };
        console.log('before calling')
        cy.request(options)
            .then((res) =>{
            expect(res.status).to.equal(404)
            expect (res.statusText).to.equal("Not Found")
           
        })
   
    
    }) 

    it.only('Validating Funny - code 200 /Query Parametre',()=> {
        const options = {
            method : 'GET',
            url: 'https://favqs.com/api/quotes/?filter=funny',
            qs : { page:1},
            headers : {
              Authorization: 'Bearer 9b65584adbabddbd8b0377721902bc7f' ,
              'Content-Type': 'application/json',
              'User-Token': userSessionToken
            },

            failOnStatusCode: false
        };
        cy.request(options)
            .then((res) =>{
            expect(res.status).to.equal(200)
            expect(res.statusText).to.equal("OK")
            expect(res.body.page).to.equal(1)
            expect(res.body.quotes).has.length(25)
            expect(res.body.quotes[0]).have.property('id',1265)
            expect(res.body.quotes[0]).have.property('favorites_count',1)
           
        })
   
    
    }) 

    it('Validating Hidden - 200',()=> {
        const options = {
            method : 'GET',
            url: 'https://favqs.com/api/quotes/?hidden=1',
            headers : {
              Authorization: 'Bearer 9b65584adbabddbd8b0377721902bc7f' ,
                'Content-Type': 'application/json',
                'User-Token': userSessionToken
            },
            failOnStatusCode: false
        };
        cy.request(options)
            .then((res) =>{
            expect(res.status).to.equal(200)
            expect(res.statusText).to.equal("OK")
           
        })
    }) 

    it('Validating Schema ',()=> {
        const options = {
            method : 'GET',
            url: 'https://favqs.com/api/quotes',
            headers : {
              Authorization: 'Bearer 9b65584adbabddbd8b0377721902bc7f' ,
              'Content-Type': 'application/json',
              'User-Token': userSessionToken
            }
        };
        const schema =  {
          "$schema": "http://json-schema.org/draft-07/schema#",
          "title": "Generated schema for Root",
          "type": "object",
          "properties": {
            "page": {
              "type": "number"
            },
            "last_page": {
              "type": "boolean"
            },
            "quotes": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "number"
                  },
                  "dialogue": {
                    "type": "boolean"
                  },
                  "private": {
                    "type": "boolean"
                  },
                  "tags": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "url": {
                    "type": "string"
                  },
                  "favorites_count": {
                    "type": "number"
                  },
                  "upvotes_count": {
                    "type": "number"
                  },
                  "downvotes_count": {
                    "type": "number"
                  },
                  "author": {
                    "type": "string"
                  },
                  "author_permalink": {
                    "type": "string"
                  },
                  "body": {
                    "type": "string"
                  },
                  "source": {
                    "type": "string"
                  }
                },
                "required": [
                  "id",
                  "dialogue",
                  "private",
                  "tags",
                  "url",
                  "favorites_count",
                  "upvotes_count",
                  "downvotes_count",
                  "author",
                  "author_permalink",
                  "body"
                ]
              }
            }
          },
          "required": [
            "page",
            "last_page",
            "quotes"
          ]
        } //Schema End Here
        const validate = ajv.compile(schema)  
        cy.request(options)
            .then((res) =>{
             const isvalid = validate(res.body)
              expect(isvalid).to.be.true
               
        }) 
                 

    })
    
    
})

/// <reference types = 'cypress' />

describe('POST REQ', () =>{

it('POST Request user', () =>{

    cy.request({

        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users',
        headers: {

            'Authorization':  'Bearer 537b18f79eed86279fc19d1c0def5385b0c771bebcf9f105fd7330fbf08b012a',

        },
        body: { 
                  "name": "Shashikala Butt",
                  "gender": "male",
                  "email": "alibasti24748@gmail.com",
                  "status": "active"
                },
                }).then((res)=>{

                    expect(res.body.data).has.property('email', 'shashikald_butt@fay.com')
                    expect(res.status).to.eq(201)
                })
})
    })
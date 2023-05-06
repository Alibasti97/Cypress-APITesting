/// <reference types = 'cypress' />

describe('GET API', ()=>{


    it('Get Request 1', () =>{

        cy.request({


                method : 'GET',
                url : 'https://gorest.co.in/public-api/users',
                headers: {
                    "Authorization" : 'Bearer 2c7e9386982e6897bd2a574936e22ed10c0f0781e03766eaa4bdc5c53d1f865c'
                }
        }).then((res)=>{
            expect(res.status).to.eq(200);
            expect(res.body.meta.pagination.total).to.eq(2500);
            expect(res.body.code).to.eq(200);
        })


    })



    it('Get Request by ID', () =>{

        cy.request({


                method : 'GET',
                url : 'https://gorest.co.in/public-api/users/776475',
                headers: {
                    "Authorization" : 'Bearer 2c7e9386982e6897bd2a574936e22ed10c0f0781e03766eaa4bdc5c53d1f865c'
                }
        }).then((res)=>{
            expect(res.status).to.eq(200);
            expect(res.body.code).to.eq(200);
            expect(res.body.data.name).to.include('Sethi')
        })


    })




})
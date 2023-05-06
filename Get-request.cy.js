/// <reference types='cypress' />

describe('GetAPIRequest', () => { 
    
    it('Get1', () =>{

        cy.request({


            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users/359'
    
        }).then((res)=>{
            cy.expect(res.status).to.eq(200);
            cy.expect(res.body.id).to.eq(359);
            cy.expect(res.body.name).to.include('Naik');
           
        })



    })
    

 })
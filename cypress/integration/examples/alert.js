describe('handling alerts', function(){

    beforeEach(function() {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    })

    it('Alert Type', function() {

      

        cy.on('windows:alert', function(alertText){
            expect(alertText).eq('I am a JS Alert')
        })
        cy.contains('Click for JS Alert').click()
    })

    it('Confirm Alert Type', function() {

       

        cy.on('windows:confirm', function(confirmText){
            return false
        })
        cy.contains('Click for JS Confirm').click()

    })

})
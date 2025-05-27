class registerPage {
        RegisterList(){
            const register = {
                buttonRegister: "[href='/register']",
                userField: "[name='username']",
                emailField: "[name='email']",
                passwordField: "[name='password']",
                submitRegister: "[value='Finalizar registro']"
            }
            return register
        }

        acessPageIndex(){
            cy.visit('https://foxchaser.vercel.app/')
        }

        enterPageRegister(){
            cy.get(this.RegisterList().buttonRegister).eq(0).click()
        }

        urlCheckRegister(){
            cy.url().should('include', 'https://foxchaser.vercel.app/register')
        }

        submitRegister(){
            cy.get(this.RegisterList().submitRegister).click()
        }

        registerWithUser(username,email, password){
            cy.get(this.RegisterList().userField).type(username)
            cy.get(this.RegisterList().emailField).type(email)
            cy.get(this.RegisterList().passwordField).type(password)
        }

}

export default registerPage
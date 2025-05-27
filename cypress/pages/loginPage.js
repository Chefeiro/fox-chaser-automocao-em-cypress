class LoginPage {
    loginList() {
        const selectors = {
            usernameField: "[name='email']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            enterPageLogin: "[href='/login']"
        }
        return selectors
    }

    urlCheckLogin(){
        cy.url().should('include','https://foxchaser.vercel.app/login')
    }

    loginWithUsers(email, password){
        cy.get(this.loginList().usernameField).type(email)
        cy.get(this.loginList().passwordField).type(password)
        

    }

    submitLogin(){
        cy.get(this.loginList().loginButton).click( {force: true})
    }

    enterPageLogin(){
        cy.get(this.loginList().enterPageLogin).click( {force: true})
        }
    
}

export default LoginPage
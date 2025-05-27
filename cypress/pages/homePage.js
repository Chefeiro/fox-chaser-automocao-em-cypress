import { verificarPostagemApareceu } from '../support/utils'

class homePage {
    homeList() {
        const selectors = {
            buttonCreator: ".sc-kprGbJ",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            enterPageLogin: "[href='/login']",
            imagePostCreate: "[rotate='0']",
            formField: '.sc-lkcIho',
            gameField: "[data-value='']",
            valorantOption: '#react-select-2-option-0 > span',
            tagField: "[data-value='']",
            doubtOption: '#react-select-3-option-0',
            tittleField: "[name='title']",
            imageField: "[type='file']",
            checkImageInField: '.sc-jtJlRs',
            submitButton: "[type='submit']",
            testProfilePage: 'https://foxchaser.vercel.app/profile/usuariodeteste',
            threePointButton: '.sc-liaBrn',
            deletPost: '.itmAmI',
            buttonDelet: '.hTFtHU',
            homePage: 'https://foxchaser.vercel.app/home/',
            logoutButton: '.sc-kIKDeO',
        }
        return selectors
    }

    urlCheckHome(){
        cy.url().should('include', 'https://foxchaser.vercel.app/home/')
    }

    creatingButton(){
        cy.get(this.homeList().buttonCreator).click( {force: true})
        cy.get(this.homeList().imagePostCreate).click( {force: true})
        cy.get(this.homeList().formField)
        cy.get(this.homeList().gameField).eq(0).click( {force: true})
        cy.get(this.homeList().valorantOption).click( {force: true})
        cy.get(this.homeList().tagField).eq(1).click()
        cy.get(this.homeList().doubtOption).click( {force: true})
        cy.get(this.homeList().tittleField).type('Valorant e um jogo multiplayer?')
        cy.get(this.homeList().imageField).selectFile('image.jpg', {force: true})
        cy.get(this.homeList().checkImageInField)
        cy.wait(1000)
        cy.get(this.homeList().submitButton).click().click()
        cy.wait(1500)
        cy.visit(this.homeList().testProfilePage)
        verificarPostagemApareceu()
        cy.get(this.homeList().threePointButton).eq(0).click( {force: true})
        cy.wait(500)
        cy.get(this.homeList().deletPost).eq(0).click( {force: true})
        cy.wait(500)
        cy.get(this.homeList().buttonDelet).click( {force: true})
    }

     logout(){
        cy.visit(this.homeList().homePage)
        cy.get(this.homeList().logoutButton).click()
        cy.url().should('include', 'https://foxchaser.vercel.app/')
     }
    
}

export default homePage
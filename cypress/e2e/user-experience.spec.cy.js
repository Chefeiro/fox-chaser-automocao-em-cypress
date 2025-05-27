import userData from '../fixtures/user-Data.json'
import registerPage from '../pages/registerPage'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'

const home = new HomePage
const login = new LoginPage
const RegisterPage = new registerPage
const Chance = require('chance');


const chance = new Chance()

describe('Login - Register FULL and Post Process | FoxChaser |', () => {
    it('Register Fail Username 1 character', () => {
        RegisterPage.acessPageIndex()
        RegisterPage.enterPageRegister()
        RegisterPage.urlCheckRegister()
        RegisterPage.registerWithUser(userData.userFail.username1Caracter,userData.userFail.email,userData.userFail.password)
        RegisterPage.submitRegister()
        RegisterPage.urlCheckRegister()
    })
    it('Register Fail Username more 50 character', () => {
        RegisterPage.acessPageIndex()
        RegisterPage.enterPageRegister()
        RegisterPage.urlCheckRegister()
        RegisterPage.registerWithUser(userData.userFail.username50MoreCaracter,userData.userFail.email,userData.userFail.password)
        RegisterPage.submitRegister()
        RegisterPage.urlCheckRegister()
    })
    it('Register Email Fail at @', () => {
        RegisterPage.acessPageIndex()
        RegisterPage.enterPageRegister()
        RegisterPage.urlCheckRegister()
        RegisterPage.registerWithUser(userData.userFail.username,userData.userFail.emailwithoutOne,userData.userFail.password)
        RegisterPage.submitRegister()
        RegisterPage.urlCheckRegister()
    })
    it('Register Email Fail at . ', () => {
        RegisterPage.acessPageIndex()
        RegisterPage.enterPageRegister()
        RegisterPage.urlCheckRegister()
        RegisterPage.registerWithUser(userData.userFail.username,userData.userFail.emailwithoutTwo,userData.userFail.password)
        RegisterPage.submitRegister()
        RegisterPage.urlCheckRegister()
    })
    it('Register Password Fail < 5 character', () => {
        RegisterPage.acessPageIndex()
        RegisterPage.enterPageRegister()
        RegisterPage.urlCheckRegister()
        RegisterPage.registerWithUser(userData.userFail.username,userData.userFail.emailwithoutOne,userData.userFail.password5Caracter)
        RegisterPage.submitRegister()
        RegisterPage.urlCheckRegister()
    })
    // -------------------------------------------------
    // !!!!!!!!! CRIAÇÃO DE CONTA ALEATORIA !!!!!!!!!!!!
    // -------------------------------------------------
    // it('Register Sucess', () => {
    //     cy.visit('https://foxchaser.vercel.app/')
    //     cy.get("[href='/register']").eq(0).click()
    //     cy.url('https://foxchaser.vercel.app/register')
    //     cy.get("[name='username']").type(chance.first())
    //     cy.get("[name='email']").type(chance.email())
    //     cy.get("[name='password']").type(chance.string({ length: 6, pool: 'abcde' }))
    //     cy.get("[value='Finalizar registro']").click()
    //     cy.url('https://foxchaser.vercel.app/login')
    // })

        it('Login Success', () => {
        RegisterPage.acessPageIndex()
        cy.wait(500)
        login.enterPageLogin()
        login.urlCheckLogin()
        cy.wait(500)
        login.loginWithUsers(userData.userSucess.email,userData.userSucess.password)
        login.submitLogin()
        cy.wait(500)
        home.logout()
    })
        it('Creating post and deleting', () => {
        RegisterPage.acessPageIndex()
        login.enterPageLogin()
        login.urlCheckLogin()
        login.loginWithUsers(userData.userSucess.email,userData.userSucess.password)
        login.submitLogin()
        home.urlCheckHome()
        home.creatingButton()
        home.logout()
    })

        // !!!!! AVISO !!!!
        // ------------------------------------------
        // Possivel CRASH devido hospedagem GRATUITA
        // -------------------------------------------
        // it('Editing profile', () => {
        // RegisterPage.acessPageIndex()
        // cy.get("[href='/login']").click( {force: true})
        // cy.url().should('include','https://foxchaser.vercel.app/login')
        // cy.get("[name='email']").type(userData.userSucess.email)
        // cy.get("[name='password']").type(userData.userSucess.password)
        // cy.get("[type='submit']").click( {force: true})
        // cy.url().should('include', 'https://foxchaser.vercel.app/home/')
        // cy.get("[href='/profile/usuariodeteste']").click({force: true})
        // cy.get('.jRSpSG').click({force: true})
        // cy.get("[name='profilePicture']").selectFile('image.jpg', {force: true})
        // cy.get("[name='coverPicture']").selectFile('image.jpg', {force: true})
        // cy.get("[value='Salvar']").click()
        // })

})
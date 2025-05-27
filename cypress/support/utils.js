import HomePage from '../pages/homePage'

function criarPostagemNovamente() {
  const home = new HomePage()
  cy.visit('https://foxchaser.vercel.app/home/') // volta pra home
  home.creatingButton() // recomeça o ciclo
}


export function verificarPostagemApareceu(tentativa = 0) {
  if (tentativa > 5) {
    cy.log('❌ Postagem não encontrada após 5 tentativas. Reiniciando o processo...')
    criarPostagemNovamente()
    return
  }

  cy.reload()
  cy.wait(1000)

 cy.get('body', { timeout: 10000 }).then(($body) => {
    if ($body.find('.hkuFnF').length > 0) {
      cy.log('✅ Postagem encontrada')
    } else {
      cy.log(`🔁 Tentativa ${tentativa + 1}: Recarregando...`)
      verificarPostagemApareceu(tentativa + 1)
    }
  })
}
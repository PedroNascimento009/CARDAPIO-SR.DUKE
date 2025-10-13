export function tabs() {
  document.querySelectorAll('.main-category').forEach(sec => {
    sec.style.display = 'none'
  })

  document.querySelector('.active').style.display = 'block'

  const mostrar = (n) => document.querySelector(n).style.display = 'block'

  document.querySelectorAll('.category-button').forEach(botao => {
    botao.addEventListener('click', () => {
      document.querySelectorAll('.main-category').forEach(sec => {
        sec.style.display = 'none'
      })

      const nome = botao.dataset.category
      mostrar(nome)
    })
  })
}

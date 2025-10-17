export function tabs() {
  document.querySelectorAll('.category-button').forEach(botao => {
    botao.addEventListener('click', () => {
      const categoria = botao.dataset.category
      console.log("Botão clicado! Categoria:")
      pegarDados(categoria)
    })
  })
}

async function pegarDados(aba) {
  try {
    const resp = await fetch(`/assets/pages/categories/${aba}.html`)
    const dados = await resp.text()
    document.querySelector('#category-container').innerHTML = dados
  } catch {
    console.error("Erro ao buscar aba:", error);
    document.querySelector('#category-container').innerHTML = "Aba não encontrada"
  }
}
async function buscarPrato(categoria, idPrato) {
    try {
        const resp = await fetch(`/assets/pages/categories/${categoria}.html`);
        const html = await resp.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const pratoOriginal = doc.querySelector(`#${idPrato}`);
        return pratoOriginal;
    } catch (error) {
        console.error(`Erro ao buscar prato ${idPrato} em ${categoria}:`, error);
        return null;
    }
}

export async function exibirPratoDaSemana() {
    const pratosSemana = {
        1: { categoria: 'mainDish', id: 'file-vinho' },
        2: { categoria: 'mainDish', id: 'peixe-maracuja' },
        3: { categoria: 'mainDish', id: 'risoto-camarao' },
        4: { categoria: 'mainDish', id: 'polvo-grelhado' },
        5: { categoria: 'mainDish', id: 'file-vinho' },
    };

    const container = document.querySelector('#week-dish');
    const hoje = new Date();
    const dia = hoje.getDate();
    const semana = Math.min(Math.ceil(dia / 7), 5);
    const { categoria, id } = pratosSemana[semana];

    const pratoOriginal = await buscarPrato(categoria, id);

    if (pratoOriginal && container) {
        const clone = pratoOriginal.cloneNode(true);
        const precoElement = clone.querySelector('.price');
        if (precoElement) {
            const textoOriginal = precoElement.textContent.trim();
            const valor = parseFloat(textoOriginal.replace(/[^\d,\.]/g, '').replace(',', '.'));
            if (!isNaN(valor)) {
                const valorComDesconto = valor * 0.8;
                precoElement.textContent = `R$ ${valorComDesconto.toFixed(2).replace('.', ',')} (promoção)`;
            }
        }

        container.innerHTML = '';
        container.appendChild(clone);
    }
}
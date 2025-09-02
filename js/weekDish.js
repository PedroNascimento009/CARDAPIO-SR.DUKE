export function exibirPratoDaSemana() {
    const pratosSemana = {
        1: 'file-vinho',
        2: 'polvo-grelhado',
        3: 'risoto-nordestino',
        4: 'arroz-duke',
    };

    const container = document.getElementById('week-dish');
    const hoje = new Date();
    const dia = hoje.getDate();
    const semana = Math.min(Math.ceil(dia / 7), 4);
    const idPrato = pratosSemana[semana];

    const pratoOriginal = document.getElementById(idPrato);
    if (pratoOriginal && container) {
        const clone = pratoOriginal.cloneNode(true);

        // Aplica desconto no preço
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

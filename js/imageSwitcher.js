export function iniciarTrocaDeImagens() {
    const figuras = [
        document.getElementById("imagem1"),
        document.getElementById("imagem2")
    ];

    let indice = 0;

    setInterval(() => {
        const atual = figuras[indice];
        const proxima = figuras[(indice + 1) % figuras.length];

        atual.classList.remove("visivel");
        proxima.classList.add("visivel");

        indice = (indice + 1) % figuras.length;
    }, 4000);
}
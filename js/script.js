// IMG Reveal Scroll
function abrirTabs(id) {
    document.querySelectorAll('.main-category').forEach(sec => {
        sec.style.display = 'none';
    });

    const secAtual = document.getElementById(id);
    secAtual.style.display = 'block';

    verificarVisibilidade();
}

function verificarVisibilidade() {
    const dishes = document.querySelectorAll(".category-dish-item, .cocktail-item");
    const windowHeight = window.innerHeight;

    dishes.forEach(dish => {
        const img = dish.querySelector("img");
        if (!img) return;

        const rect = img.getBoundingClientRect();

        if (rect.top > windowHeight / 5 && rect.bottom < windowHeight * 3.8 / 4.7) {
            dish.classList.add("visible");
        } else {
            dish.classList.remove("visible");
        }
    });
}

document.addEventListener("scroll", verificarVisibilidade);

document.addEventListener("DOMContentLoaded", verificarVisibilidade);


//TABS NAVBAR
function openTabs(IdTab) {
    var category = document.getElementsByClassName('main-category');

    for (var i = 0; i < category.length; i++) {
        category[i].style.display = 'none';
    }

    document.getElementById(IdTab).style.display = "block";
}

//TROCA DE IMGS
const figuras = [document.getElementById("imagem1"), document.getElementById("imagem2")];
let indice = 0;

setInterval(() => {
    const atual = figuras[indice];
    const proxima = figuras[(indice + 1) % figuras.length];

    atual.classList.remove("visivel");
    proxima.classList.add("visivel");

    indice = (indice + 1) % figuras.length;
}, 4000);
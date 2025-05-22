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
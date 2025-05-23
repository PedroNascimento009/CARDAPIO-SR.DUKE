export function verificarVisibilidade() {
    const dishes = document.querySelectorAll(".category-dish-item, .cocktail-item");
    const windowHeight = window.innerHeight;

    dishes.forEach(dish => {
        const img = dish.querySelector("img");
        if (!img) return;

        const rect = img.getBoundingClientRect();

        if (rect.top > windowHeight / 5 && rect.bottom < windowHeight * 4.8 / 4.7) {
            dish.classList.add("visible");
        } else {
            dish.classList.remove("visible");
        }
    });
}

export function iniciarScrollReveal() {
    document.addEventListener("scroll", verificarVisibilidade);
    document.addEventListener("DOMContentLoaded", verificarVisibilidade);
}
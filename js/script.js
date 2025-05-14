//INTRO
setTimeout(() => {
    document.getElementById("introdution").classList.add("visivel");
}, 1000);

// IMG Reveal Scroll
document.addEventListener("scroll", function () {
    const dish = document.querySelectorAll(".cont-dish");
    const windowHeight = window.innerHeight;

    dish.forEach(dish => {
        const img = dish.querySelector("img");
        const rect = img.getBoundingClientRect();

        if (rect.top > windowHeight / 5 && rect.bottom < windowHeight * 3.8 / 4.7) {
            dish.classList.add("visible");
        } else {
            dish.classList.remove("visible");
        }
    });
});

//TABS NAVBAR
function abrirTabs(IdTab) {
    var category = document.getElementsByClassName('main-category');

    for (var i = 0; i < category.length; i++) {
        category[i].style.display = 'none';
    }

    document.getElementById(IdTab).style.display = "block";
    document.getElementById('intro').style.display = "none";
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
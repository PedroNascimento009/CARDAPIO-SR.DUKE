import { verificarVisibilidade } from 'js/scrollReveal.js';

export function abrirTabs(id) {
    document.querySelectorAll('.main-category').forEach(sec => {
        sec.style.display = 'none';
    });

    const secAtual = document.getElementById(id);
    secAtual.style.display = 'block';

    verificarVisibilidade();
}

window.abrirTabs = abrirTabs;

export function openTabs(IdTab) {
    var category = document.getElementsByClassName('main-category');

    for (var i = 0; i < category.length; i++) {
        category[i].style.display = 'none';
    }

    document.getElementById(IdTab).style.display = "block";
}

window.openTabs = openTabs;
import { verificarVisibilidade } from './scrollReveal.js';

export function abrirTabs(id) {
  document.querySelectorAll('.main-category').forEach(sec => {
    sec.style.display = 'none';
  });

  const secAtual = document.getElementById(id);
  secAtual.style.display = 'block';

  verificarVisibilidade();
}

export function openTabs(IdTab) {
  const category = document.getElementsByClassName('main-category');

  for (let i = 0; i < category.length; i++) {
    category[i].style.display = 'none';
  }

  document.getElementById(IdTab).style.display = "block";
}

window.openTabs = openTabs;
window.abrirTabs = abrirTabs;
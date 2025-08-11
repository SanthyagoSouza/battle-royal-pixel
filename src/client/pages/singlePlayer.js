import {router} from '../router.js';

export function renderSinglePlayer() {

    const app = document.getElementById('app');
    // alert("Renderizando o menu...");
    app.innerHTML = `
    <h1>teste</h1>`;

}

  // do0cument.querySelectorAll("a[data-page]").forEach(link => {
  //   // console.log("Adicionando evento de clique ao link: ", link.dataset.page);
  //   link.addEventListener("click", e => {
  //       // console.log("Evento de clique detectado no link: ", e.target.dataset.page);
  //     e.preventDefault(); // evita reload
  //     const page = e.target.dataset.page;
  //     router(page);
  //   });
  // });

export function renderSinglePlayer() {
  document.body.innerHTML = `
    <h1>Single Player</h1>
    <p>Jogo carregado aqui</p>
    <button id="voltar">Voltar ao menu</button>
  `;

  document.getElementById("voltar").addEventListener("click", () => {
    import("./menu.js").then(module => module.renderMenu());
  });
}
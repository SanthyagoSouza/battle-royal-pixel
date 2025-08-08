import {router} from '../router.js';

export function renderMenu() {

    const app = document.getElementById('app');
    // alert("Renderizando o menu...");
    app.innerHTML = `
    <header>
    <h1 class="cabecalho">Battle Royal Pixel</h1>
  </header>

  <main>
    <section>
      <p class="conteudo">Welcome to the Battle Royal Pixel game!</p>
      <p class="conteudo">Click to begin your chaotic journey.</p>
    </section>

        <nav>
        <ul class="remove-estilo-table">
            <li><a class="links" data-page="singleplayer" href="#">▶ Play Solo</a></li>
            <li><a class="links" data-page="localmulti" href="#">👥 Multiplayer Local</a></li>
            <li><a class="links" data-page="onlinemulti" href="#">🌐 Multiplayer Online</a></li>
            <li><a class="links" data-page="curiosidades" href="#">❓ Curioso?</a></li>
        </ul>
        </nav>

    <div id="loading">Loading... Get ready to click como um maluco!</div>
  </main>

  <!-- Som opcional (bobeira, mas divertido) -->
  <audio id="clickSound" src="https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg" preload="auto"></audio>`;

}

document.querySelectorAll("a").forEach(btn => {
    console.log("Ir para:", btn);
    btn.addEventListener("click", () => {
  
    });
});

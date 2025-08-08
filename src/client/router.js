import { renderMenu } from "./pages/menu.js";
import { renderSinglePlayer } from "./pages/singlePlayer.js";
// futuramente: localmulti.js, onlinemulti.js, etc.

export function router(page) {
    console.log("Roteador iniciado com a página:", page);
  switch (page) {
      case "menu":
        console.log("Navegando para a página:", page);
      renderMenu();
      break;
    case "singleplayer":
        console.log("Navegando para a página:", page);
      renderSinglePlayer();
      break;
    default:
      console.error("Página não encontrada:", page);
  }
}

router("menu")

 
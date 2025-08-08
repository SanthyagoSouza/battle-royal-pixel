import { renderMenu } from "./pages/menu.js";
// import { renderSinglePlayer } from "./pages/singlePlayer.js";
// futuramente: localmulti.js, onlinemulti.js, etc.

export function router(page) {
    
  switch (page) {
    case "menu":
      renderMenu();
      break;
    case "singleplayer":
    //   renderSinglePlayer();
      break;
    default:
      console.error("Página não encontrada:", page);
  }
}

router("menu")

 
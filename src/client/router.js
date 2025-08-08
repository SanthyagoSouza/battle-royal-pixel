import { renderMenu } from "./pages/menu.js";

function router(page) {
  if (page === "menu") renderMenu();

}

router("menu"); 
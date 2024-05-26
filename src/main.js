import GenerateWorld from "./modules/GenerateWorld.js";
import GenerateTail from "./modules/GenrateTail.js";

document.addEventListener("DOMContentLoaded", () => {
  GenerateWorld(14, 32, "game-board");
});

GenerateTail();

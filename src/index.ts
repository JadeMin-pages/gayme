import { game } from "./games";
import { registerScenes, SCENES } from "./scenes";



// Register all scenes
registerScenes(game);

// Start the game with the title scene
game.scene.start(SCENES.TitleScene.name);
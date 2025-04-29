import type { Game } from 'phaser';

import TitleScene from "./title.ts";
import GameScene from "./game.ts";



export const SCENES = {
	GameScene,
	TitleScene
};

export function registerScenes(game: Game) {
	for (const scene of Object.values(SCENES)) {
		game.scene.add(scene.name, scene);
	}
}
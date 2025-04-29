import { Scene } from 'phaser';

import { userConfig } from "../games/config.ts";



export default class GameScene extends Scene {
	public constructor() {
		super({
			key: GameScene.name,
			physics: {
				arcade: {
					debug: true
				}
			}
		});
	}

	public preload() {
		this.load.image("tiles", "/tiles.png");
		this.load.tilemapTiledJSON("tilemap", "/tilemap.json");
	}

	public create() {
		const map = this.make.tilemap({ key: "tilemap" });

		const tileset = map.addTilesetImage("tiles", "tiles")!;

		const bgLayer = map.createLayer("background", tileset)!;
		const objLayer = map.createLayer("object", tileset)!;

		bgLayer.setPosition(userConfig.marginWidth / 2, userConfig.marginHeight / 2);
		objLayer.setPosition(userConfig.marginWidth / 2, userConfig.marginHeight / 2);
		objLayer.setCollisionByProperty({ collides: true });
	}
}
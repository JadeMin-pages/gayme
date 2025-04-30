import type { Types } from 'phaser';

import { Scene } from 'phaser';

import { userConfig } from "../games/config.ts";



export default class GameScene extends Scene {
	public constructor() {
		super({
			key: GameScene.name,
			physics: {
				default: "arcade",
				arcade: {
					debug: true
				}
			}
		});
	}

	public preload() {
		this.load.spritesheet("player", "/player.jpg", {
			frameWidth: 32,
			frameHeight: 32
		});

		this.load.image("Grass", "/tilemap/Tilesets/Grass.png");
		this.load.image("Hills", "/tilemap/Tilesets/Hills.png");
		this.load.image("Bitmask references 1", "/tilemap/Tilesets/Bitmask references 1.png");
		this.load.image("Bitmask references 2", "/tilemap/Tilesets/Bitmask references 2.png");
		this.load.image("Tilled Dirt", "/tilemap/Tilesets/Tilled Dirt.png");
		this.load.image("Tilled_Dirt_v2", "/tilemap/Tilesets/Tilled_Dirt_v2.png");
		this.load.image("Dirt", "/tilemap/Tilesets/Tilled_Dirt_Wide.png");
		this.load.image("Tilled_Dirt_Wide_v2", "/tilemap/Tilesets/Tilled_Dirt_Wide_v2.png");
		this.load.image("Water", "/tilemap/Tilesets/Water.png");
		this.load.image("Wooden_House_Roof_Tilset", "/tilemap/Tilesets/Wooden_House_Roof_Tilset.png");
		this.load.image("Wooden_House_Walls_Tilset", "/tilemap/Tilesets/Wooden_House_Walls_Tilset.png");
		this.load.image("Free Chicken Sprites", "/tilemap/Tilesets/Free Chicken Sprites.png");
		this.load.image("Free_Chicken_House", "/tilemap/Objects/Free_Chicken_House.png");
		this.load.tilemapTiledJSON("tilemap", "/tilemap/map.json");
	}

	public create() {
		const map = this.make.tilemap({ key: "tilemap" });

		const tilesets = {
			grass: map.addTilesetImage("Grass", "Grass")!,
			hills: map.addTilesetImage("Hills", "Hills")!,
			bitmask1: map.addTilesetImage("Bitmask references 1", "Bitmask references 1")!,
			bitmask2: map.addTilesetImage("Bitmask references 2", "Bitmask references 2")!,
			dirt: map.addTilesetImage("Tilled_Dirt", "Tilled Dirt")!,
			dirt_v2: map.addTilesetImage("Tilled_Dirt_v2", "Tilled_Dirt_v2")!,
			dirt_wide: map.addTilesetImage("Tilled Dirt Wide", "Tilled Dirt Wide")!,
			dirt_wide_v2: map.addTilesetImage("Tilled_Dirt_Wide_v2", "Tilled_Dirt_Wide_v2")!,
			water: map.addTilesetImage("Water", "Water")!,
			wooden_house_roof: map.addTilesetImage("Wooden_House_Roof_Tilset", "Wooden_House_Roof_Tilset")!,
			wooden_house_walls: map.addTilesetImage("Wooden_House_Walls_Tilset", "Wooden_House_Walls_Tilset")!,
			free_chicken_sprites: map.addTilesetImage("Free Chicken Sprites", "Free Chicken Sprites")!,
			free_chicken_house: map.addTilesetImage("Free_Chicken_House", "Free_Chicken_House")!,
		};


		const bgLayer = map.createLayer("background", [
			tilesets.grass,
			tilesets.hills
		])!;
		const objLayer = map.createLayer("dirt", [
			tilesets.bitmask1,
			tilesets.bitmask2,
			tilesets.dirt,
			tilesets.dirt_v2,
			tilesets.dirt_wide,
			tilesets.dirt_wide_v2,
			tilesets.free_chicken_house,
			tilesets.water,
		])!;

		bgLayer.setPosition(
			userConfig.marginWidth / 2,
			userConfig.marginHeight / 2
		);
		objLayer.setPosition(
			userConfig.marginWidth / 2,
			userConfig.marginHeight / 2
		);
		objLayer.setCollisionByProperty({ collides: true });

		const player = this.physics.add.sprite(
			userConfig.marginWidth / 2 + 16,
			userConfig.marginHeight / 2 + 16,
			"player"
		)!.setName("player");
		player.setCollideWorldBounds(true);
	}

	public update() {
		const cursors = this.input.keyboard?.createCursorKeys()!;
		const player = this.children.getByName("player") as Types.Physics.Arcade.SpriteWithStaticBody;

		if (cursors.left.isDown) {
			player.setVelocity(-160, 0);
		} else if (cursors.right.isDown) {
			player.setVelocity(160, 0);
		} else if (cursors.up.isDown) {
			player.setVelocity(0, -160);
		} else if (cursors.down.isDown) {
			player.setVelocity(0, 160);
		} else {
			player.setVelocity(0, 0);
		}

		if (cursors.left.isUp) {
			player.setFlipX(false);
		} else if (cursors.right.isUp) {
			player.setFlipX(true);
		} else if (cursors.up.isUp) {
			player.setFlipY(false);
		} else if (cursors.down.isUp) {
			player.setFlipY(true);
		} else {
			player.setFlipX(false);
			player.setFlipY(false);
		}
	}
}
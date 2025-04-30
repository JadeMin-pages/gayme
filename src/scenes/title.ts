import { Scene } from 'phaser';

import { SCENES } from "./index.ts";



export default class TitleScene extends Scene {
	public constructor() {
		super({
			key: TitleScene.name,
		});
	}

	public create() {
		const startBtn = this.add.text(
			this.cameras.main.centerX,
			this.cameras.main.centerY,
			"Game Start",
			{
				fontSize: "32px",
				color: "#fff",
				align: "center",
			}
		);
		
		startBtn.setOrigin(0.5, 0.5);
		startBtn.setInteractive({ useHandCursor: true });

		startBtn.on("pointerover", () => {
			startBtn.setStyle({ fill: "#0f0" });
		});
		startBtn.on("pointerout", () => {
			startBtn.setStyle({ fill: "#fff" });
		});
		startBtn.on("pointerdown", () => {
			this.scene.start(SCENES.GameScene.name);
		});
	}
}
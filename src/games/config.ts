import type { Types } from 'phaser';

import { CANVAS, Scale } from 'phaser';



export const userConfig = {
	marginWidth: 600,
	marginHeight: 400,
};

export const gameConfig = {
	type: CANVAS,
	width: 512 + userConfig.marginWidth,
	height: 512 + userConfig.marginHeight,
	scale: {
		mode: Scale.FIT,
		autoCenter: Scale.CENTER_BOTH,
	},
	physics: {
		default: "arcade",
		arcade: {
			debug: true,
		}
	},
	//backgroundColor: "#FFFFFF"
} satisfies Types.Core.GameConfig;
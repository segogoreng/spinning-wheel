import 'phaser';
import { GameConstants } from './game-constants';
import { GameScene } from './game-scene';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: GameConstants.GAME_WIDTH,
    height: GameConstants.GAME_HEIGHT,
    backgroundColor: GameConstants.BACKGROUND_COLOR,
    parent: 'game',
    scene: [GameScene],
};

export class Game extends Phaser.Game {}

window.onload = () => {
    const game = new Game(config);
};

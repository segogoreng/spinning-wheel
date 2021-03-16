import 'phaser';
import { GAME_FACADE_KEY } from './constants';
import { GameConstants } from './game-constants';
import { GameFacade } from './game-facade';
import { GameScene } from './game-scene';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: GameConstants.GAME_WIDTH,
    height: GameConstants.GAME_HEIGHT,
    parent: 'game',
    scene: [GameScene],
};

export class Game extends Phaser.Game {}

window.onload = () => {
    const game = new Game(config);
    const gameFacade = GameFacade.getInstance(GAME_FACADE_KEY);
    gameFacade.startup();
};

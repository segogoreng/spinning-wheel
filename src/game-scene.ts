import 'phaser';
import { GameConstants } from './game-constants';

export class GameScene extends Phaser.Scene {
    private wheel: Phaser.GameObjects.Sprite;
    private pin: Phaser.GameObjects.Sprite;

    constructor() {
        super({ key: 'GameScene' });
    }

    preload(): void {
        this.load.image('wheel', '../assets/wheel.png');
        this.load.image('pin', '../assets/pin.png');
    }

    create(): void {
        this.wheel = this.add.sprite(GameConstants.GAME_WIDTH / 2, GameConstants.GAME_HEIGHT / 2, 'wheel');
        this.pin = this.add.sprite(this.wheel.x, this.wheel.y, 'pin');
    }

    update(time): void {}
}

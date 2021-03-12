import 'phaser';
import { GameConstants } from './game-constants';

export class GameScene extends Phaser.Scene {
    private bgMusic: Phaser.Sound.BaseSound;
    private wheel: Phaser.GameObjects.Sprite;
    private text: Phaser.GameObjects.Text;
    private spinSFX: Phaser.Sound.BaseSound;
    private spinning = false;
    private spaceKey: Phaser.Input.Keyboard.Key;
    private emitter: Phaser.GameObjects.Particles.ParticleEmitter;

    constructor() {
        super({ key: 'GameScene' });
    }

    preload(): void {
        this.load.image('wheel', '../assets/wheel.png');
        this.load.image('pin', '../assets/pin.png');
        this.load.image('red', '../assets/red.png');

        this.load.audio('bg-music', '../assets/boden.ogg');
        this.load.audio('spinning', '../assets/spin.mp3');
    }

    create(): void {
        this.bgMusic = this.sound.add('bg-music', {
            loop: true,
            volume: 0.25,
        });

        this.bgMusic.play();

        this.spinSFX = this.sound.add('spinning');

        this.wheel = this.add.sprite(GameConstants.GAME_WIDTH / 2, GameConstants.GAME_HEIGHT / 2, 'wheel');
        this.add.sprite(this.wheel.x, this.wheel.y, 'pin');

        this.text = this.add.text(GameConstants.GAME_WIDTH / 2, GameConstants.GAME_HEIGHT - 30, 'Spin The Wheel', {
            fontSize: '32px',
            align: 'center',
            color: 'blue',
        });
        this.text.setOrigin(0.5);

        const particles = this.add.particles('red');
        this.emitter = particles.createEmitter({
            speed: 500,
            scale: { start: 0.7, end: 0 },
            blendMode: 'ADD',
        });
        this.emitter.startFollow(this.wheel);
        this.emitter.stop();

        this.input.on('pointerdown', this.spinWheel, this);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    spinWheel(): void {
        if (this.spinning) return;

        const rounds = Phaser.Math.Between(4, 6);
        const degrees = Phaser.Math.Between(0, 360);
        const prizeIndex = GameConstants.SLICES - 1 - Math.floor(degrees / (360 / GameConstants.SLICES));
        const prize = GameConstants.PRIZES[prizeIndex];
        this.spinning = true;
        this.spinSFX.play();
        this.emitter.start();

        this.tweens.add({
            targets: [this.wheel],
            angle: 360 * rounds + degrees,
            duration: GameConstants.ROTATION_ANIMATION_DURATION,
            ease: 'Cubic.easeOut',
            callbackScope: this,
            onComplete: (tween) => {
                this.text.setText(prize);
                this.spinning = false;
                this.spinSFX.stop();
                this.emitter.stop();
            },
        });
    }

    update(): void {
        if (this.spaceKey.isDown) {
            this.spinWheel();
        }
    }
}

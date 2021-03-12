export class GameConstants {
    static readonly GAME_WIDTH = 600;
    static readonly GAME_HEIGHT = 600;

    static readonly BACKGROUND_COLOR = 0xeeeeee;

    static readonly PRIZES = [
        'KEY',
        '50 STARS',
        '500 STARS',
        'PLEASE TRY AGAIN',
        '200 STARS',
        '100 STARS',
        '150 STARS',
        'PLEASE TRY AGAIN',
    ];

    static readonly SLICES = GameConstants.PRIZES.length;

    static readonly ROTATION_DURATION_PER_DEGREE = 4;
}

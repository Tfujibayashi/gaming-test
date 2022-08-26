import { ValueObject } from '~/models';
import Validator from '~/util/validator';

type GameStateType = 'PLAY' | 'GAME_OVER';

export class GameState extends ValueObject<GameStateType> {
  get isGameOver(): boolean {
    return this.value === 'GAME_OVER';
  }

  constructor(value: GameStateType) {
    // validation
    GameState.validate(value, 'プレイヤー名');

    super(value);
  }

  static validate(value: string, description: string): void {
    const validator = new Validator({ value, description });

    validator.string();
  }

  static empty(): GameState {
    return new GameState('PLAY');
  }

  copy(): GameState {
    return new GameState(this.value);
  }

  reset(): void {
    this._value = 'PLAY';
  }

  gameOver(): void {
    this._value = 'GAME_OVER';
  }
}

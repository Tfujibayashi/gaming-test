import { EMPTY_STRING } from '~/constants';
import { ValueObject } from '~/models';
import Validator from '~/util/validator';

export class PlayerName extends ValueObject<string> {
  constructor(value: string) {
    // validation
    PlayerName.validate(value, 'プレイヤー名');

    super(value);
  }

  static validate(value: string, description: string): void {
    const validator = new Validator({ value, description });

    validator.string();
  }

  static empty(): PlayerName {
    return new PlayerName(EMPTY_STRING);
  }

  copy(): PlayerName {
    return new PlayerName(this.value);
  }
}

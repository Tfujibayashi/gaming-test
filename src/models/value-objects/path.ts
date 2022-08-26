import { EMPTY_STRING } from '~/constants';
import { ValueObject } from '~/models';
import Validator from '~/util/validator';

export class Path extends ValueObject<string> {
  constructor(value: string) {
    // validation
    Path.validate(value, 'パス');

    super(value);
  }

  static validate(value: string, description: string): void {
    const validator = new Validator({ value, description });

    validator.string();
  }

  static empty(): Path {
    return new Path(EMPTY_STRING);
  }

  copy(): Path {
    return new Path(this.value);
  }
}

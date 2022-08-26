import { EMPTY_NUMBER } from '~/constants';
import { ValueObject } from '~/models';
import Validator from '~/util/validator';

export class Coordinate extends ValueObject<number> {
  constructor(value: number) {
    // validation
    Coordinate.validate(value, '座標');

    super(value);
  }

  static validate(value: number, description: string): void {
    const validator = new Validator({ value, description });

    validator.number();
  }

  static empty(): Coordinate {
    return new Coordinate(EMPTY_NUMBER);
  }

  copy(): Coordinate {
    return new Coordinate(this.value);
  }

  add(coordinate: Coordinate): void {
    this._value = this.value + coordinate.value;
  }

  subtract(coordinate: Coordinate): void {
    this._value = this.value - coordinate.value;
  }

  isLarge(coordinate: Coordinate): boolean {
    return this.value > coordinate.value;
  }
}

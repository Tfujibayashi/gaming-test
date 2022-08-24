import { EMPTY_NUMBER } from '~/constants';
import { ValueObject } from '~/models/common-class';

export class Coordinate extends ValueObject<number> {
  static create(value: number): Coordinate {
    // validation

    return new Coordinate(value);
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

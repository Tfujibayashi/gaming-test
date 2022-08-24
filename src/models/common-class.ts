import { shallowEqual } from 'shallow-equal-object';

import { EMPTY_NUMBER, EMPTY_STRING } from '~/constants';

abstract class BaseModel<T> {
  _value: T;

  protected constructor(_value: T) {
    this._value = _value;
  }

  isEqual(vo?: BaseModel<T>): boolean {
    if (vo == null) {
      return false;
    }

    return shallowEqual(this._value, vo._value);
  }
}

export abstract class Entity<T> extends BaseModel<T> {
  get props(): T {
    return this._value;
  }

  abstract copy(): Entity<T>;

  assign(props: Partial<T>): void {
    Object.assign(this._value, props);
  }
}

export abstract class EntityList<T, C extends EntityList<T, C>> extends BaseModel<Array<T>> {
  get isEmpty(): boolean {
    return this.value.length === 0;
  }

  get isNotEmpty(): boolean {
    return !this.isEmpty;
  }

  get value(): Array<T> {
    return this._value;
  }

  get length(): number {
    return this.value.length;
  }

  unshift(item: T): void {
    this._value = [item, ...this.value];
  }

  push(item: T): void {
    this._value = [...this.value, item];
  }
}

export abstract class ValueObject<T extends string | number> extends BaseModel<T> {
  get isEmpty(): boolean {
    if (typeof this.value === 'string') {
      return this.value === EMPTY_STRING;
    } else {
      return this.value === EMPTY_NUMBER;
    }
  }

  get isNotEmpty(): boolean {
    return !this.isEmpty;
  }

  get value(): T {
    return this._value;
  }

  abstract copy(): ValueObject<T>;
}

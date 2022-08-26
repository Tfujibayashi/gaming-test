import { shallowEqual } from 'shallow-equal-object';

import { EMPTY_NUMBER, EMPTY_STRING } from '~/constants';

export abstract class Entity<T> {
  get props(): Entity<T> {
    return this;
  }

  constructor(params: T) {
    Object.assign(this, params);
  }

  abstract copy(): Entity<T>;

  assign(props: Partial<T>): void {
    Object.assign(this, props);
  }

  isEqual(vo?: Entity<T>): boolean {
    if (vo == null) {
      return false;
    }

    return shallowEqual(this, vo);
  }
}

export abstract class EntityList<T> {
  _value: T[];

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

  constructor(items?: T[]) {
    this._value = items || [];
  }

  unshift(item: T): void {
    this._value = [item, ...this.value];
  }

  push(item: T): void {
    this._value = [...this.value, item];
  }
}

export abstract class ValueObject<T extends string | number> {
  _value: T;

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

  constructor(value: T) {
    this._value = value;
  }

  abstract copy(): ValueObject<T>;
}

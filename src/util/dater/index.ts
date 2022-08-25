import dayjs, { ConfigType, Dayjs, ManipulateType, OpUnitType } from 'dayjs';

import { DateType } from '~/types';

// https://day.js.org/en/
export default class Dater {
  private _dayjs: Dayjs;

  constructor(date?: ConfigType, locale = 'ja') {
    this._dayjs = dayjs(date).locale(locale);
  }

  static toDateType(value: ConfigType): DateType {
    return dayjs(value).format('YYYY-MM-DD') as DateType;
  }

  addDay(value: number): Dater {
    return this._add(value, 'day');
  }

  addMonth(value: number): Dater {
    return this._add(value, 'month');
  }

  diffDay(target: Dater): number {
    const targetDate = target.format();

    return this._diff(targetDate, 'day');
  }

  /**
   * 月初を取得する
   */
  startOfMonth(): Dater {
    return this.startOf('month');
  }

  /**
   * 月末を取得する
   */
  endOfMonth(): Dater {
    return this.endOf('month');
  }

  format(format = 'YYYY-MM-DD'): DateType {
    return this._dayjs.format(format) as DateType;
  }

  /**
   * 対象時刻より前か判断する
   */
  isBefore(target: Dater): boolean {
    return this._dayjs.isBefore(target.format());
  }

  /**
   * 対象時刻より後か判断する
   */
  isAfter(target: Dater): boolean {
    return this._dayjs.isAfter(target.format());
  }

  /**
   * 月・週などの開始日を取得する
   */
  private startOf(unit: OpUnitType): Dater {
    const target = this._dayjs.startOf(unit);

    return new Dater(target);
  }

  /**
   * 月・週などの終了日を取得する
   */
  private endOf(unit: OpUnitType): Dater {
    const target = this._dayjs.endOf(unit);

    return new Dater(target);
  }

  /**
   * 年・月・日の単位で加算する
   */
  private _add(value: number, unit?: ManipulateType): Dater {
    const addDate = this._dayjs.add(value, unit);

    return new Dater(addDate);
  }

  /**
   * 年・月・日の単位で差分を取得する
   */
  private _diff(date: string, unit?: OpUnitType): number {
    return this._dayjs.diff(date, unit);
  }
}

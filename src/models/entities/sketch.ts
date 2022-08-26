import p5 from 'p5';

import { Coordinate, Entity } from '~/models';

type Props = {
  x: Coordinate;
  y: Coordinate;
  vx: Coordinate;
  vy: Coordinate;
};

export class Sketch<T extends Props> extends Entity<Props> {
  x!: Coordinate;
  y!: Coordinate;
  vx!: Coordinate;
  vy!: Coordinate;

  constructor(props: Props) {
    super(props);
  }

  static empty(): Sketch<Props> {
    return new Sketch({
      x: Coordinate.empty(),
      y: Coordinate.empty(),
      vx: Coordinate.empty(),
      vy: Coordinate.empty(),
    });
  }

  copy(): Sketch<T> {
    return new Sketch({
      x: this.x.copy(),
      y: this.y.copy(),
      vx: this.vx.copy(),
      vy: this.vy.copy(),
    });
  }

  updatePosition(): void {
    this.x.add(this.vx);
    this.y.add(this.vy);
  }

  draw(p: p5): void {
    p.square(this.x.value, this.y.value, 40);
  }
}

import p5 from 'p5';

import { Coordinate, Sketch } from '~/models';

type Props = {
  x: Coordinate;
  y: Coordinate;
  vx: Coordinate;
  vy: Coordinate;
  // name: PlayerName;
};

export class PlayerSketch extends Sketch<Props> {
  x!: Coordinate;
  y!: Coordinate;
  vx!: Coordinate;
  vy!: Coordinate;

  get isAlive(): boolean {
    return this.y.value < 600;
  }

  constructor(props: Props) {
    super(props);
  }

  static empty(): PlayerSketch {
    return new PlayerSketch({
      x: Coordinate.empty(),
      y: Coordinate.empty(),
      vx: Coordinate.empty(),
      vy: Coordinate.empty(),
      // name: PlayerName.empty(),
    });
  }

  copy(): PlayerSketch {
    return new PlayerSketch({
      x: this.x.copy(),
      y: this.y.copy(),
      vx: this.vx.copy(),
      vy: this.vy.copy(),
      // name: this.name.copy(),
    });
  }

  applyGravity(vy: Coordinate): void {
    this.vy.add(vy);
  }

  applyJump = (value: number): void => {
    this.vy = new Coordinate(value);
  };

  draw(p: p5): void {
    p.square(this.x.value, this.y.value, 40);
  }
}

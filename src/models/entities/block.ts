import p5 from 'p5';

import { Coordinate, Entity } from '~/models';

type Props = {
  x: Coordinate;
  y: Coordinate;
  vx: Coordinate;
  vy: Coordinate;
};

export class Block extends Entity<Props> {
  x!: Coordinate;
  y!: Coordinate;
  vx!: Coordinate;
  vy!: Coordinate;

  constructor(props: Props) {
    super(props);
  }

  static empty(): Block {
    return new Block({
      x: Coordinate.empty(),
      y: Coordinate.empty(),
      vx: Coordinate.empty(),
      vy: Coordinate.empty(),
    });
  }

  copy(): Block {
    return new Block({
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
    p.rect(this.x.value, this.y.value, 80, 400);
  }
}

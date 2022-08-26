import p5 from 'p5';

import { Coordinate, Entity, PlayerName } from '~/models';

type Props = {
  x: Coordinate;
  y: Coordinate;
  vx: Coordinate;
  vy: Coordinate;
  name: PlayerName;
};

export class Player extends Entity<Props> {
  x!: Coordinate;
  y!: Coordinate;
  vx!: Coordinate;
  vy!: Coordinate;
  name!: PlayerName;

  get isAlive(): boolean {
    return this.y.value < 600;
  }

  constructor(props: Props) {
    super(props);

    Object.assign(this, props);
  }

  static empty(): Player {
    return new Player({
      x: Coordinate.empty(),
      y: Coordinate.empty(),
      vx: Coordinate.empty(),
      vy: Coordinate.empty(),
      name: PlayerName.empty(),
    });
  }

  copy(): Player {
    return new Player({
      x: this.x.copy(),
      y: this.y.copy(),
      vx: this.vx.copy(),
      vy: this.vy.copy(),
      name: this.name.copy(),
    });
  }

  updatePosition(): void {
    this.x.add(this.vx);
    this.y.add(this.vy);
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

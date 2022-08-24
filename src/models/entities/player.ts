import p5 from 'p5';

import { Entity } from '~/models/common-class';
import { Coordinate } from '~/models/value-objects';

type Props = {
  x: Coordinate;
  y: Coordinate;
  vx: Coordinate;
  vy: Coordinate;
};

export class Player extends Entity<Props> {
  get isAlive(): boolean {
    return this.props.y.value < 600;
  }

  static create(props: Props): Player {
    return new Player(props);
  }

  static empty(): Player {
    return new Player({
      x: Coordinate.empty(),
      y: Coordinate.empty(),
      vx: Coordinate.empty(),
      vy: Coordinate.empty(),
    });
  }

  copy(): Player {
    return Player.create({
      x: this.props.x.copy(),
      y: this.props.y.copy(),
      vx: this.props.vx.copy(),
      vy: this.props.vy.copy(),
    });
  }

  updatePosition(): void {
    this.props.x.add(this.props.vx);
    this.props.y.add(this.props.vy);
  }

  applyGravity(vy: Coordinate): void {
    this.props.vy.add(vy);
  }

  applyJump = (value: number): void => {
    this.props.vy = Coordinate.create(value);
  };

  draw(p: p5): void {
    p.square(this.props.x.value, this.props.y.value, 40);
  }
}

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
  get isAlive(): boolean {
    return this.props.y.value < 600;
  }

  constructor(props: Props) {
    super(props);
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
      x: this.props.x.copy(),
      y: this.props.y.copy(),
      vx: this.props.vx.copy(),
      vy: this.props.vy.copy(),
      name: this.props.name.copy(),
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
    this.props.vy = new Coordinate(value);
  };

  draw(p: p5): void {
    p.square(this.props.x.value, this.props.y.value, 40);
  }
}

import p5 from 'p5';

import { Coordinate, Entity } from '~/models';

type Props = {
  x: Coordinate;
  y: Coordinate;
  vx: Coordinate;
  vy: Coordinate;
};

export class Block extends Entity<Props> {
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

  draw(p: p5): void {
    p.rect(this.props.x.value, this.props.y.value, 80, 400);
  }
}

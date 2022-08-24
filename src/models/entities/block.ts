import p5 from 'p5';

import { Entity } from '~/models/common-class';
import { Coordinate } from '~/models/value-objects';

type Props = {
  x: Coordinate;
  y: Coordinate;
  vx: Coordinate;
  vy: Coordinate;
};

export class Block extends Entity<Props> {
  static create(props: Props): Block {
    return new Block(props);
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

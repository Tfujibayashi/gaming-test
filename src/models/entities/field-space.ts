import { Entity } from '~/models/common-class';
import { Coordinate, Path } from '~/models/value-objects';

type Props = {
  x: Coordinate;
  y: Coordinate;
  vx: Coordinate;
  vy: Coordinate;
  imagePath: Path;
};

export class FieldSpace extends Entity<Props> {
  constructor(props: Props) {
    super(props);
  }

  static empty(): FieldSpace {
    return new FieldSpace({
      x: Coordinate.empty(),
      y: Coordinate.empty(),
      vx: Coordinate.empty(),
      vy: Coordinate.empty(),
      imagePath: Path.empty(),
    });
  }

  copy(): FieldSpace {
    return new FieldSpace({
      x: this.props.x.copy(),
      y: this.props.y.copy(),
      vx: this.props.vx.copy(),
      vy: this.props.vy.copy(),
      imagePath: this.props.imagePath.copy(),
    });
  }
}

import p5 from 'p5';

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
  x!: Coordinate;
  y!: Coordinate;
  vx!: Coordinate;
  vy!: Coordinate;
  imagePath!: Path;
  image!: p5.Image;

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
      x: this.x.copy(),
      y: this.y.copy(),
      vx: this.vx.copy(),
      vy: this.vy.copy(),
      imagePath: this.imagePath.copy(),
    });
  }

  preload(p: p5): void {
    this.image = p.loadImage(this.imagePath.value);
  }

  draw(p: p5): void {
    p.image(this.image, this.x.value, this.y.value);
  }
}

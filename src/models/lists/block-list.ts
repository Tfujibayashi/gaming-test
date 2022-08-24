import p5 from 'p5';

import { EntityList } from '~/models/common-class';
import { Block } from '~/models/entities';
import { Coordinate } from '~/models/value-objects';

export class BlockList extends EntityList<Block, BlockList> {
  static create(blocks: Block[] = []): BlockList {
    return new BlockList(blocks);
  }

  static empty(): BlockList {
    return new BlockList([]);
  }

  copy(): BlockList {
    return new BlockList(this.value);
  }

  filterByX(x: Coordinate): BlockList {
    const blocks = this.value.filter((item) => {
      return item.props.x.isLarge(x);
    });

    return new BlockList(blocks);
  }

  updatePosition(): void {
    for (const item of this.value) {
      item.updatePosition();
    }
  }

  draw(p: p5): void {
    for (const item of this.value) {
      item.draw(p);
    }
  }
}

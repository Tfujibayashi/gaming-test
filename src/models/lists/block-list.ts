import p5 from 'p5';

import { Block, Coordinate, EntityList } from '~/models';

export class BlockList extends EntityList<Block, BlockList> {
  constructor(blocks: Block[] = []) {
    super(blocks);
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

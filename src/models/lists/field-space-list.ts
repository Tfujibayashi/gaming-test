import { EntityList, FieldSpace } from '~/models';

export class FieldSpaceList extends EntityList<FieldSpace> {
  constructor(fieldSpaces: FieldSpace[] = []) {
    super(fieldSpaces);
  }

  static empty(): FieldSpaceList {
    return new FieldSpaceList([]);
  }

  copy(): FieldSpaceList {
    return new FieldSpaceList(this.value);
  }
}

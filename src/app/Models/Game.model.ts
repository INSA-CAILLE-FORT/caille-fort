import {OrganModel} from './Organ.model';
import {OceanPartModel} from './OceanPart.model';

export class GameModel{
  constructor(public id: number,
              public name: string,
              public organ: OrganModel,
              public oceanPart: OceanPartModel) {
    this.id = id;
    this.name = name;
    this.organ = organ;
    this.oceanPart = oceanPart;
  }

}

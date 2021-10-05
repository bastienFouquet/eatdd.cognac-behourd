import {Person} from "./Person";
import {WeightCategoryService} from '../services/WeightCategoryService';
import {WeightCategory} from './WeightCategory';

export class Team {
  public members: Person[];

  constructor() {
    this.members = [];
  }

  public getAverageWeight(): number {
    let totalWeight = 0;
    for (const member of this.members) {
      totalWeight += member.weight;
    }
    return totalWeight / this.members.length;
  }

  public getAverageSeniority(): number {
    let totalSeniority = 0;
    for (const member of this.members) {
      totalSeniority += member.getSeniority();
    }
    return totalSeniority / this.members.length;
  }

  public getAverageWeightCategory(): WeightCategory {
    return WeightCategoryService.getInstance().findOneByWeight(this.getAverageWeight());
  }

}

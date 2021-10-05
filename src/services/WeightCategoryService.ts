import {WeightCategory} from '../classes/WeightCategory';

export class WeightCategoryService {
  public weightCategories: WeightCategory[];
  private static instance: WeightCategoryService;

  constructor() {
    this.loadWeightCategories();
    WeightCategoryService.instance = this;
  }

  private loadWeightCategories(): void {
    this.weightCategories = [];
    const json = require('../../data/weightCategories.json');
    for (const data of json) {
      this.weightCategories.push(new WeightCategory({...data}));
    }
  }

  public static getInstance(): WeightCategoryService {
    if (!WeightCategoryService.instance) {
      return new WeightCategoryService();
    }
    return WeightCategoryService.instance;
  }

  public findOneByWeight(weight: number): WeightCategory {
    return WeightCategoryService.instance.weightCategories.find((el: WeightCategory) => {
      if (el.max === null && el.min !== null) {
        return el.min < weight;
      } else if (el.min === null && el.max !== null) {
        return el.max > weight;
      } else {
        return el.min <= weight && el.max >= weight;
      }
    });
  }

}

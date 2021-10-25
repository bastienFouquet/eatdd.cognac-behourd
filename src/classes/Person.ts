import {WeightCategory} from './WeightCategory';
import {WeightCategoryService} from '../services/WeightCategoryService';

interface IPerson {
  firstname: string;
  lastname: string;
  yearRegistration?: number;
  weight?: number;
  weightCategory?: WeightCategory;
  weapon: string;
  armor?: string;
}

export class Person {
  public firstname: string;
  public lastname: string;
  public yearRegistration: number;
  public weight: number;
  public weightCategory: WeightCategory;
  public weapon: string;
  public armor: string;

  constructor({firstname, lastname, weightCategory, weight, weapon, armor, yearRegistration}: IPerson) {
    this.firstname = firstname;
    this.lastname = lastname;
    if (weightCategory && !weight) {
      this.weightCategory = weightCategory;
      this.weight = Person.calculateWeight(weightCategory);
    } else {
      this.weightCategory = WeightCategoryService.getInstance().findOneByWeight(weight);
      this.weight = weight;
    }
    this.weapon = weapon;
    this.armor = armor ? armor : 'Gambison'
    this.yearRegistration = yearRegistration ? yearRegistration : null;
  }

  private static calculateWeight(weightCategory: WeightCategory): number {
    if (weightCategory.min !== null && weightCategory.max !== null) {
      return (weightCategory.max + weightCategory.min) / 2;
    } else {
      if (weightCategory.max !== null) {
        return weightCategory.max;
      } else {
        return weightCategory.min;
      }
    }
  }

  public getSeniority(): number {
    let seniority = 0;
    if (this.yearRegistration) {
      seniority = new Date().getFullYear() - this.yearRegistration;
      if (Math.sign(seniority) === -1) {
        throw new Error('Seniority cannnot be negative');
      }
    }
    return seniority;
  }
}

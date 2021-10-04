import {WeightCategory} from './WeightCategory';

export class Person {
  public firstname: string;
  public lastname: string;
  public yearRegistration: number;
  public weight: number;
  public weightCategory: WeightCategory;
  public weapon: string;
  public armor: string;

  constructor(firstname, lastname, weightCategory, weapon) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.weightCategory = weightCategory;
    this.weight = Person.calculateWeight(weightCategory);
    this.weapon = weapon;
    this.armor = 'Gambison';
    this.yearRegistration = null;
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
    const seniority = new Date().getFullYear() - this.yearRegistration;
    if (Math.sign(seniority) === -1) {
      throw new Error('Seniority cannnot be negative');
    }
    return seniority;
  }
}

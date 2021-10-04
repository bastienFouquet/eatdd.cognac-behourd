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
    this.weight = (weightCategory.max + weightCategory.min) / 2;
    this.weapon = weapon;
    this.armor = 'Gambison';
    this.yearRegistration = null;
  }
}

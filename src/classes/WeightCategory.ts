interface IWeightCategory {
  id: number;
  label: string;
  max?: number;
  min?: number;
}

export class WeightCategory {
  public id: number;
  public label: string;
  public max: number;
  public min: number;

  constructor({id, label, max, min}: IWeightCategory) {
    this.id = id;
    this.label = label;
    this.max = max;
    this.min = min;
  }

}

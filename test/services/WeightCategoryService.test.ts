import {WeightCategoryService} from '../../src/services/WeightCategoryService';

describe('WeightCategoryService', () => {
  describe('findOneByWeight', () => {
    it('should get category by weight', () => {
      const category = WeightCategoryService.getInstance().findOneByWeight(56);
      expect(category.min).toBeLessThanOrEqual(56);
      expect(category.max).toBeGreaterThanOrEqual(56);
    });
    it('should get the lower category category by weight', () => {
      const category = WeightCategoryService.getInstance().findOneByWeight(30);
      expect(category.min).toBe(null);
      expect(category.max).toBeGreaterThanOrEqual(30);
    });
    it('should get the greater category category by weight', () => {
      const category = WeightCategoryService.getInstance().findOneByWeight(150);
      expect(category.min).toBeLessThanOrEqual(150);
      expect(category.max).toBe(null);
    });
  });
});

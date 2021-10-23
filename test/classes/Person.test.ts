import {Person} from '../../src/classes/Person';
import {WeightCategoryService} from '../../src/services/WeightCategoryService';

describe('Person', () => {
  describe('New person', () => {
    it('new person added to game', () => {
      const person: Person = new Person({
        firstname: 'Jean',
        lastname: 'DUPONT',
        weightCategory: WeightCategoryService.getInstance().weightCategories.find(el => el.id === 2),
        weapon: 'Hallebarde'
      });
      expect(person.weight).toBe(54.5);
      expect(person.armor).toBe('Gambison');
    });
    it('new person already members', () => {
      const person: Person = new Person({
        firstname: 'Jean',
        lastname: 'DUPONT',
        weight: 56,
        weapon: 'Hallebarde',
        armor: 'Mailles',
        yearRegistration: 2000
      });
      expect(person.weight).toBe(56);
    });
  });
});

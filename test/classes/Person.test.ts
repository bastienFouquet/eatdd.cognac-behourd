import {Person} from '../../src/classes/Person';

describe('Person', () => {
  describe('New person', () => {
    it('new person should het a weight', () => {
      const person: Person = new Person('Jean', 'DUPONT',
        {id: 1, label: 'Mouche', max: 52, min: 57}, 'Hallebarde');
      expect(person.weight).toBe(54.5);
      expect(person.armor).toBe('Gambison');
    });
  });
});

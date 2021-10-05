import {Person} from '../../src/classes/Person';

describe('Person', () => {
  describe('New person', () => {
    it('new person should het a weight', () => {
      const person: Person = new Person('Jean', 'DUPONT',
        {id: 1, label: 'Mouche', max: 57, min:null}, 'Hallebarde');
      expect(person.weight).toBe(57);
      expect(person.armor).toBe('Gambison');
    });
  });
});

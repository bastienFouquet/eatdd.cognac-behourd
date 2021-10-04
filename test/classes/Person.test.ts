import {Person} from '../../src/classes/Person';

describe('Person', () => {
  describe('New person', () => {
    it('should add a person', () => {
      const person: Person = new Person('Jean', 'DUPONT',
        {id: 1, max: 52, min: 47}, 'Hallebarde');
      expect(person.firstname).toBe('Jean');
      expect(person.lastname).toBe('DUPONT');
      expect(person.weight).toBe(49.5);
      expect(person.weightCategory).not.toBe(null);
      expect(person.weapon).toBe('Hallebarde');
      expect(person.armor).toBe('Gambison');
      expect(person.yearRegistration).toBe(null);
    });
  });
});

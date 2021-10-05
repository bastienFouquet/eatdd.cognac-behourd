import {Person} from '../../src/classes/Person';

describe('Person', () => {
  describe('New person', () => {
    it('new person added to game', () => {
      const person: Person = new Person({
        firstname: 'Jean',
        lastname: 'DUPONT',
        weightCategory:
          {id: 1, label: 'Mouche', max: 52, min: 57},
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

import {Person} from "../../src/classes/Person";
import {Game} from "../../src/classes/Game";

describe('Game', () => {
  describe('New game', () => {
    it('should initialize a game with two balanced teams', () => {
      const person1: Person = new Person({
          firstname: 'Paul',
          lastname: 'Gros',
          weight: 134,
          weapon: 'Hache 2M',
          yearRegistration: 2006
        }
      );

      const person2: Person = new Person({
        firstname: 'Louis',
        lastname: 'Blanc',
        weight: 47,
        weapon: 'Dagues',
        yearRegistration: 2020
      });

      const person3: Person = new Person({
        firstname: 'Jean-Michel',
        lastname: 'Giraud',
        weight: 79,
        weapon: 'Sabre',
        yearRegistration: 1987
      });

      const person4: Person = new Person({
        firstname: 'Théophile',
        lastname: 'Paris',
        weight: 102,
        weapon: 'Hallebarde',
        yearRegistration: 2003
      });

      const members = [person2, person4, person1, person3];

      const game: Game = new Game(members);

      expect(game.teamA.members.length === game.teamB.members.length).toBe(true);
      expect(game.teamA.members.length + game.teamB.members.length).toEqual(4);
      if (game.teamA.members.length === game.teamB.members.length) {
        expect(game.teamA.getAverageWeightCategory()).toBe(game.teamB.getAverageWeightCategory());
      }
    })
  })
})

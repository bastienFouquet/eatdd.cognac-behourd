import {Person} from "../../src/classes/Person";
import {Game} from "../../src/classes/Game";

describe('Game', () => {
    describe('New game', () => {
        it('should initialize a game with two balanced teams', () => {
            const person1: Person = new Person('Paul', 'Gros',
                {id: 8, min: 91}, 'Hache 2M');
            person1.yearRegistration = 2006;

            const person2: Person = new Person('Louis', 'Blanc',
                {id: 1, max: 52}, 'Dagues');
            person2.yearRegistration = 2020;

            const person3: Person = new Person('Jean-Michel', 'Giraud',
                {id: 6, max: 81, min: 75}, 'Sabre');
            person3.yearRegistration = 1987;

            const person4: Person = new Person('Théophile', 'Paris',
                {id: 8, min: 91}, 'Hallebarde');
            person4.yearRegistration = 2003;

            const members = [person1, person2, person3, person4];

            const game: Game = new Game(members);
            expect(game.teamA.members.length === game.teamB.members.length).toBe(true);
            expect(game.teamA.getAvarageWeightCategory() === game.teamB.getAvarageWeightCategory()).toBe(true);

        })
    })
})
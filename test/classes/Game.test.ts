import {Person} from "../../src/classes/Person";
import {Game} from "../../src/classes/Game";

let game: Game;
beforeAll(() => {
    game = new Game(buildingMembers());
});

function randomWeight() {
    return Math.random() * (150 - 45) + 45;
}

function randomYearRegistration() {
    return Math.random() * (2021 - 1980) + 1980;
}

function buildingMembers() {
    const person1: Person = new Person({
        firstname: 'Paul',
        lastname: 'Gros',
        weight: randomWeight(),
        weapon: 'Hache 2M',
        yearRegistration: randomYearRegistration()
    });
    const person2: Person = new Person({
        firstname: 'Louis',
        lastname: 'Blanc',
        weight: randomWeight(),
        weapon: 'Dagues',
        yearRegistration: randomYearRegistration()
    });
    const person3: Person = new Person({
        firstname: 'Jean-Michel',
        lastname: 'Giraud',
        weight: randomWeight(),
        weapon: 'Sabre',
        yearRegistration: randomYearRegistration()
    });
    const person4: Person = new Person({
        firstname: 'Théophile',
        lastname: 'Paris',
        weight: randomWeight(),
        weapon: 'Hallebarde',
        yearRegistration: randomYearRegistration()
    });
    const person5: Person = new Person({
        firstname: 'Théophile',
        lastname: 'Paris',
        weight: randomWeight(),
        weapon: 'Hallebarde',
        yearRegistration: randomYearRegistration()
    });
    const person6: Person = new Person({
        firstname: 'Théophile',
        lastname: 'Paris',
        weight: randomWeight(),
        weapon: 'Hallebarde',
        yearRegistration: randomYearRegistration()
    });
    const person7: Person = new Person({
        firstname: 'Théophile',
        lastname: 'Paris',
        weight: randomWeight(),
        weapon: 'Hallebarde',
        yearRegistration: randomYearRegistration()
    });
    const person8: Person = new Person({
        firstname: 'Théophile',
        lastname: 'Paris',
        weight: randomWeight(),
        weapon: 'Hallebarde',
        yearRegistration: randomYearRegistration()
    });
    return [person1, person2, person3, person4, person5, person6, person7, person8];
}


describe('Game', () => {
    describe('New game with balanced teams', () => {
        it('teams have almost same average weight category', () => {
            expect(game.teamA.getAverageWeightCategory().id).toBeCloseTo(game.teamA.getAverageWeightCategory().id, 0);
        })
        it('teams have same number of members', () => {
            const teamALength = game.teamA.members.length;
            const teamBLength = game.teamB.members.length;
            expect(teamALength).toEqual(teamBLength);
        })
        it('teams take all members', () => {
            const teamALength = game.teamA.members.length;
            const teamBLength = game.teamB.members.length;
            expect(buildingMembers().length).toEqual(teamALength + teamBLength);
        })
        it('teams have almost same average seniority (+/- 5 years)', () => {
            console.log(game.teamA.getAverageSeniority());
            console.log(game.teamB.getAverageSeniority());
            expect(game.teamA.getAverageSeniority()).toBeCloseTo(game.teamB.getAverageSeniority(), -1);

        })
    })
})

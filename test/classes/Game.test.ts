import {Game} from "../../src/classes/Game";
import {buildingMembers} from '../builder/buildMembers';

let game: Game;

describe('Game', () => {
  describe('New game with all criteria balanced teams', () => {
    beforeAll(() => {
      game = new Game(buildingMembers(8, 75, 81, 1980, 1985));
    });
    it('teams take all members', () => {
      const teamALength = game.teamA.members.length;
      const teamBLength = game.teamB.members.length;
      expect(8).toEqual(teamALength + teamBLength);
    })
    it('teams have same number of members', () => {
      const teamALength = game.teamA.members.length;
      const teamBLength = game.teamB.members.length;
      expect(teamALength).toEqual(teamBLength);
    })
  })
  describe('New game with weight balanced teams', () => {
    beforeAll(() => {
      game = new Game(buildingMembers(31, 63, 91, 1980, 1985));
    });
    it('teams have same average weight category', () => {
      expect(game.teamA.getAverageWeightCategory().id).toEqual(game.teamB.getAverageWeightCategory().id);
    })
  })
  describe('New game with seniority balanced teams', () => {
    beforeAll(() => {
      game = new Game(buildingMembers(31, 45, 150, 1980, 2000));
    });
    it('teams have almost same average seniority (+/- 10 years)', () => {
      expect(game.teamA.getAverageSeniority()).toBeCloseTo(game.teamB.getAverageSeniority(), -1.3);
    })
  })
})

import {Game} from "../../src/classes/Game";
import {buildingMembers} from '../builder/buildMembers';

let game: Game;

describe('Game', () => {
  beforeAll(() => {
    game = new Game(buildingMembers(8, 75, 81, 1980, 1985));
  });
  describe('New game with balanced teams', () => {
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
    it('teams have same average weight category', () => {
      expect(game.teamA.getAverageWeightCategory().id).toBeCloseTo(game.teamA.getAverageWeightCategory().id, 0);
    })
    it('teams have almost same average seniority (+/- 5 years)', () => {
      expect(game.teamA.getAverageSeniority()).toBeCloseTo(game.teamB.getAverageSeniority(), -1);
    })
  })
})

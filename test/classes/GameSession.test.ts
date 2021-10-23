import {buildingMembers} from '../builder/buildMembers';
import {GameSession} from '../../src/classes/GameSession';
import {Game} from '../../src/classes/Game';

describe('GameSession', () => {
  let session: GameSession;
  let firstGame: Game;
  let secondGame: Game;
  beforeAll(() => {
    session = new GameSession();
  })
  it('should create a game by a session', () => {
    const players = buildingMembers(4, 75, 81, 1980, 1985);
    session.addPlayers(players);
    firstGame = session.startGame().getGame();
    expect(firstGame).toBeInstanceOf(Game);
  });
  it('should manage players of next game', () => {
    const players = session.getPlayers();
    const playersToRemove = [players[0], players[1]];
    const playersToAdd = buildingMembers(4, 75, 81, 1980, 1985);
    session.removePlayers(playersToRemove);
    session.addPlayers(playersToAdd);
    secondGame = session.startGame().getGame();
    const firstGamePlayersLength = firstGame.teamA.members.length + firstGame.teamB.members.length;
    const secondGamePlayersLength = secondGame.teamA.members.length + secondGame.teamB.members.length;
    expect(firstGamePlayersLength).toBe(4);
    expect(secondGamePlayersLength).toBe(6);
  })
});

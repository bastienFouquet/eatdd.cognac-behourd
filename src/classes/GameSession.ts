import {Person} from './Person';
import {Game} from './Game';

export class GameSession {
  private readonly players: Person[];
  private game: Game;

  constructor() {
    this.players = [];
  }

  public getPlayers(): Person[] {
    return this.players;
  }

  public addPlayers(players: Person[]): GameSession {
    for (const player of players) {
      this.players.push(player);
    }
    return this;
  }

  public removePlayers(players: Person[]): GameSession {
    for (const player of players) {
      if (this.players.includes(player)) {
        this.players.splice(this.players.indexOf(player), 1);
      }
    }
    return this;
  }

  public startGame(): GameSession {
    this.game = new Game(this.players);
    return this;
  }

  public getGame(): Game {
    return this.game;
  }
}

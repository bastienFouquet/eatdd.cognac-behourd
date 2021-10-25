import {importXlsx} from "./helpers/importXlsx";
import {WeightCategoryService} from './services/WeightCategoryService';
import {Person} from './classes/Person';
import {GameSession} from './classes/GameSession';
import {Game} from './classes/Game';

const reader = require('readline-sync');
const session = new GameSession();

function printPlayers(players: Person[]) {
  console.log('Vos joueurs : ');
  console.table(players.map((el) => {
    return {...el, weightCategory: el.weightCategory.label}
  }));
}

async function fileQuestion(): Promise<void> {
  try {
    const pathFile = await reader.question('Veuillez indiquer le chemin du fichier xlsx afin d\'importer les équipes : ');
    session.addPlayers(importXlsx(pathFile));
    console.log('Vos joueurs on été importés');
  } catch (e) {
    console.log(e.message);
    await fileQuestion();
  }
}

async function addPlayer(): Promise<void> {
  try {
    const isToAdd: string = await reader.question('Voulez-vous ajouter une personne ? [Y/N] ');
    switch (isToAdd.toLowerCase()) {
      case 'y':
        const firstname = reader.question('Prénom : ');
        const lastname = reader.question('Nom : ');
        console.table(WeightCategoryService.getInstance().weightCategories);
        const weightCategoryId = await reader.question('Catégorie de poids (Taper l\'id) : ');
        const weightCategory = WeightCategoryService.getInstance().weightCategories
          .find(el => el.id === Number(weightCategoryId));
        const weapon = await reader.question('Arme : ');
        const person = new Person({
          firstname,
          lastname,
          weightCategory,
          weapon
        });
        session.addPlayers([person]);
        await addPlayer();
        break;
      case 'n':
        break;
      default:
        console.log('Veuillez répondre par Y (oui) ou N (non) ');
        await addPlayer();
        break;
    }
    const isToRemove: string = await reader.question('Voulez-vous retirer une personne ? [Y/N] ');
    switch (isToRemove.toLowerCase()) {
      case 'y':
        printPlayers(session.getPlayers());
        const indexToRemove = reader.question('Indiquez l\'index du joueur à retirer : ');
        const playerToRemove = session.getPlayers().find((el, index, self) => {
          return self.indexOf(el) === indexToRemove;
        })
        session.removePlayers([playerToRemove]);
        break;
      case 'n':
        printPlayers(session.getPlayers());
        await startGame();
        break;
      default:
        console.log('Veuillez répondre par Y (oui) ou N (non) ');
        await addPlayer();
        break;
    }
  } catch (e) {
    console.error(e);
    await addPlayer();
  }
}

async function startGame(): Promise<void> {
  const answer = await reader.question('Voulez-vous lancer la partie ? [Y/N] ');
  switch (answer.toLowerCase()) {
    case 'y':
      const game: Game = session.startGame().getGame();
      console.log('Equipe A : ');
      printPlayers(game.teamA.members);
      console.log('Equipe B : ');
      printPlayers(game.teamB.members);
      break;
    case 'n':
      await addPlayer()
      break;
    default:
      console.log('Veuillez répondre par Y (oui) ou N (non) ');
      await startGame();
      break;
  }
}

async function run(): Promise<void> {
  await fileQuestion();
  await addPlayer();
  await startGame();
}

run();

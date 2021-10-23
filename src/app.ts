import {importXlsx} from "./helpers/importXlsx";
import {WeightCategoryService} from './services/WeightCategoryService';
import {Person} from './classes/Person';

const reader = require('readline-sync');
let persons: Person[] = [];

function printPlayers() {
  console.log('Vos joueurs : ');
  console.table(persons.map((el) => {
    return {...el, weightCategory: el.weightCategory.label}
  }));
}

async function fileQuestion(): Promise<void> {
  try {
    const pathFile = await reader.question('Veuillez indiquer le chemin du fichier xlsx afin d\'importer les équipes : ');
    persons = importXlsx(pathFile);
    console.log('Vos joueurs on été importés');
  } catch (e) {
    console.log(e.message);
    await fileQuestion();
  }
}

async function addPerson(): Promise<void> {
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
        persons.push(person);
        await addPerson();
        break;
      case 'n':
        printPlayers();
        break;
      default:
        console.log('Veuillez répondre par Y (oui) ou N (non) ');
        await addPerson();
        break;
    }
  } catch (e) {
    console.error(e);
    await addPerson();
  }
}

async function run(): Promise<void> {
  await fileQuestion();
  await addPerson();
}

run();

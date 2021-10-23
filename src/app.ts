import {WeightCategoryService} from './services/WeightCategoryService';
import { importXlsx } from "./helpers/importXlsx";
import * as readline from 'readline';

async function run() {
    console.log('App started');
    WeightCategoryService.getInstance();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Veuillez indiquer le path du fichier xlsx : ', (answer) => {
        importXlsx(answer);
        rl.close();
    });
}

run();

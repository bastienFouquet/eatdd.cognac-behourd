import {WeightCategoryService} from './services/WeightCategoryService';

function run() {
  console.log('App started');
  WeightCategoryService.getInstance();
}

run();

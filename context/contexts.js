import categoryController from '../controllers/categoryController.js';
import { mainCards, animals } from '../data/data.js';
export default {
  categories: categoryController.categories,
  mainCards,
  animals,
};

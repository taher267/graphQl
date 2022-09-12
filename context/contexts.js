import productsControleler from '../controllers/productsControleler.js';
import categoryController from '../controllers/categoryController.js';
import { mainCards, animals } from '../data/data.js';
export default {
  products: productsControleler.products,
  categories: categoryController.categories,
  mainCards,
  animals,
};

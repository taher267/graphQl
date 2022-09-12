import productsControleler from '../controllers/productsControleler.js';
import categoryController from '../controllers/categoryController.js';
export default {
  Query: {
    products: productsControleler.products,
    singleProduct: productsControleler.product,
    categories: (parent, args, { categories }) => categories(),
    category: categoryController.category,
    mainCards: (parent, args, { mainCards }) => mainCards,
    animals: (parent, args, { animals }) => animals,
    animal: (parant, { id }, { animals }) => animals.find((an) => an.id === id),
  },
  Category: {
    products: productsControleler.categoryProducts,
  },
};

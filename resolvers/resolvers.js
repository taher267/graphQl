import productsControleler from '../controllers/productsControleler.js';
export default {
  Query: {
    products: async (parent, args, context) =>
      await context.products(parent, args, context),
    singleProduct: productsControleler.product,
    categories: (parent, args, { categories }) => categories(),
    mainCards: (parent, args, { mainCards }) => mainCards,
    animals: (parent, args, { animals }) => animals,
    animal: (parant, { id }, { animals }) => animals.find((an) => an.id === id),
  },
};

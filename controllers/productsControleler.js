import { config } from 'dotenv';
config({ path: './config/.env' });
import axios from 'axios';
import { UserInputError } from 'apollo-server';
const URI = process.env.PZ_URI;
const consumer_key = process.env.CONSUMER_KEY;
const consumer_secret = process.env.CONSUMER_SECRET;
const pz_access = process.env.CONSUMER_ACCESS;

const error = (msg, status = 400) => {
  const e = new Error(msg ?? `ServeR ErroR OccereD!`);
  e.status = status;
  return e;
};

const products = async (par, { page, limit }, cxt) => {
  try {
    if (!URI || !consumer_key || !consumer_secret) throw error(null, 500);
    const per_page = parseInt(limit) && limit > 0 ? parseInt(limit) : 12;
    const page_no = parseInt(page) && page > 0 ? parseInt(page) : 1;
    const {
      data,
      headers: {
        'x-wp-total': totalProducts,
        'x-wp-totalpages': totalPages,
        link,
      },
    } = await axios.get(
      `${URI}products?${pz_access}&per_page=${per_page}&page=${page_no}`
    );

    return {
      products: data,
      totalPages,
      totalProducts,
      link,
    };
  } catch (e) {
    console.log(e);
  }
};

const product = async (par, { id }, cxt) => {
  try {
    if (!id) throw error(`Product id mandatory`);
    if (!parseInt(id)) throw error(`Product id should be number`);
    const { data } = await axios.get(
      `${URI}products/${parseInt(id)}?${pz_access}`
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

const categoryProducts = async (parent, { page, limit }, cxt) => {
  try {
    const { id } = parent;
    // console.log(page, parent);
    if (!id) throw new UserInputError(`Product id mandatory`);
    if (!URI || !consumer_key || !consumer_secret)
      throw new UserInputError(`ServeR ErroR OccereD!`);
    if (!parseInt(id)) throw error(`Product id should be number`);
    const per_page = parseInt(limit) && limit > 0 ? parseInt(limit) : 12;
    const page_no = parseInt(page) && page > 0 ? parseInt(page) : 1;
    const url = `${URI}products?category=${parseInt(
      id
    )}&per_page=${per_page}&page=${page_no}&${pz_access}`;
    const {
      data: products,
      headers: { 'x-wp-totalpages': totalPages, 'x-wp-total': totalProducts },
    } = await axios.get(url);
    return {
      products,
      totalPages,
      totalProducts,
    };
  } catch (e) {
    throw new UserInputError(e.message);
  }
};
export default { products, product, categoryProducts };

import { config } from 'dotenv';
config({ path: './config/.env' });
import axios from 'axios';
const URI = process.env.PZ_URI;
const consumer_key = process.env.CONSUMER_KEY;
const consumer_secret = process.env.CONSUMER_SECRET;
const pz_access = process.env.CONSUMER_ACCESS;
// console.log(URI);
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
    const { data } = await axios.get(
      `${URI}products?${pz_access}&per_page=${per_page}&page=${page_no}`
    );
    return data;
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

const categoryProducts = async ({ id }, args, cxt) => {
  try {
    if (!id) throw error(`Product id mandatory`);
    if (!URI || !consumer_key || !consumer_secret) throw error(null, 500);
    if (!parseInt(id)) throw error(`Product id should be number`);
    const { data } = await axios.get(
      `${URI}products?category=${parseInt(id)}&${pz_access}`
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};
export default { products, product, categoryProducts };

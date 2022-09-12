import { config } from 'dotenv';
config({ path: './config/.env' });
import axios from 'axios';
const URI = process.env.PZ_URI;
const consumer_key = process.env.CONSUMER_KEY;
const consumer_secret = process.env.CONSUMER_SECRET;
const pz_access = process.env.CONSUMER_ACCESS;

const categories = async (par, args, cxt) => {
  try {
    if (!consumer_key || !consumer_secret) throw error(null, 500);
    const { data } = await axios.get(`${URI}products/categories?${pz_access}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};
// categories().then((d) => console.log(d));
export default { categories };

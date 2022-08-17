import database from "../../database";

const listAllProductsService = async () => {
  try {
    const res = await database.query(`SELECT * FROM products;`);

    const products = res.rows;

    return products;
  } catch (error) {
    throw new Error(error);
  }
};

export default listAllProductsService;

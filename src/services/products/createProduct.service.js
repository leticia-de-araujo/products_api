import database from "../../database";

const createProductService = async (productData) => {
  try {
    if (productData.category_id) {
      const res = await database.query(
        `
        INSERT INTO
            products(name, price, category_id)
        VALUES
            ($1, $2, $3)
        RETURNING *;`,
        [productData.name, productData.price, productData.category_id]
      );

      const product = res.rows[0];

      return product;
    } else {
      const res = await database.query(
        `
            INSERT INTO
                products(name, price)
            VALUES
                ($1, $2)
            RETURNING *;`,
        [productData.name, productData.price]
      );

      const product = res.rows[0];

      return product;
    }
  } catch (error) {
    throw new Error(error);
  }
};

export default createProductService;

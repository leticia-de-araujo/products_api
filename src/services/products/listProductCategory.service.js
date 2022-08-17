import database from "../../database";

const listProductCategoryService = async (categoryId) => {
  try {
    const res = await database.query(
      `
        SELECT 
            p.name, 
            p.price, 
            c.name category
        FROM 
            products p
        JOIN
            categories c ON p.category_id = c.id
        WHERE 
	        c.id = $1;
        `,
      [categoryId]
    );

    if (res.rowCount === 0) {
      throw new Error("There are no products with this category's id.");
    }

    const products = res.rows;

    return products;
  } catch (error) {
    throw new Error(error);
  }
};

export default listProductCategoryService;

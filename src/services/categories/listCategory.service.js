import database from "../../database";

const listCategoryService = async (id) => {
  try {
    const res = await database.query(
      `SELECT * FROM categories WHERE id = $1;`,
      [id]
    );

    if (res.rowCount === 0) {
      throw new Error("Category not found.");
    }

    const category = res.rows[0];

    return category;
  } catch (error) {
    throw new Error(error);
  }
};

export default listCategoryService;

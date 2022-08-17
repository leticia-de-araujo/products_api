import database from "../../database";

const listAllCategoriesService = async () => {
  try {
    const res = await database.query(`SELECT * FROM categories;`);

    const categories = res.rows;

    return categories;
  } catch (error) {
    throw new Error(error);
  }
};

export default listAllCategoriesService;

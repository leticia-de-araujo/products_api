import database from "../../database";

const updateCategoryService = async (categoryData, id) => {
  try {
    if (categoryData.id) {
      delete categoryData.id;
    }

    let query = "UPDATE categories SET ";

    const keys = Object.keys(categoryData);
    const values = Object.values(categoryData);

    keys.forEach((key, index) => {
      query += `${key} = \$${index + 1}, `;
    });

    query = query.slice(0, -2);

    query += ` WHERE id = \$${keys.length + 1} RETURNING *;`;

    const res = await database.query(query, [...values, id]);

    if (res.rowCount === 0) {
      throw new Error("Category not found.");
    }

    const updatedCategory = res.rows[0];

    return updatedCategory;
  } catch (error) {
    throw new Error(error);
  }
};

export default updateCategoryService;

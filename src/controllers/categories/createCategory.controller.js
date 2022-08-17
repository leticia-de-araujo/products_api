import createCategoryService from "../../services/categories/createCategory.service";


const createCategoryController = async (request, response) => {
  const { name } = request.body;

  try {
    const category = await createCategoryService(name);

    return response.status(201).json({
      message: "Category created.",
      category: category,
    });
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

export default createCategoryController;

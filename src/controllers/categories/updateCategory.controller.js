import updateCategoryService from "../../services/categories/updateCategory.service";

const updateCategoryController = async (request, response) => {
  const { id } = request.params;
  const categoryData = request.body;

  try {
    const updatedCategory = await updateCategoryService(categoryData, id);

    return response.status(200).json({
      message: "Category updated.",
      category: updatedCategory,
    });
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export default updateCategoryController;

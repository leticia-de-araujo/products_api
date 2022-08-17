import listAllCategoriesService from "../../services/categories/listAllCategories.service";

const listAllCategoriesController = async (request, response) => {
  try {
    const categories = await listAllCategoriesService();

    return response.status(200).json(categories);
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export default listAllCategoriesController;

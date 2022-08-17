import listProductCategoryService from "../../services/products/listProductCategory.service";

const listProductCategoryController = async (request, response) => {
  const categoryId = request.params.id;

  try {
    const products = await listProductCategoryService(categoryId);

    return response.status(200).json(products);
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export default listProductCategoryController;

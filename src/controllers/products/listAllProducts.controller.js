import listAllProductsService from "../../services/products/listAllProducts.service";

const listAllProductsController = async (request, response) => {
  try {
    const products = await listAllProductsService();

    return response.status(200).json(products);
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export default listAllProductsController;

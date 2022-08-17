import createProductService from "../../services/products/createProduct.service";

const createProductController = async (request, response) => {
  const productData = request.body;

  try {
    const product = await createProductService(productData);

    return response.status(201).json({
      message: "Product created.",
      product: product,
    });
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export default createProductController;

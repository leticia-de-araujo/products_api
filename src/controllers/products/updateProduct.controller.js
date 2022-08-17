import updateProductService from "../../services/products/updateProduct.service";

const updateProductController = async (request, response) => {
  const { id } = request.params;
  const productData = request.body;

  try {
    const updatedProduct = await updateProductService(productData, id);

    return response.status(200).json({
      message: "Product updated.",
      product: updatedProduct,
    });
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export default updateProductController;

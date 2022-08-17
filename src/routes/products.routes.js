import { Router } from "express";
import createProductController from "../controllers/products/createProduct.controller";
import deleteProductController from "../controllers/products/deleteProduct.controller";
import listAllProductsController from "../controllers/products/listAllProducts.controller";
import listProductController from "../controllers/products/listProduct.controller";
import listProductCategoryController from "../controllers/products/listProductCategory.controller";
import updateProductController from "../controllers/products/updateProduct.controller";

const productsRoutes = Router();

productsRoutes.post("", createProductController);
productsRoutes.get("", listAllProductsController);
productsRoutes.get("/:id", listProductController);
productsRoutes.patch("/:id", updateProductController);
productsRoutes.delete("/:id", deleteProductController);
productsRoutes.get("/category/:id", listProductCategoryController);

export default productsRoutes;

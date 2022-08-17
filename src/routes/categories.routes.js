import { Router } from "express";
import createCategoryController from "../controllers/categories/createCategory.controller";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller";
import listAllCategoriesController from "../controllers/categories/listAllCategories.controller";
import listCategoryController from "../controllers/categories/listCategory.controller";
import updateCategoryController from "../controllers/categories/updateCategory.controller";

const categoriesRoutes = Router();

categoriesRoutes.post("", createCategoryController);
categoriesRoutes.get("", listAllCategoriesController);
categoriesRoutes.get("/:id", listCategoryController);
categoriesRoutes.patch("/:id", updateCategoryController);
categoriesRoutes.delete("/:id", deleteCategoryController);

export default categoriesRoutes;

import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import categoriesRoutes from "./routes/categories.routes";
import productsRoutes from "./routes/products.routes";

const app = express();

app.use(express.json());


app.use("/categories", categoriesRoutes);
app.use("/products", productsRoutes);

const PORT = process.env.PORT || 3333;

export default app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
  startDatabase();
});

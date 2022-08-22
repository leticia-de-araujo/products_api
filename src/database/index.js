import { Client } from "pg";
import "dotenv/config";

const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        user: "leara",
        host: "localhost",
        database: "tests_products",
        password: "Rumisir505",
        port: 5432,
      }
    : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      }
);

export const startDatabase = async () => {
  await database.connect();
  console.log(`Database connected on ${database.port}`);
};

export default database;
